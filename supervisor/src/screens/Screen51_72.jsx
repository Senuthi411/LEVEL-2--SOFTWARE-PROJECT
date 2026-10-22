import React from 'react';
const imgFrame = "/assets/e86a8da5-ffff-4a9a-a9da-46d25a835666.svg";
const imgFrame1 = "/assets/3ad289c4-86b3-4e8b-bf0c-2d061f35d918.svg";

export default function OverlayToastExportStarted() {
  return (
    <div className="relative size-full" data-node-id="51:72" data-name="Overlay / Toast — Export started">
      <div className="absolute bg-white border-3 border-[#2e7d32] border-solid content-stretch flex gap-[24px] items-center left-[2891px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="51:73" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="51:74" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="51:77">
          Export started — sample file (prototype only)
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="51:78" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="51:79" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
