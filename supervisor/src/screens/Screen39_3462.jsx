import React from 'react';
const imgIconCheck = "/assets/14394b69-cf59-4315-a968-55837a207dd1.svg";
const imgIconCheck1 = "/assets/117fe830-3a27-44d1-8ab1-8a9ac395d88d.svg";

export default function OverlayConfirmVerification() {
  return (
    <div className="relative size-full" data-node-id="39:3462" data-name="Overlay / Confirm verification">
      <div className="absolute bg-[rgba(15,36,23,0.55)] h-[2160px] left-0 top-0 w-[3840px]" data-node-id="39:3463" data-name="Scrim" />
      <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-start left-[1440px] overflow-clip px-[56px] py-[52px] rounded-[32px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[824px] w-[960px]" data-node-id="39:3449" data-name="Dialog">
        <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[52px] shrink-0 size-[104px]" data-node-id="39:3450" data-name="icon">
          <div className="relative shrink-0 size-[52px]" data-node-id="39:3451" data-name="icon/check">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[40px] whitespace-nowrap" data-node-id="39:3453">
          Verify this observation?
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[42px] min-w-full not-italic relative shrink-0 text-[#5b6b62] text-[28px] w-[min-content]" data-node-id="39:3454">
          OBS-014 will be marked verified. The original evidence stays unchanged and the decision is added to the review history.
        </p>
        <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-end overflow-clip relative shrink-0 w-full" data-node-id="39:3455" data-name="Footer">
          <button className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="39:3456" data-name="Button / secondary / Cancel">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="39:3457">
              Cancel
            </p>
          </button>
          <a className="bg-[#2e7d32] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="39:3458" data-name="Button / primary / Verify observation">
            <div className="relative shrink-0 size-[32px]" data-node-id="39:3459" data-name="icon/check">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck1} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="39:3461">
              Verify observation
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
