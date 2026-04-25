require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// TEST
app.get("/", (req, res) => {
  res.send("API çalışıyor 🚀");
});

// SAYIM (DB bağlantılı)
app.post("/count", async (req, res) => {
  try {
    const { PrismaClient } = require("@prisma/client");
    const prisma = new PrismaClient();

    const data = await prisma.stok_hareketleri.create({
      data: {
        urun_id: 1,
        tip: "COUNT",
        miktar: 1
      }
    });

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "DB hatası" });
  }
});

app.listen(process.env.PORT || 3000);
