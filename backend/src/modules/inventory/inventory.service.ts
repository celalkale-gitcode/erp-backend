async updateStock(urunId: number, miktar: number, tip: string, gps?) {

  const urun = await this.prisma.urunler.findUnique({ where: { id: urunId } });

  const yeni = urun.stokAdedi + miktar;

  await this.prisma.urunler.update({
    where: { id: urunId },
    data: { stokAdedi: yeni }
  });

  await this.prisma.stokHareketleri.create({
    data: {
      urunId,
      tip,
      miktar,
      oncekiStok: urun.stokAdedi,
      sonrakiStok: yeni,
      latitude: gps?.lat,
      longitude: gps?.lng,
      lokasyonKodu: gps?.lokasyon
    }
  });
}
