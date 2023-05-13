import Image from "next/image";

export default function Networking() {
  return (
    <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
      <div className="flex flex-col items-center gap-8 sm:flex-row md:flex-row">
        <div className="flex flex-col items-center">
          <Image
            className="flex-flex-col "
            src="/encuentros.jpg"
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div>
          <h1 className="mb-8 text-2xl text-center text-black text-apple-system md:text-3xl">
            Networking
          </h1>

          <p className="max-w-xl mx-auto mt-8 text-justify">
            Durante los distintos eventos, habrá siempre tiempo y lugar para
            crear conexiones significativas con las otras scholars de HER DAO
            SPAIN. Conecta con mujeres que han estado en el espacio blockchain
            durante años y son expertas en su campo, estas redes pueden ser
            particularmente valiosas ya que en estos eventos nos encontramos a
            buena parte de los lideres de la industria blockchain. Accede a una
            amplia red de mentores, en todos los ambitos, que te apoyan antes,
            durante, y, después de los eventos.
          </p>
        </div>
      </div>
    </div>
  );
}
