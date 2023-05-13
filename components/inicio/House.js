import Image from "next/image";

export default function House() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            className="flex-flex-col "
            src="/hackerhouse.jpg"
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
            Las Hacker House actuarán como centros neurálgicos para mujeres
            durante las conferencias destacadas. Proporcionarán oportunidades
            para la creación de comunidad y el desarrollo de la cultura,
            ofreciendo un entorno informal para que las mujeres con diferentes
            antecedentes profesionales se relacionen, eduquen y apoyen entre sí.
            De esta manera, estas casas sentarán las bases para la ideación y
            validación de proyectos, así como para la posible formación de
            equipos.
          </p>
        </div>
      </div>
    </div>
  );
}
