import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col space-y-6 my-10 justify-center text-center">
      <h1 className="text-4xl  tracking-tighter md:text-6xl">
        Learning Out Loud
      </h1>
      <p className="text-sm md:text-base opacity-80">
        I study these topics anyway! so this is my way of mastering them,
        documenting them, and sharing the benefit with anyone who needs it.
      </p>
      <Image
        src="/7.png"
        alt=""
        width={5000}
        height={3000}
        className="border mt-4 rounded-lg"
      />
    </main>
  );
}
