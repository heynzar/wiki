import { ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";

interface ButtonProps {
  title: string;
  image_url?: string;
  icon?: LucideIcon;
}

export function NavButton({ icon: Icon, image_url, title }: ButtonProps) {
  return (
    <button className="py-2 px-3 cursor-pointer rounded-lg flex hover:bg-fd-muted-foreground/10 transition-colors bg-fd-card items-center w-full justify-center gap-2 border">
      {image_url ? (
        <Image
          width={20}
          height={20}
          alt={`${title} Icon`}
          src={image_url}
          className="size-5"
        />
      ) : Icon ? (
        <Icon strokeWidth={1.5} className="size-5 text-fd-muted-foreground" />
      ) : null}{" "}
      <span>{title}</span>
      <ArrowRight className="size-4 ml-auto text-fd-muted-foreground" />
    </button>
  );
}
