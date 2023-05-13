import Image from "next/image";

export default function Inclusion() {
  return (
    <>
      <div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
        <div className="mx-3 text-xl text-center">
          <p className="font-bold text-center"> INCLUSIÓN</p>
          Visibilizar y fomentar la inclusión de las mujeres{" "}
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 flex-flex-col"
            src="/inclusion.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
