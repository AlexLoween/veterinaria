import Inclusion from "@/components/comunidad/estructura/mandatos/Inclusion";
import Innovacion from "@/components/comunidad/estructura/mandatos/Innovacion";
import Ingresos from "@/components/comunidad/estructura/mandatos/Ingresos";

export default function Descripcion() {
  return (
    <>
      <div className="max-w-screen-md mx-auto scale-75 px-auto">
        <h1 className="text-4xl text-center text-black text-apple-system">
          Todas las especialidades
        </h1>
        <div className="flex flex-col items-start justify-center md:gap-8 md:flex-row md:justify-center ">
          <div className="max-w-sm mx-auto mb-6 md:mb-0">
            <Inclusion />
          </div>
          <div className="mx-full max-w">
            <Ingresos />
          </div>
        </div>
      </div>
    </>
  );
}
