import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Banner from "@/components/Banner";
import About from "@/components/nosotras/About";
import Mision from "@/components/nosotras/Mision";
import Implementacion from "@/components/nosotras/Implementacion";
import Equipo from "@/components/nosotras/Equipo";

export default function Nosotras() {
  return (
    <>
      <Banner />
      <Navigation />
      <About />
      <Implementacion />
      <Mision />
      <Equipo />
      <Footer />
    </>
  );
}
