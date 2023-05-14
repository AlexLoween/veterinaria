import Image from "next/image";

export default function Encuentros() {
  return (
    <div className="flex items-center justify-center px-8 py-8 bg-red-100">
      <div className="flex flex-col items-center gap-32 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Certificados
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-2xl text-justify">
            ¡Nuestro servicio de certificados veterinarios a domicilio es lo más
            conveniente! Olvídate de hacer filas y de perder tiempo valioso.
            ¡Nuestro equipo de expertos viene a tu casa para ofrecerte
            certificaciones de vacunas, permisos de viaje y mucho más! ¿Tienes
            una mascota activa o tienes un horario ocupado? ¡No hay problema!
            Programa una cita con nosotros y nosotros nos encargamos del resto.
            ¡Obtén los documentos importantes que necesitas para tu mascota sin
            salir de tu hogar!
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/certificados.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
}
