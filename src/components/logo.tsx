import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center shrink-0">
      <Image
        alt="Wiki Nzar Dev Logo Light Theme"
        src="/logo.svg"
        width={40}
        height={20}
        className="h-5 w-auto block dark:hidden"
      />
      <Image
        alt="Wiki Nzar Dev Logo Dark Theme"
        src="/logo-dark.svg"
        width={40}
        height={20}
        className="h-5 w-auto hidden dark:block"
      />
    </Link>
  );
}
