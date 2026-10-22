import React from 'react';
const imgFrame = "/assets/3a82f25a-d838-4387-8a85-9441544ba03c.svg";
const imgFrame1 = "/assets/52aaed2a-243c-4902-a423-a3dc64bed082.svg";

export default function OverlayToastReviewDetailNotBuilt() {
  return (
    <div className="relative size-full" data-node-id="221:48725" data-name="Overlay / Toast — Review detail not built">
      <div className="absolute bg-white border-3 border-[#2e7d32] border-solid content-stretch flex gap-[24px] items-center left-[1997px] overflow-clip pl-[36px] pr-[28px] py-[28px] rounded-[24px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1962px]" data-node-id="221:48726" data-name="Toast">
        <div className="relative shrink-0 size-[40px]" data-node-id="221:48727" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[30px] whitespace-nowrap" data-node-id="221:48730">
          Prototype: observation review detail is built for OBS-014 only. This record has no detail screen in the demo.
        </p>
        <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="221:48731" data-name="Dismiss">
          <div className="relative shrink-0 size-[28px]" data-node-id="221:48732" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
        </button>
      </div>
    </div>
  );
}
