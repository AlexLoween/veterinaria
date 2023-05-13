import Link from "next/link";
import { FaTelegram, FaDiscord } from "react-icons/fa";

export default function Onboarding() {
  return (
    <>
      <div className="w-auto py-8 bg-gray-200">
        <p className="pb-8 mx-16 text-3xl font-bold text-center ">
          {" "}
          ¿Quieres formar parte?
        </p>
        <div className="flex justify-center ">
          <div className="flex flex-row items-center gap-2 pl-8 text-black">
            1. Pasa a saludarnos a nuestro canal de Telegram
            <Link href="https://telegram">
              <FaTelegram size={20} />
            </Link>
            <div className="flex flex-row gap-2 pl-8 text-black">
              {" "}
              <div className="flex flex-row items-center gap-2 text-black">
                2. Únete a nuestro discord, preséntate en el canal de bienvenida
                <Link href="https://discord.gg/7AypAG7j">
                  <FaDiscord size={20} />
                </Link>
              </div>
            </div>
            <p className="mx-16 ">
              {" "}
              3. Una vez que hayas solicitado convertirte en miembro, se te
              invitará a una llamada comunitaria en discord para que podamos
              conocernos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
