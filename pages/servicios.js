import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Servicios() {
  return (
    <>
      <Navigation />
      <div className="flex flex-row flex-wrap justify-center gap-16 px-16 pb-10 mr-10 lg-flex">
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto1.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
        <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="contacto/"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400">
                Consulta
              </Link>
            </div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto2.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="contacto/"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
              >
                Vacunación
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto3.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="/contacto"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
              >
                Desparasitación
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto4.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="contacto/"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
              >
                Certificados
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto5.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="#"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
              >
                Guarderia
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-[16rem] min-w-[16rem] mt-8 transition bg-white border-2 rounded-md border-zinc-600 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/foto6.jpg" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <Link
                href="contacto/"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-300 whitespace-nowrap hover:bg-red-400"
              >
                Curas
              </Link>
            </div>
            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
      </div>
      <Footer />
    </>
  );
}
