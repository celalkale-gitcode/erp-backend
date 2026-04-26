import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private service: ProductService) {}

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }

  @Get(':barkod')
  getByBarcode(@Param('barkod') barkod: string) {
    return this.service.findByBarcode(barkod);
  }
}
