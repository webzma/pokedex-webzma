import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Separator } from "@/components/ui/separator";

export function ButtonFilter() {
  return (
    <div>
      <Sheet>
        <SheetTrigger className=" flex px-6 py-2 items-center gap-x-2 bg-white text-black text-md  font-bold border-gray-300 border-2 rounded-3xl">
          <Image
            src="/filterSVG.svg"
            alt="Filters icon"
            width={18}
            height={18}
          />
          Filters
        </SheetTrigger>
        <SheetContent className="bg-[#C9D2EA]">
          <SheetHeader>
            <SheetTitle className="text-xl">Filters</SheetTitle>
            <Separator />
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
