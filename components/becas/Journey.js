import Pasouno from "./Pasouno";
import Pasodos from "./Pasodos";
import Pasotres from "./Pasotres";
import Pasocuatro from "./Pasocuatro";
export default function Journey() {
  return (
    <>
      <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
        <div className="max-w-screen-md mx-auto scale-75 px-auto">
          <h1 className="text-4xl text-center text-black text-apple-system">
            ¡Comienza tu viaje de becadx a fundador con nosotros!{" "}
          </h1>
          <div className="flex flex-col items-start justify-center md:gap-8 md:flex-row md:justify-center ">
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Pasouno />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Pasodos />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Pasotres />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Pasocuatro />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
