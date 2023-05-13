
import Descripcion from "../comunidad/Descripcion";
import Especialidades from "./Especialidades";
export default function About() {
  return (
    <>
      <Especialidades />
      <div className="flex items-center justify-center bg-white shadow-2xl">
        <Descripcion />
      </div>
    </>
  );
}
