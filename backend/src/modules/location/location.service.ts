import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma.service';

@Injectable()
export class LocationService {
  async createLocation(raf_kodu: string) {
    return prisma.lokasyonlar.create({
      data: { raf_kodu }
    });
  }

  async assignProduct(lokasyon_id: number, urun_id: number, beden: string) {
    return prisma.lokasyon_urunleri.create({
      data: {
        lokasyon_id,
        urun_id,
        beden
      }
    });
  }

  async getLocationProducts(lokasyon_id: number) {
    return prisma.lokasyon_urunleri.findMany({
      where: { lokasyon_id }
    });
  }
}
