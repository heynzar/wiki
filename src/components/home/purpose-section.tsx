import Image from "next/image";

export default function PurposeSection() {
  return (
    <section className="bg-fd-popover mt-12 md:mt-24 relative">
      <div className="max-w-4xl mx-auto overflow-hidden py-10 px-4 space-y-10">
        <h2 className="text-center font-instrument text-primary text-2xl">
          Purpose & Stroy
        </h2>
        <div className="absolute inset-0 w-full h-full top-0 pt-20 overflow-hidden">
          <div className=" blur-3xl rotate-[24deg] -translate-x-1/4 w-full h-[6rem] dark:bg-amber-50/10 lg:dark:bg-amber-50/20 rounded-[50%]"></div>
        </div>
        {/* Decorative birds */}
        <Image
          src="/bird.png"
          width={100}
          height={100}
          className="absolute -scale-x-100 lg:top-16 left-2 size-14 rotate-12 top-10 lg:size-24 lg:left-28 opacity-80"
          alt=""
          aria-hidden="true"
        />
        <Image
          src="/bird.png"
          width={85}
          height={85}
          className="absolute top-[360px] lg:top-72 size-12 lg:size-20 right-2 lg:right-32 opacity-80"
          alt=""
          aria-hidden="true"
        />
        {/* Hadith */}
        <div className="space-y-4 text-center">
          <p className="text-fd-muted-foreground uppercase text-sm">
            The Messenger of Allah ﷺ said:
          </p>

          <p className="px-2 text-3xl sm:text-4xl md:text-5xl leading-snug font-instrument">
            “When the human being dies, his deeds end except for three: ongoing
            charity,{" "}
            <span className="bg-primary px-3 rounded-xl text-white">
              beneficial knowledge
            </span>
            , or a righteous child who prays for him.”
          </p>

          <p className="text-2xl text-fd-muted-foreground">&#10022;</p>
        </div>
        {/* Intention */}
        <div className="space-y-6 px-2 text-fd-muted-foreground leading-relaxed">
          <p>
            This notebook/wiki is a humble effort to share beneficial knowledge.
            May Allah accept it.
          </p>
          <p>
            The idea started during my university studies while preparing for
            exams. As I worked to truly understand my courses, I naturally
            started creating summaries, cheat sheets, and personal notes. I also
            used AI to simplify difficult concepts. Over time, this grew into a
            large and organized collection of knowledge.
          </p>
          <p>
            At some point, I paused and reflected. I am a Muslim, and my
            religion encourages benefiting others. That moment changed my
            intention. Instead of keeping this work private, I decided to put in
            extra effort to refine it; editing, organizing, and simplifying
            everything so it could be useful and understandable for others.
          </p>

          <p>
            With a renewed niyyah for the sake of Allah, and with the
            responsibility that comes with it; itqan (excellence) and ihsan
            (doing things well), this project became a way to document and share
            everything I learn throughout my journey in software engineering.
          </p>
          <p>
            May Allah accept this work, place barakah in it, and grant us all
            tawfiq.
          </p>
        </div>
      </div>
    </section>
  );
}
