import Link from "next/link";
import { useRouter } from "next/router";

export default function Ust() {
  const router = useRouter();
  const ROUTE = "/nosotras";
  const isActive = router.asPath == ROUTE;

  return (
    <Link
      href={ROUTE}
      className={`mx-auto text-apple-system ${isActive && "text-red-400"}`}
    >
      <button
        type="button"
        className="font-mono transition transform  text-ml hover:text-red-300/75"
      >
        NOSOTRAS
      </button>
    </Link>
  );
}
