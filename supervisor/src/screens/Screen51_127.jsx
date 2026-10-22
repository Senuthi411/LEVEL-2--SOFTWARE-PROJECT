import React from 'react';
const imgFrame = "/assets/137c246b-5952-47ce-947d-d334497760f4.svg";
const imgFrame1 = "/assets/d45bd782-c5e9-451d-9e00-87e0c6893c7e.svg";

export default function OverlayToastPasswordSubmitted() {
  return (
    <div className="relative size-full" data-node-id="51:127" data-name="Overlay / Toast — Password submitted">
      <div className="absolute bg-white border-3 border-[#164f8a] border-solid content-stretch flex gap-[24px] items-center left-[2545px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="51:128" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="51:129" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="51:132">
          Password change submitted — prototype only, no real authentication
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="51:133" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="51:134" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
