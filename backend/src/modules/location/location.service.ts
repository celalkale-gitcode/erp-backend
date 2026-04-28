import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async createLocation(lokasyon_kodu: string) {
    return this.prisma.lokasyonlar.create({
      data: { lokasyon_kodu },
    });
  }

  async assignProduct(
    lokasyon_id: number,
    urun_id: number,
    beden: string,
  ) {
    return this.prisma.lokasyonUrunleri.create({ // ✅ camelCase
      data: {
        lokasyon_id, // ✅ Int → BigInt YOK
        urun_id,
        beden,
      },
    });
  }

  async getLocationProducts(lokasyon_id: number) {
    return this.prisma.lokasyonUrunleri.findMany({
      where: {
        lokasyon_id, // ✅ BigInt YOK
      },
      include: {
        urun: true,
        lokasyon: true,
      },
    });
  }
}
