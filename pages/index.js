
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Actualidad from "@/components/inicio/Actualidad";
import Encuentros from "@/components/inicio/Encuentros";
import House from "@/components/inicio/House";
import Stage from "@/components/inicio/Stage";
import About from "@/components/nosotras/About";
import Marketing from "@/components/inicio/Marketing";


export default function Index() {
  return (
    <>
      <Navigation />
      <Stage />
      <About />
      <Actualidad />
      <House />
      <Encuentros />
      <Marketing />
      <Footer />
    </>
  );
}
