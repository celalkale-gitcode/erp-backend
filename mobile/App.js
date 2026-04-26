import { Text, View, Button } from "react-native";

export default function App() {

  const send = async () => {
    await fetch("https://senin-api.onrender.com/inventory/count", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        urun_id: 1,
        latitude: 41.0,
        longitude: 29.0
      })
    });
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Text>ERP Mobile Scanner</Text>
      <Button title="Sayım Yap" onPress={send} />
    </View>
  );
}
