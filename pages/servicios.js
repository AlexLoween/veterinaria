import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Servicios() {
  return (
    <>
      <Navigation />
      <div className="flex flex-row flex-wrap justify-center gap-16 px-16 pb-10 mr-10 lg-flex">
        <ServiceCard title="Consulta" />
        <ServiceCard title="Vacunacion"/>
        <ServiceCard title="Desparasitacion"/>
        <ServiceCard title="Certificados"/>
        <ServiceCard title="Guarderia"/>
        <ServiceCard title="Curas"/>
      </div>
      <Footer />
    </>
  );
}

function ServiceCard({ title = "Sin titul" }) {
  return (
    <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
      <div className="flex justify-center">
        <Image src="/consultas.jpg" alt="" width={190} height={190} />
      </div>

      <div className="flex flex-col justify-center lg:flex-row">
        <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
          <Link
            href="#"
            className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
          >
            {title}
          </Link>
        </div>
      </div>
    </article>
  );
}
