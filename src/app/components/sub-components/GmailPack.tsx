import { memo } from "react";

const GmailPack = () => {
  return (
    <div className="flex flex-col items-center gap-24 justify-center w-[20px] fixed bottom-10 right-2 z-10 opacity-50">
      <h3 className=" rotate-90 text-[10px] font-mono uppercase">
        saradbhatt2@gmail.com
      </h3>{" "}
      <div className="line h-[15rem] bg-slate-300 w-[2px] mr-1 mb-3 "></div>
    </div>
  );
};

export default memo(GmailPack);
