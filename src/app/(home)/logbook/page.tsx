import { LogbookClient } from "@/components/logbook";
import { getFullPageHistory } from "@/lib/logbook";

export default async function LogbookPage() {
  const pages = await getFullPageHistory();
  return <LogbookClient pages={pages} />;
}
