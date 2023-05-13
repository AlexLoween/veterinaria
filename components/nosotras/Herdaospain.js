import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Banner from "@/components/Banner";

export default function Herdaospain() {
  return (
    <>
      <div className="flex items-center justify-center px-4 py-8 bg-red-100 shadow-2xl ">
        <div className="flex flex-col items-center sm:flex-row md:flex-row">
          <div className="flex flex-col items-center w-full">
            <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
              Veterinaria a domicilio
            </h1>

            <p className="max-w-2xl mx-auto mt-8 text-justify">
            Porque la salud de tu mascota es nuestra pioridad, confia en nosotros
            </p>
            <p className="max-w-2xl mx-auto mt-1 text-justify">
            Veterinaria Estela.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
