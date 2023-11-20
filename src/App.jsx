import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import FruitsSection from "./components/FruitsSection";
import Hero from "./components/Hero";
import VegSection from "./components/VegSection";
import NavBar from "./components/navBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

function App() {
  const [showCart, setShowCart] = useState(true);
  return (
    <main>
      <NavBar />
      <Hero />
      <Category />
      <FruitsSection />
      <VegSection />
      <Footer />
    </main>
  );
}

export default App;
