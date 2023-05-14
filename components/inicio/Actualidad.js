import Image from "next/image";

export default function Actualidad() {
  return (
    <div className="flex items-center justify-center px-8 py-8 bg-red-100">
      <div className="flex flex-col items-center gap-32 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Servicio a domicilio
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-2xl text-justify">
          En lugar de llevar a tu mascota a una clínica veterinaria, una veterinaria capacitada y con experiencia se desplaza  para llevar a cabo los exámenes médicos, diagnósticos y tratamientos necesarios.
Este servicio es particularmente útil para aquellos dueños de animales que tienen dificultades para transportar a su mascota a una clínica veterinaria, ya sea porque la mascota es demasiado grande para transportarla fácilmente, porque el dueño tiene dificultades de movilidad o porque la mascota se siente ansiosa o estresada en una clínica veterinaria.
Somos una excelente opción para aquellos dueños de mascotas que tienen múltiples animales o que tienen dificultades para sacar tiempo de su agenda para llevar a sus mascotas a la clínica. Además, este servicio permite una atención más personalizada y enfocada en las necesidades específicas de la mascota, ya que la veterinaria tiene la oportunidad de conocer el entorno en el que vive la mascota y puede hacer recomendaciones adaptadas a su estilo de vida.
En resumen, una veterinaria a domicilio somos una opción conveniente y personalizada para aquellos dueños de mascotas que buscan una atención médica de alta calidad y sin estrés para sus animales de compañía.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/domicilio.jpeg"
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
