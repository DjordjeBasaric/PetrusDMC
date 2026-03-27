import Link from "next/link";
import Image from "next/image";

export function PetrusSocialSidebar() {
  return (
    <aside
      className="fixed left-4 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-8 lg:flex xl:left-8"
      aria-label="Follow us"
    >
      <p
        className="font-montserrat text-lg font-bold text-black"
        style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
      >
        Follow us
      </p>
      <div className="flex flex-col gap-6">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="transition-opacity hover:opacity-80 [&_img]:invert"
        >
          <Image
            src="/home/petrus/instagram.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="transition-opacity hover:opacity-80 [&_img]:invert"
        >
          <Image
            src="/home/petrus/twitter.svg"
            alt=""
            width={24}
            height={24}
          />
        </Link>
      </div>
    </aside>
  );
}
