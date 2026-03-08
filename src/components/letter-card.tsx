export function LetterCard({ name }: { name: string }) {
  const displayName = name.trim() || "there";

  const today = new Date().toLocaleDateString("en-GB");

  return (
    <div className="w-60 select-none h-80 text-[0.6rem] rounded-sm flex flex-col text-black/60 overflow-hidden">
      <div className="flex flex-col justify-between flex-1 px-5 py-4">
        <div className="space-y-3">
          <p className="capitalize">Hey {displayName},</p>

          <p className="leading-relaxed">A new note has been added!</p>

          <p>
            Title:{" "}
            <span className="text-black/90 font-medium">
              Mastering Big-O: A Visual Guide
            </span>
          </p>

          <p className="leading-relaxed">
            In this note, I explain Big-O notation and how it helps us
            understand the efficiency of algorithms. The goal is to make the
            idea simple through clear explanations and visual diagrams.
          </p>

          <div>
            <p>Read the note here:</p>
            <p className="text-primary underline underline-offset-2">
              wiki.nzar.dev/docs/algorithms/big-o-guide
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
