import { useState } from "react";
import API from "../api";

export default function Products() {
  const [name, setName] = useState("");

  const add = async () => {
    await API.post("/products", {
      urun_adi: name
    });
  };

  return (
    <div>
      <h3>Ürün Ekle</h3>
      <input onChange={(e) => setName(e.target.value)} />
      <button onClick={add}>Kaydet</button>
    </div>
  );
}
