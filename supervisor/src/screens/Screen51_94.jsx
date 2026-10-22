import React from 'react';
const imgFrame = "/assets/382c272e-ef92-4544-af74-16de975fde90.svg";
const imgFrame1 = "/assets/00373554-5c09-45d7-924c-427d6176eb1a.svg";

export default function OverlayToastRefreshed() {
  return (
    <div className="relative size-full" data-node-id="51:94" data-name="Overlay / Toast — Refreshed">
      <div className="absolute bg-white border-3 border-[#164f8a] border-solid content-stretch flex gap-[24px] items-center left-[3004px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="51:95" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="51:96" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="51:99">
          Refreshed — sample data unchanged
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="51:100" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="51:101" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
