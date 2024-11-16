export function LoadingSkeleton() {
  return (
    <article className="flex justify-end p-6 flex-col h-[280px] w-full rounded-2xl relative max-w-[340px] bg-[#D3D4D8] gap-y-4">
      <div className="bg-[#AAAAAA] m-auto w-[80%] h-[300px] rounded-2xl -translate-y-14"></div>
      <div className="bg-[#AAAAAA] w-[102px] h-[60px] rounded-2xl"></div>
      <div className="bg-[#AAAAAA] w-[42px] h-[40px] rounded-2xl"></div>
      <div className="flex gap-x-2">
        <div className="bg-[#AAAAAA] w-[102px] h-[35px] rounded-2xl"></div>
        <div className="bg-[#AAAAAA] w-[102px] h-[35px] rounded-2xl"></div>
      </div>
    </article>
  );
}
