import Image from "next/image";

export default function House() {
  return (
    <div className="flex items-center justify-center px-8 py-8 bg-zinc-100 ">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            className="flex flex-col rounded-3xl"
            src="/consultas.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Consulta
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
          ¡Ofrecemos atención veterinaria a domicilio! Es la manera más fácil de hacer que tu mascota tenga una visita al veterinario libre de estrés. ¡Nuestro equipo altamente capacitado realiza exámenes completos y precisos en la comodidad de tu hogar! No te preocupes por llevarte a tu mascota a la clínica o perder tiempo valioso en tu día. ¡Contáctanos ahora para programar una consulta y brindarle a tu mascota la atención personalizada que merece!
          </p>
        </div>
      </div>
    </div>
  );
}
