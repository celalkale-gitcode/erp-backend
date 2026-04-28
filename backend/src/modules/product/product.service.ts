import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async create(data: any) {
    //return this.prisma.urunler.create({ data });
  }

  async findAll() { // ✅ EKLENDİ
    //return this.prisma.urunler.findMany();
  }

  async findByBarcode(barkod: string) {
    //return this.prisma.urunler.findFirst({
      where: { barkodu: barkod },
    });
  }
}
