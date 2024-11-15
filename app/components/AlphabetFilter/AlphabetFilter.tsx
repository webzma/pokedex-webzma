import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface AlphabetFilterProps {
  setAlphabetFilter: (value: string) => void;
}

export function AlphabetFilter({ setAlphabetFilter }: AlphabetFilterProps) {
  function onValueChangeFilter(value: string) {
    setAlphabetFilter(value);
  }

  return (
    <div className="font-bold">
      <Select onValueChange={(e) => onValueChangeFilter(e)}>
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
