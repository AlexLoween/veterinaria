import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Start from "./navegacion/Start";
import Us from "./navegacion/Us";
import Events from "./navegacion/Events";
import News from "./navegacion/News";
import Community from "./navegacion/Community";
import Scholarships from "./navegacion/Scholarships";
import { Fragment, useState } from "react";
import { ImMenu } from "react-icons/im";

const inter = Inter({ subsets: ["latin"] });

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = (
    <Fragment>
      <Start />
      <Us />
    </Fragment>
  );

  return (
    <Fragment>
      <nav className="sticky top-0 z-10 flex justify-between w-full p-2 px-8 py-4 bg-cyan-100 rounded-b-2xl md:items-center">
        <Link className="flex w-full sm:items-center sm:h-full" href="/">
          <Image
            src="/logos.png"
            alt=""
            width={150}
            height={150}
            className=""
          />
        </Link>
        <div className="items-center justify-end hidden lg:flex">{LINKS}</div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ImMenu className="text-xl text-black fill-current" />
        </button>
      </nav>
      <section
        className={`flex-col py-4 bg-white shadow-2xl rounded-xl divide-y divide-slate-400 border-2 border-zinc-100  text-black gap-2 lg:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {LINKS}
      </section>
    </Fragment>
  );
}
