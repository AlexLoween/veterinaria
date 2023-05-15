import Navigation from "@/components/Navigation";
import Link from "next/link";
import Footer from "@/components/Footer";
import { FaWhatsapp } from "react-icons/fa";
export default function Cita() {
  return (
    <>
      <Navigation />
      <section className="pb-32 bg-center bg-cover">
        <div className="max-w-xl mx-auto mt-16">
          <h1 className="pl-8 pr-8 text-3xl font-bold text-pink-300 md:text-3xl">
            PIDE TU CITA !
          </h1>
          
          <p className="pl-8 pr-8 mx-auto mt-8 text-2xl text-gray-600">
            Servicios veterinarios a domicilio evita 
            el estrés que conlleva llevarlos a una clínica.
            Somos la opción ideal para dueños de mascotas que buscan comodidad,
            profesionalismo y cuidado de alto nivel.
          </p>

          <div className="flex gap-8 pl-8 pr-8 mt-8 justify-left ">
            <Link
              href="https://wa.me/653151156?text=¡Hola! Necesito agendar una cita."
              className="px-12 py-3 font-medium text-white bg-green-500 rounded shadow text-xm block-level hover:bg-green-300 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              <FaWhatsapp className="inline-block mr-2 " size={20} />
              WhatsApp
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
