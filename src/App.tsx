import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import MyProjects from "./components/MyProjects";
import NavBar from "./components/Navbar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
