import Link from "next/link";
import { useRouter } from "next/router";

export default function Scholarships() {
  const router = useRouter();
  const ROUTE = "/becas";
  const isActive = router.asPath == ROUTE;

  return (
    <Link
      href={ROUTE}
      className={`mx-auto text-apple-system ${isActive && "text-red-400"}`}
    >
      <button
        type="button"
        className="mr-8 font-mono transition transform text-ml hover:text-red-300/75"
      >
        BECAS
      </button>
    </Link>
  );
}
