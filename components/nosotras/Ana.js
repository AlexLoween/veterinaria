import Image from "next/image";

export default function Ana() {
  return (
    <>
      <div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
        <div className="mx-3 text-xl text-center">
          <p className="font-bold text-center"> Ana Aparicio</p>
          Creadora de contenido, y Community Engagement
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 rounded-full flex-flex-col"
            src="/bimo.jpg"
            alt=""
            width={150}
            height={150}
          />
        </div>
      </div>
    </>
  );
}
