import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";
import Banner from "@/components/Banner";
import Soporte from "@/components/becas/Soporte";
import Networking from "@/components/becas/Networking";
import Experiencia from "@/components/becas/Experiencia";
import Journey from "@/components/becas/Journey";

export default function Becas() {
  return (
    <>
      <Banner />
      <Navigation />
      <Soporte />
      <Networking />
      <Experiencia />
      <Journey />
      <Footer />
    </>
  );
}
