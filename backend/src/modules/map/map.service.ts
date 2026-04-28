import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class MapService {
  async getAllPoints() {
    return PrismaService.stok_hareketleri.findMany({
      where: {
        latitude: { not: null },
        longitude: { not: null }
      }
    });
  }
}
