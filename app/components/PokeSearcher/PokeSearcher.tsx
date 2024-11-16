import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PokeSearcherProps {
  setSearch: (search: string) => void;
  search: string;
}

export const PokeSearcher: React.FC<PokeSearcherProps> = ({
  setSearch,
  search,
}) => {
  return (
    <div className="focus-within:outline focus-within:outline-2 focus-within:outline-[#416EDF] w-full bg-white mt-8 gap-x-4 flex items-center p-2 rounded-xl shadow-2xl shadow-[#C9D2EA]">
      <div>
        <Image
          src="/search-icon.svg"
          alt="seacrh icon"
          width={25}
          height={25}
          className="ml-2"
        />
      </div>

      <input
        type="text"
        className="text-md flex-1 h-10 border-none outline-none text-[#416EDF] font-medium placeholder:text-[#416EDF]"
        placeholder="Pokemon name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Button className="px-12 rounded-lg bg-[#FFCE31] text-[#416EDF] text-md hover:bg-[#FFCE31]/90 font-bold">
        Search
      </Button>
    </div>
  );
};
