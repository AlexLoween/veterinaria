import Jerarquia from "@/components/comunidad/estructura/Jerarquia";
import Voto from "@/components/comunidad/estructura/Voto";
import Actividad from "@/components/comunidad/estructura/Actividad";
import Wallet from "@/components/comunidad/estructura/Wallet";

export default function Estructura() {
  return (
    <>
      <div className="mx-8 shadow-2xl bg-white-100 rounded-xl">
        <div className="relative flex items-start justify-center py-10 scale-100 bg-red-100 rounded-xl">
          <h1 className="font-bold text-left text-black md:text-2xl md:text-center text-apple-system ">
            ¿Cómo es su estructura?
          </h1>
        </div>
        <div className="relative flex items-start justify-center flex-1 h-32 gap-8 scale-75">
          <div
            className="relative z-10"
            style={{
              position: "relative",
              top: "-40%",
              bottom: "-40%",
              background: "white",
              borderRadius: "1rem",
            }}
          >
            <Jerarquia />
          </div>
          <div
            className="relative z-10 "
            style={{
              position: "relative",
              top: "-40%",
              bottom: "-40%",
              background: "white",
              borderRadius: "1rem",
            }}
          >
            <Voto />
          </div>
          <div
            className="relative z-10"
            style={{
              position: "relative",
              top: "-40%",
              bottom: "-40%",
              background: "white",
              borderRadius: "1rem",
            }}
          >
            <Actividad />
          </div>
          <div
            className="relative z-10"
            style={{
              position: "relative",
              top: "-40%",
              bottom: "-40%",
              background: "white",
              borderRadius: "1rem",
            }}
          >
            <Wallet />
          </div>
        </div>
        <div className="relative flex items-start justify-center px-4 py-4 scale-100 bg-red-400 rounded-xl">
          <p className="text-xs font-medium text-center text-white">
            Más información sobre las estructuras de las DAO, aquí
          </p>
        </div>
      </div>
    </>
  );
}
