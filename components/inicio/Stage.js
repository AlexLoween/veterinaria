import Link from "next/link";

export default function Stage() {
  return (
    <div className="relative shadow-2xl">
      <video
        className="object-cover md:w-max md:h-max"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="mt-8 text-2xl font-bold text-center text-white sm:text-5xl shadow-color-black font-apple-system "
          style={{ textShadow: "0 0 32px black" }}
        >
          ¡Únete a nuestra comunidad!
        </div>
        <div
          className="max-w-lg text-center text-white shadow-color-black font-apple-system sm:text-2xl"
          style={{ textShadow: "0 0 32px black" }}
        >
          Ayúdanos a promover, impulsar y apoyar la participación de las mujeres
          en la tecnología blockchain
          <form className="my-16">
            <Link
              href="/comunidad"
              className="px-5 py-3 font-medium text-white transition bg-red-500 md:text-xl rounded-xl hover:bg-red-600"
            >
              ¡Apúntate!
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
