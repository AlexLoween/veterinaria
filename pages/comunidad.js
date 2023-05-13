import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Estructura from "@/components/comunidad/Estructura";
import Dao from "@/components/comunidad/Dao";
import Banner from "@/components/Banner";
import Comu from "@/components/comunidad/Comu";

export default function Comunidad() {
  return (
    <>
      {" "}
      <Banner />
      <Navigation />
      <div className="my-8 sm:w-full">
        <Comu />
      </div>
      <div className="my-8 sm:w-full">
        <Dao />
      </div>
      <div className="my-8 sm:w-full">
        <Estructura />
      </div>
      <Footer />
    </>
  );
}
