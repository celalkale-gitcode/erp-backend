require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API çalışıyor 🚀");
});

app.post("/count", async (req, res) => {
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
});

app.get("/map", async (req, res) => {
  const data = await prisma.stok_hareketleri.findMany();
  res.json(data);
});

app.listen(process.env.PORT || 3000);
