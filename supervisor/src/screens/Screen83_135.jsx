import React from 'react';
const imgFrame = "/assets/06f9405b-520c-48c2-a4a8-492d8fb6037f.svg";
const imgFrame1 = "/assets/c1a3956a-f3e9-47df-ad57-0c92eca17365.svg";

export default function OverlayTableSearchRev17() {
  return (
    <div className="relative size-full" data-node-id="83:135" data-name="Overlay / Table search — REV-17">
      <button className="absolute bg-[rgba(15,26,20,0.06)] block cursor-pointer h-[2160px] left-0 top-0 w-[3840px]" data-node-id="83:136" data-name="Click-outside to close" />
      <div className="absolute bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col items-start left-[560px] overflow-clip py-[12px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[551px] w-[720px]" data-node-id="83:138" data-name="Menu">
        <div className="content-stretch flex items-start overflow-clip px-[32px] py-[10px] relative shrink-0 w-full" data-node-id="83:140" data-name="Heading">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[22px] whitespace-nowrap" data-node-id="83:141">
            SUGGESTED SEARCHES — sample queries
          </p>
        </div>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="83:142" data-name="Option / OBS-006">
          <div className="relative shrink-0 size-[30px]" data-node-id="83:143" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="83:146">
            OBS-006
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="83:149" data-name="Option / QUA-002">
          <div className="relative shrink-0 size-[30px]" data-node-id="83:150" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="83:153">
            QUA-002
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="83:156" data-name="Option / COR-005">
          <div className="relative shrink-0 size-[30px]" data-node-id="83:157" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="83:160">
            COR-005
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="83:163" data-name="Option / Clear search">
          <div className="absolute bg-[#f1f7ec] inset-0" data-node-id="83:167" data-name="Selected background" />
          <div className="relative shrink-0 size-[30px]" data-node-id="83:164" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="83:166">
            Clear search
          </p>
        </button>
      </div>
    </div>
  );
}
