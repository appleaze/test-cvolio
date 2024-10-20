import Navbar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutMeSection from "./components/AboutMeSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutMeSection /> 
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
