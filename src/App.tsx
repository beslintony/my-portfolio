import { useCallback, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import Navbar from "./components/Navbar";

function App() {
  const [isMenuClosed, setIsMenuClosed] = useState(false);

  const closeMenuOnOutsideClick = useCallback(() => {
    if (isMenuClosed) {
      setIsMenuClosed(false);
    }
  }, [isMenuClosed]);

  return (
    <div onClick={closeMenuOnOutsideClick}>
      <Navbar isMenuClosed={isMenuClosed} setIsMenuClosed={setIsMenuClosed} />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
