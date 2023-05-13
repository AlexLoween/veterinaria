import Karol from "./Karol";
import Nicole from "./Nicole";
import Sara from "./Sara";
import Ana from "./Ana";
export default function Equipo() {
  return (
    <>
      <div className="flex items-center justify-center px-8 py-8 mx-8 shadow-2xl bg-zinc-100 rounded-3xl">
        <div className="max-w-screen-md mx-auto scale-75 px-auto">
          <h1 className="text-4xl text-center text-black text-apple-system">
            Nuestro Equipo
          </h1>
          <div className="flex flex-col items-start justify-center md:gap-8 md:flex-row md:justify-center ">
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Nicole />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Sara />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Ana />
            </div>
            <div className="max-w-sm mx-auto mb-6 md:mb-0">
              <Karol />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
