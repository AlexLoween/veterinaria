export default function Marketing() {
  return (
      <div>
        <section className="bg-gray-50">
          <div className="p-8 ms:p-12 lg:px-16 lg:py-24">
            <div className="max-w-lg mx-auto text-center">
              <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                Te llamamos
              </h2>

              <p className="text-black sm:mt-4 sm:block">
                Solicita tu cita para la atencion de tu mascota.
              </p>
            </div>

            <div className="max-w-xl mx-auto mt-8">
              <form action="#" className="sm:flex sm:gap-4">
                <div className="sm:flex-1">
                  <label for="movil" className="sr-only">
                    telefono
                  </label>

                  <input
                    type="telefono"
                    placeholder="telefono"
                    className="w-full p-3 text-gray-700 transition bg-white border-gray-200 rounded-md shadow-sm focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center w-full gap-2 px-5 py-3 mt-4 text-white transition rounded-md group bg-rose-500 focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
                >
                  <span className="text-sm font-medium"> enviar </span>

                  <svg
                    className="w-5 h-5 rtl:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
  );
}
