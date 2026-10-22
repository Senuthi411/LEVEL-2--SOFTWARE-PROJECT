import React from 'react';
const imgFrame = "/assets/4a2c11f0-1db8-4c66-baf8-e751783b9922.svg";
const imgFrame1 = "/assets/fe7b4c9f-c02c-455d-97c2-68ae817a981c.svg";

export default function OverlayTableSearchRev18() {
  return (
    <div className="relative size-full" data-node-id="81:514" data-name="Overlay / Table search — REV-18">
      <button className="absolute bg-[rgba(15,26,20,0.06)] block cursor-pointer h-[2160px] left-0 top-0 w-[3840px]" data-node-id="81:515" data-name="Click-outside to close" />
      <div className="absolute bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col items-start left-[560px] overflow-clip py-[12px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[551px] w-[720px]" data-node-id="81:517" data-name="Menu">
        <div className="content-stretch flex items-start overflow-clip px-[32px] py-[10px] relative shrink-0 w-full" data-node-id="84:71" data-name="Heading">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[24px] whitespace-nowrap" data-node-id="81:519">
            SUGGESTED SEARCHES — sample queries
          </p>
        </div>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:521" data-name="Option / OBS-014">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:522" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:525">
            OBS-014
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:528" data-name="Option / Hiruni">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:529" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:532">
            Hiruni
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:535" data-name="Option / Ravindu">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:536" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:539">
            Ravindu
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:542" data-name="Option / Clear search">
          <div className="absolute bg-[#f1f7ec] inset-0" data-node-id="81:546" data-name="Selected background" />
          <div className="relative shrink-0 size-[30px]" data-node-id="81:543" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:545">
            Clear search
          </p>
        </button>
      </div>
    </div>
  );
}
