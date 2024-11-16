import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { AlphabetFilterType } from "@/lib/types/types";

interface AlphabetFilterProps {
  setAlphabetFilter: React.Dispatch<
    React.SetStateAction<AlphabetFilterType | null>
  >;
}

export function AlphabetFilter({ setAlphabetFilter }: AlphabetFilterProps) {
  function onValueChangeFilter(value: AlphabetFilterType) {
    setAlphabetFilter(value);
  }

  return (
    <div className="font-bold">
      <Select
        onValueChange={(value) =>
          onValueChangeFilter(value as AlphabetFilterType)
        }
      >
        <SelectTrigger className="w-[200px] h-10 rounded-lg border-2 border-gray">
          <SelectValue placeholder="Lowest Number First" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="lowest" className="hover:bg-[#000]">
            Lowest Number First
          </SelectItem>
          <SelectItem value="highest">Highest Number First</SelectItem>
          <SelectItem value="a-z">Alphabetically (A-Z)</SelectItem>
          <SelectItem value="z-a">Alphabetically (Z-A)</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
