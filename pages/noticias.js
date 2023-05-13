import Navigation from "@/components/Navigation";
import Image from "next/image";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Lanzamiento from "@/components/noticias/Lanzamiento";

export default function Noticias() {
  return (
    <>
      <Banner />
      <Navigation />
      <Lanzamiento />
      <Footer />
    </>
  );
}
