import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Principal from "./components/Principal";
import Stats from "./components/Stats";
import Facilities from "./components/Facilities";
import Gallery from "./components/Gallery";
import Admission from "./components/Admission";
import Alumni from "./components/Alumni";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";
import school from "./config/school";

function App() {
  const theme = {
    "--primary": school.colors.primary,
    "--primary-light": school.colors.primaryLight,
    "--accent": school.colors.accent,
    "--accent-light": school.colors.accentLight,
  };

  return (
  <div
  className="min-h-screen bg-white text-gray-800 scroll-smooth"
  style={theme}
>
      <Navbar />

      <main className="pt-20">
        <Hero />

        <About />

        <Stats />

        <Principal />

        <Facilities />

        <Gallery />

        <Admission />

        <Alumni />

        <Contact />
      </main>

      <WhatsAppButton />

      <Footer />
    </div>
  );
}

export default App;