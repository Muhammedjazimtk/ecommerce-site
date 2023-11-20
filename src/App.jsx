import { useState } from "react";
import "./App.css";
import Category from "./components/Category";
import FruitsSection from "./components/FruitsSection";
import Hero from "./components/Hero";
import VegSection from "./components/VegSection";
import NavBar from "./components/navBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';
import { CardContextProvider } from "./context/ContextCard";

function App() {
  const [showCart, setShowCart] = useState(false);
  return (
    <CardContextProvider>
      <main>
        <NavBar setShowCart={setShowCart} />
        <Hero />
        <Category />
        <FruitsSection />
        <VegSection />
        <Footer />
        {showCart && <Cart showCart={showCart} setShowCart={setShowCart} />}
        <ToastContainer />
      </main>
    </CardContextProvider>
  );
}

export default App;
