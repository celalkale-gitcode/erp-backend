import { useEffect, useState } from "react";
import API from "../api";

export default function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/map").then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h3>Harita Verisi</h3>
      {data.map(i => (
        <div key={i.id}>
          {i.latitude} - {i.longitude}
        </div>
      ))}
    </div>
  );
}
