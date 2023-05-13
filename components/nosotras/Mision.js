import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";
import Banner from "@/components/Banner";
import About from "@/components/nosotras/About";

export default function Mision() {
  return (
    <div className="py-8 mb-8 bg-red-100 shadow-2xl">
      <div className="flex flex-col md:flex-row md:max-w-screen-md md:mx-auto">
        <div className="px-4 pt-8 pb-8">
          <h1 className="text-2xl text-center text-black text-apple-system md:text-3xl">
            Misión
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-justify">
            Nuestra misión es promover la equidad e inclusión de mujeres y
            personas no binarias en el mundo cripto, para contribuir en la
            diversificación del ecosistema blockchain y Web3. Para ello,
            brindaremos programas de formación y participación en diferentes
            eventos donde las personas de nuestra comunidad podrán poner en
            práctica y mejorar sus conocimientos, darse a conocer en el mercado
            y crear redes de contacto. Además, las acompañaremos durante todo el
            proceso teniendo en cuenta las necesidades individuales de cada una
            de ellas.
          </p>
        </div>
        <div className="px-4 pt-8 pb-8">
          <h1 className="text-2xl text-center text-black text-apple-system md:text-3xl">
            Visión
          </h1>
          <p className="max-w-xl mx-auto mt-8 text-justify">
            Nuestra visión es un mundo en el que las mujeres y personas no
            binarias tengan acceso a los mismos derechos y oportunidades que el
            resto de personas, independientemente de su origen racial o étnico.
            Estamos comprometidas a fomentar la colaboración e intercambio de
            conocimientos entre la comunidad global, con el objetivo de crear
            soluciones innovadoras y efectivas para los desafíos sociales y
            ambientales a los que se enfrenta el mundo.
          </p>
        </div>
      </div>
    </div>
  );
}
