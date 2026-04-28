import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class MapService {
  constructor(private prisma: PrismaService) {} // ✅ DI

  async getAllPoints() {
    return this.prisma.stokHareketleri.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null }
      }
    });
  }
}
