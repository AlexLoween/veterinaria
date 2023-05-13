import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Eventos() {
  return (
    <>
      <div className="px-4 py-3 text-white bg-black">
        <p className="text-sm font-medium text-center">
          Proximamente: ¡Lanzamiento oficial de HER DAO SPAIN!
        </p>
      </div>
      <Navigation />

      <div className="flex flex-col items-center justify-center gap-6 pb-10 md:flex-row">
        <article className="flex pt-4 flex-col w-full max-w-[16rem] mt-8 transition bg-purple border-2 rounded-md border-zinc-900 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/starknet.png" alt="" width={190} height={190} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <h3 className="pb-4 font-bold text-gray-900 uppercase">
                Starknet Basecamp
              </h3>
              <Link
                href="#"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-400 hover:bg-red-600"
              >
                Leer más
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-full max-w-[16rem] mt-8 transition bg-purple border-2 rounded-md border-zinc-900 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/womenhack.png" alt="" width={200} height={200} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <h3 className="pb-4 font-bold text-gray-900 uppercase">
                WOMENHACK EDITION
              </h3>
              <Link
                href="#"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-400 hover:bg-red-600"
              >
                Leer más
              </Link>
            </div>

            <div className=" sm:flex sm:items-end sm:justify-end"></div>
          </div>
        </article>
        <article className="flex pt-4 flex-col w-full max-w-[16rem] mt-8 transition bg-purple border-2 rounded-md border-zinc-900 hover:shadow-m sm: ">
          <div className="flex justify-center">
            <Image src="/ethbarc.png" alt="" width={200} height={200} />
          </div>

          <div className="flex flex-col justify-center lg:flex-row">
            <div className="p-4 border-gray-900/10 sm:border-l-transparent sm:p-6">
              <h3 className="pb-4 font-bold text-gray-900 uppercase">
                ETH BARCELONA
              </h3>
              <Link
                href="#"
                className="block px-5 py-3 text-xs font-bold text-center text-gray-900 uppercase transition bg-red-400 hover:bg-red-600"
              >
                Leer más
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
