import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import {
  FaWhatsapp,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";
import { AiTwotoneHome } from "react-icons/ai";

const inter = Inter({ subsets: ["latin"] });

export default function Footer() {
  return (
    <div className="flex justify-center sm:w-full ">
      <footer
        aria-label="Site Footer"
        className="flex justify-between w-full px-10 mt-8 bg-cyan-100 rounded-xl md:items-center"
      >
        <div className="py-8 mx-xl sm:px-6">
          <div className="grid grid-cols-1 gap-1 mt-1 lg:grid-cols-2 lg:gap-32">
            <div className="max-w-sm mx-1 ">
              <div className="justify-between sm:flex sm:text-center">
                <Link className="w-full pb-4 md:w-1/3 lg:w-1/4" href="/inicio">
                  <Image
                    src="/logos.png"
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>{" "}
              </div>
              <div className="flex flex-row gap-4 py-2 mt-16 text-sm text-gray-700">
                <Link href="mailto:stelissanta30@gmail.com">
                  <GiMailbox size={25} />
                </Link>
                stelissanta30@gmail.com
              </div>
              <div className="flex flex-row gap-4 text-sm text-gray-700 text-start">
                <Link href="mailto:stelissanta30@gmail.com">
                  <AiTwotoneHome size={25} />
                </Link>
                Madrid, España
              </div>
              <div className="max-w-xl mx-1 mt-8">
                <form action="#" className="sm:flex sm:gap-4">
                  <div className="sm:flex-1"></div>
                </form>
              </div>

              <div className="flex gap-4 my-16 text-black lg:items-center">
                
                <Link href="https://www.instagram.com/stelis30/">
                  <FaInstagram size={30} />
                </Link>
                <Link href="https://www.linkedin.com/in/stella-santa-arbelaez-923750133">
                  <FaLinkedin size={30} />
                </Link>
                
              
                <Link  href="https://wa.me/653151156?text=¡Hola! Estoy interesada en agendar una cita.">
                  <FaWhatsapp size={30} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8 pb-8 text-center sm:justify-center sm:text-left">
              <div>
                <strong className="font-medium text-black"> Soporte </strong>

                <nav
                  aria-label="Footer Support Nav"
                  className="flex flex-col mt-8 space-y-1"
                >
                  <Link
                    className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                    href="/"
                  >
                    Preguntas frecuentes
                  </Link>
                  <Link
                    className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                    href="/"
                  >
                    Equipo
                  </Link>
                  <Link
                    className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                    href="mailto:hola@herdaospain.xyz"
                  >
                    Contacto
                  </Link>

                  <Link
                    className="text-sm text-gray-500 transition text-apple-system hover:text-red-700/75"
                    href="mailto:hola@herdaospain.xyz"
                  ></Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
