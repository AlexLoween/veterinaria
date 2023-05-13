import Image from "next/image";

export default function Pasouno() {
  return (
    <>
      <div className="flex pt-4 flex-col-reverse w-full max-w-[22rem] mt-8">
        <div className="mx-3 text-xl text-center">
          <p className="font-bold text-center"> PASO 1</p>
          Atiende eventos y conferencias web3
        </div>
        <div className="flex justify-center">
          <Image
            className="pb-4 flex-flex-col"
            src="/calendar.png"
            alt=""
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}
