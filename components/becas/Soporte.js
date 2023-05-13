import Image from "next/image";

export default function Soporte() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 bg-red-100 shadow-2xl rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <h1 className="mb-8 text-2xl text-left text-black md:text-center text-apple-system md:text-3xl">
            Soporte
          </h1>
          <p className="max-w-xl text-justify">
            Queremos que saques el máximo provecho de tu experiencia con las
            becas de H.E.R. en eventos y conferencias. Nos aseguramos de que
            haya una combinación de becas donde todxs se ayuden entre sí en su
            viaje a través de Web3. En cada evento hay diversidad de perfiles,
            con o sin experiencia, nuevos en Web3 y representantes de HER DAO
            SPAIN, siempre disponibles. Los líderes de equipo que son expertos
            en navegar a través de la conferencia/evento/experiencia brindan un
            espacio de apoyo. Creamos un ambiente de apertura, para que nadie se
            sienta abrumado.
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
