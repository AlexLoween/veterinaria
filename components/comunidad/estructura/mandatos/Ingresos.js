import Image from "next/image";

export default function Ingresos() {
  return (
    <>
      <div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
        <div className="mx-3 text-xl text-center">
          <p className="font-bold text-center">PERROS</p>
        </div>
        <div className="flex justify-center ">
          <Image
            className="pb-4"
            src="/dogs.png"
            alt=""
            width={85}
            height={85}
          />
        </div>
      </div>
    </>
  );
}
