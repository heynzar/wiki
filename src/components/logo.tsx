import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  link?: boolean;
}

export default function Logo({ className, link = true }: LogoProps) {
  const content = (
    <>
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
    </>
  );

  if (link) {
    return (
      <Link href="/" className={cn("flex items-center shrink-0", className)}>
        {content}
      </Link>
    );
  }

  return (
    <div className={cn("flex items-center shrink-0", className)}>{content}</div>
  );
}
