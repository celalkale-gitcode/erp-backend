import { Injectable } from '@nestjs/common';
import { prisma } from '../../common/prisma.service';

@Injectable()
export class ProductService {
  async create(data: any) {
    return prisma.urunler.create({ data });
  }

  async findByBarcode(barkod: string) {
    return prisma.urunler.findFirst({ where: { barkod } });
  }
}
