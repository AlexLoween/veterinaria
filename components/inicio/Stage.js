import Link from "next/link";
import Image from "next/image";

export default function Stage() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
            src="/stage.jpeg"
            alt=""
            width={1920}
            height={1080}
            className=""
          />
    </div>
  );
}
