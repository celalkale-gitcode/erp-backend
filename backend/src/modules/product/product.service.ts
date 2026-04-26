import { prisma } from '../../common/prisma.service';

export class ProductService {
  async create(data) {
    return prisma.urunler.create({ data });
  }

  async findByBarcode(barkod: string) {
    return prisma.urunler.findFirst({ where: { barkod } });
  }
}
