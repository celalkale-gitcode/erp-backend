async create(dto) {
  const urun = await this.prisma.urunler.create({ data: dto });

  const base = "999" + urun.id.toString().padStart(9, '0');
  const code = this.barcode.generateEAN13(base);

  await this.prisma.urunBarkodlari.create({
    data: { urunId: urun.id, sistemBarkod: code }
  });

  return urun;
}
