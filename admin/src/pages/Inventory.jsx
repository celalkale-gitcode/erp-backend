import API from "../api";

export default function Inventory() {
  const send = async () => {
    await API.post("/inventory/count", {
      urun_id: 1,
      latitude: 41,
      longitude: 29
    });
  };

  return (
    <div>
      <h3>Sayım</h3>
      <button onClick={send}>Sayım Yap</button>
    </div>
  );
}
