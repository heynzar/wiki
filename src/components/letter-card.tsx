export function LetterCard({ name }: { name: string }) {
  const displayName = name.trim() || "there";

  const today = new Date().toLocaleDateString("en-GB");

  return (
    <div className="w-60 select-none h-80 text-[0.6rem] rounded-sm flex flex-col text-black/60 overflow-hidden">
      <div className="flex flex-col justify-between flex-1 px-5 py-4">
        <div className="space-y-3">
          <p className="capitalize">Hey {displayName},</p>

          <p className="leading-relaxed">A new article has been added!</p>

          <p>
            Title:{" "}
            <span className="text-black/90 font-medium">
              How Computers Work
            </span>
          </p>

          <p className="leading-relaxed">
            In this article, I explain The four pieces every computer is built
            from, and how they work together every time you run a single line of
            code.
          </p>

          <div>
            <p>Read the article here:</p>
            <p className="text-primary underline underline-offset-2 truncate">
              wiki.nzar.dev/docs/foundation/how-systems-work/how-a-computer-works-cpu-ram-storage-io
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="h-px w-full bg-black/10" />

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className="size-2 rounded-full bg-primary" />
              <span>Nzar</span>
            </div>

            <span className="font-mono">{today}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
