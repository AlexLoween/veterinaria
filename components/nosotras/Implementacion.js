import Programa from "./Programa";
import Formaciones from "@/components/nosotras/Formaciones";
import Startup from "./Startup";
import Hackeando from "./Hackeando";

export default function Implementacion() {
  return (
    <>
      <div className="py-4 mx-8 shadow-2xl bg-white-100 rounded-xl">
        <div className="relative flex items-start justify-center py-10 scale-100 bg-red-100 rounded-xl">
          <h1 className="font-bold text-left text-black md:text-2xl md:text-center text-apple-system ">
            Implementando estos valores
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
            <Programa />
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
            <Formaciones />
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
            <Startup />
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
            <Hackeando />
          </div>
        </div>
        <div className="relative flex items-start justify-center px-4 py-4 scale-100 bg-red-400 rounded-xl">
          <p className="text-xs font-medium text-center text-white">
            Más información sobre nuestro Programa de Becas{" "}
          </p>
        </div>
      </div>
    </>
  );
}
