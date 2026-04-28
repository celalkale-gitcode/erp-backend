import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {} // ✅ inject

  async create(data: any) {
    return this.prisma.urunler.create({ data }); // ✅
  }

  async findByBarcode(barkod: string) {
    return this.prisma.urunler.findFirst({
      where: { barkodu: barkod }, // ⚠️ alan adı senin schema’da "barkodu"
    });
  }
}
