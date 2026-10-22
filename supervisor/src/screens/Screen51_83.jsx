import React from 'react';
const imgFrame = "/assets/c0a3c69a-4553-46b4-aef4-2b47c772989e.svg";
const imgFrame1 = "/assets/a1fc5976-abea-48c4-b4e5-fab6c3978e92.svg";

export default function OverlayToastCopied() {
  return (
    <div className="relative size-full" data-node-id="51:83" data-name="Overlay / Toast — Copied">
      <div className="absolute bg-white border-3 border-[#2e7d32] border-solid content-stretch flex gap-[24px] items-center left-[3261px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="51:84" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="51:85" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="51:88">
          Copied to clipboard
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="51:89" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="51:90" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
