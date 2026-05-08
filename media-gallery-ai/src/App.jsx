import About from "./components/About/About";
import AiStats from "./components/AiStats/AiStats";
import AudioSection from "./components/AudioSection/AudioSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import ImagesSection from "./components/ImagesSection/ImagesSection";
import NavbarSection from "./components/NavbarSection";
import VideosSection from "./components/VideosSection/VideosSection";

function App() {
  return (
    <>
      <NavbarSection />
      <Hero/>
      <About/>
      <ImagesSection/>
      <VideosSection/>
      <AudioSection/>
      <AiStats/>
      <Footer/>

    </>
  );
}

export default App;