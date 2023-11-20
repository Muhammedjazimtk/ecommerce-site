import "./App.css";
import Category from "./components/Category";
import FruitsSection from "./components/FruitsSection";
import Hero from "./components/Hero";
import VegSection from "./components/VegSection";
import NavBar from "./components/navBar";

function App() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Category />
      <FruitsSection />
      <VegSection />
    </main>
  );
}

export default App;
