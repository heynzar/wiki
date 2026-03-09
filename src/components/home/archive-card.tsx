import Link from "next/link";

type ArchiveCardProps = {
  title: string;
  date: string;
  link: string;
  category: string;
};

export default function ArchiveCard({
  link,
  title,
  date,
  category,
}: ArchiveCardProps) {
  return (
    <Link
      href={link}
      className="group w-full border-b-2 last:border-b-0 hover:bg-fd-popover transition-colors duration-300 py-4 md:py-6 px-4 md:px-0"
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
        <div className="flex items-center justify-between md:contents">
          <span className="uppercase font-medium text-fd-muted-foreground text-xs md:w-20 md:mr-16 shrink-0">
            {date}
          </span>
          <span className="text-primary uppercase text-xs md:ml-auto md:order-last shrink-0">
            {category}
          </span>
        </div>

        <h3 className="text-lg md:text-xl group-hover:md:translate-x-6 transition-transform duration-300 leading-snug">
          {title}
        </h3>
      </div>
    </Link>
  );
}
