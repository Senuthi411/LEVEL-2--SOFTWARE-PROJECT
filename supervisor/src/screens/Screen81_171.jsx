import React from 'react';
const imgFrame = "/assets/555f8783-e009-40fc-8101-f25b591dec3a.svg";
const imgFrame1 = "/assets/3530f4e3-da49-4013-9282-9e53b2e565f4.svg";

export default function OverlayTableSearchRev02() {
  return (
    <div className="relative size-full" data-node-id="81:171" data-name="Overlay / Table search — REV-02">
      <button className="absolute bg-[rgba(15,26,20,0.06)] block cursor-pointer h-[2160px] left-0 top-0 w-[3840px]" data-node-id="81:172" data-name="Click-outside to close" />
      <div className="absolute bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col items-start left-[560px] overflow-clip py-[12px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[551px] w-[720px]" data-node-id="81:174" data-name="Menu">
        <div className="content-stretch flex items-start overflow-clip px-[32px] py-[10px] relative shrink-0 w-full" data-node-id="84:70" data-name="Heading">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[24px] whitespace-nowrap" data-node-id="81:176">
            SUGGESTED SEARCHES — sample queries
          </p>
        </div>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:178" data-name="Option / OBS-014">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:179" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:182">
            OBS-014
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:185" data-name="Option / Hiruni">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:186" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:189">
            Hiruni
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:192" data-name="Option / Ravindu">
          <div className="relative shrink-0 size-[30px]" data-node-id="81:193" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:196">
            Ravindu
          </p>
        </button>
        <button className="content-stretch cursor-pointer flex gap-[16px] items-center overflow-clip px-[32px] py-[20px] relative shrink-0 w-full" data-node-id="81:199" data-name="Option / Clear search">
          <div className="absolute bg-[#f1f7ec] inset-0" data-node-id="81:203" data-name="Selected background" />
          <div className="relative shrink-0 size-[30px]" data-node-id="81:200" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] text-left whitespace-nowrap" data-node-id="81:202">
            Clear search
          </p>
        </button>
      </div>
    </div>
  );
}
