import HeroImage from "@/components/hero-image";

export default function Hero() {
  return (
    <main className="flex flex-col px-4 gap-4 md:gap-6 w-full max-w-4xl mx-auto">
      <p className="bg-primary mb-2 md:mb-0 text-white text-center md:text-left text-xs md:text-base py-0.5 px-2 rounded-md md:rounded-lg md:w-max">
        A PERSONAL STUDY IN SOFTWARE ENGINEERING
      </p>

      <h1 className="text-left font-semibold tracking-tighter text-[clamp(2rem,16vw,7rem)] leading-[1.05] md:leading-[1]">
        <div className="inline-flex mr-4 items-center gap-4">
          THE
          <div className="min-[877px]:hidden inline-block">
            <HeroImage className="scale-90" />
          </div>
        </div>
        ENGINEER'S
        <div className="inline-flex items-center gap-4">
          NOTEBOOK
          <div className="max-[877px]:hidden inline-block">
            <HeroImage className="scale-125 mt-2" />
          </div>
        </div>
      </h1>

      <div className="flex justify-between">
        <p className="text-base max-w-md text-fd-muted-foreground">
          This is a public notebook/wiki where I share what I learn as I study
          software engineering, hoping it helps others on the same path.
        </p>

        <div className="hidden md:flex flex-col justify-end text-right mr-4">
          <p className="text-xs text-fd-muted-foreground uppercase">
            STATUS &#10022; Actively studied
          </p>
          <p className="text-xs text-primary uppercase">
            INTENTION &#10022; Beneficial Knowledge
          </p>
        </div>
      </div>
    </main>
  );
}
