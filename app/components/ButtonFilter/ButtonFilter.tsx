import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ButtonFilter() {
  return (
    <div>
      <Button className="px-6 bg-white text-black text-md  font-bold border-gray-300 border-2 rounded-3xl">
        <Image src="/filterSVG.svg" alt="Filters icon" width={18} height={18} />
        Filters
      </Button>
    </div>
  );
}
