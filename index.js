
app.post("/count", async (req, res) => {
  try {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();

    const { urun_id, latitude, longitude } = req.body;

    const data = await prisma.stok_hareketleri.create({
      data: {
        urun_id,
        tip: "COUNT",
        miktar: 1,
        latitude,
        longitude
      }
    });

    res.json(data);
  } catch (err) {
    console.error("DB ERROR:", err); // Logs’ta tam hata
    res.status(500).json({
      error: err.message,        // Postman’da gör
      code: err.code || null
    });
  }
});
