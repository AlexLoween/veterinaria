import Link from "next/link";
import { useRouter } from "next/router";

export default function Community() {
  const router = useRouter();
  const ROUTE = "/comunidad";
  const isActive = router.asPath == ROUTE;

  return (
    <Link
      href={ROUTE}
      className={`mx-auto text-apple-system ${isActive && "text-red-400"}`}
    >
      <button
        type="button"
        className="mx-8 font-mono transition transform text-ml hover:text-red-300/75"
      >
        COMUNIDAD
      </button>
    </Link>
  );
}
