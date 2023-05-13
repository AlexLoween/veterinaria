import Image from "next/image";

export default function Actualidad() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-300 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Actualidad
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            A pesar de los esfuerzos iniciales por promover la inclusión en la
            tecnología blockchain y en la industria tecnológica en general, las
            mujeres continúan siendo subrepresentadas. Las barreras culturales y
            sociales aún resultan en que pocas mujeres solicitan y reciben
            financiamiento. La participación general de las mujeres en el
            ecosistema blockchain, la construcción de su infraestructura y
            cultura sigue siendo inadecuada. Esta falta de diversidad tiene
            implicaciones más allá de una cuestión de justicia social. A medida
            que blockchain define nuevos sistemas económicos, la homogeneidad
            entre sus creadores ha generado productos sesgados que refuerzan las
            desigualdades y desventajas ya existentes para las mujeres. La falta
            de diversidad no solo tiene consecuencias negativas, sino que
            también afecta la rentabilidad de las empresas. Según una encuesta
            que abarcó a 22,000 organizaciones, aquellas con menos del 30% de
            mujeres en roles influyentes pueden tener hasta un 15% menos de
            rentabilidad en comparación con aquellas que tienen un equilibrio
            saludable de género. Los datos son claros: la diversidad mejora la
            línea de fondo.
          </p>
        </div>

        <div className="flex flex-col-reverse md:flex-row">
          <Image
            src="/experiencia.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full"
          />
        </div>
      </div>
    </div>
  );
}
