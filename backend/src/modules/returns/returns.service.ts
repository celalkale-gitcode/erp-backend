import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma.service';

@Injectable()
export class ReturnsService {
  async addReturn(urun_id: number, adet: number) {
    // iade kaydı
    await prisma.iadeler.create({
      data: { urun_id, adet }
    });

    // stoğa geri ekle
    return prisma.urunler.update({
      where: { id: urun_id },
      data: {
        stok_adedi: { increment: adet }
      }
    });
  }
}
