import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly service: ProductService) {}

  @Post()
  create(@Body() body: any) {
    return this.service.create(body);
  }

  @Get(':barkod')
  get(@Param('barkod') barkod: string) {
    return this.service.findByBarcode(barkod);
  }
}
