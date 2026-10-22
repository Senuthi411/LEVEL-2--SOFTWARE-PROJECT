import React from 'react';
const imgFrame = "/assets/c667ab6d-41a5-4c6a-86e8-77edbd31b8e3.svg";
const imgFrame1 = "/assets/dfca5c10-1d11-4a87-ba34-0785a71a44cb.svg";

export default function OverlayToastChangesSavedPrototypeOnly() {
  return (
    <div className="relative size-full" data-node-id="303:338" data-name="Overlay / Toast — Changes saved (prototype only)">
      <div className="absolute bg-white border-3 border-[#2e7d32] border-solid content-stretch flex gap-[24px] items-center left-[2452px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="303:339" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="303:340" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="303:343">
          Changes saved — prototype only; nothing is stored
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="303:344" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="303:345" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
