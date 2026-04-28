import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ReturnsService {
  constructor(private prisma: PrismaService) {}

  async addReturn(urun_id: number, adet: number) {
    return this.prisma.$transaction(async (tx) => {
      // 1. iade oluştur
      const iade = await tx.iadeler.create({
        data: {
          durum: 'OLUSTURULDU',
          islem_tarihi: new Date(),
        },
      });

      // 2. iade kalemi ekle
      await tx.iadeKalemleri.create({
        data: {
          iade_id: iade.id,
          urun_id,
          adet,
          stok_etkisi: true,
          islenmis: true,
        },
      });

      // 3. stok artır
      await tx.urunler.update({
        where: { id: urun_id },
        data: {
          stok_adedi: { increment: adet },
        },
      });

      return iade;
    });
  }
}
