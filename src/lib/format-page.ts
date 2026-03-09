export function formatDate(date: Date | string) {
  return new Date(date)
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "2-digit",
    })
    .toUpperCase();
}

export function slugsToCategory(slugs: string[]) {
  const parents = slugs.slice(0, -1);

  const selected = parents.length === 3 ? parents.slice(1, 3) : parents;

  return selected
    .map((s) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" // ");
}

export function CleanTitle(title: string) {
  const cleaned = title
    .replace(/\[!?toc\]/gi, "") // remove [toc] or [!toc] (case-insensitive)
    .replace(/^#+\s*/g, "") // remove leading # characters
    .trim();

  return cleaned.length > 50 ? cleaned.slice(0, 50) + "..." : cleaned;
}
