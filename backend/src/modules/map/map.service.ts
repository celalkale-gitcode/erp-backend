import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma.service';

@Injectable()
export class MapService {
  async getAllPoints() {
    return prisma.stok_hareketleri.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null }
      }
    });
  }
}
