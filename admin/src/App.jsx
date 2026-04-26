import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Inventory from "./pages/Inventory";
import Map from "./pages/Map";

export default function App() {
  return (
    <div>
      <h1>ERP ADMIN</h1>
      <Dashboard />
      <Products />
      <Inventory />
      <Map />
    </div>
  );
}
