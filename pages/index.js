import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import Actualidad from "@/components/inicio/Actualidad";
import Encuentros from "@/components/inicio/Encuentros";
import House from "@/components/inicio/House";
import Hackatones from "../components/inicio/Hackatones";
import Participacion from "@/components/inicio/Participacion";
import Marketing from "@/components/inicio/Marketing";
import Banner from "@/components/Banner";
import Stage from "@/components/inicio/Stage";
import About from "@/components/nosotras/About";
import Mision from "@/components/nosotras/Mision";

export default function Index() {
  return (
    <>
      <Banner />
      <Navigation />
      <Stage />
      <About />
      <Mision />
      <Actualidad />
      <House />
      <Encuentros />
      <Participacion />
      <Hackatones />
      <Marketing />
      <Footer />
    </>
  );
}
