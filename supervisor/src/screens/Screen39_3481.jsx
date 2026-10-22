import React from 'react';
const imgIconTrash = "/assets/4615f8f9-9bd7-4e3d-a9ea-d986e2b9afa7.svg";
const imgVector = "/assets/9cccd3ba-a65f-4fab-9185-521138346027.svg";

export default function OverlayRejectCorrection() {
  return (
    <div className="relative size-full" data-node-id="39:3481" data-name="Overlay / Reject correction">
      <div className="absolute bg-[rgba(15,36,23,0.55)] h-[2160px] left-0 top-0 w-[3840px]" data-node-id="39:3482" data-name="Scrim" />
      <div className="absolute bg-white content-stretch flex flex-col gap-[32px] items-start left-[1440px] overflow-clip px-[56px] py-[52px] rounded-[32px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[711px] w-[960px]" data-node-id="39:3464" data-name="Dialog">
        <div className="bg-[#fde4e1] content-stretch flex items-center justify-center overflow-clip relative rounded-[52px] shrink-0 size-[104px]" data-node-id="39:3465" data-name="icon">
          <div className="relative shrink-0 size-[52px]" data-node-id="39:3466" data-name="icon/trash">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconTrash} />
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[40px] whitespace-nowrap" data-node-id="39:3468">
          Reject correction COR-041?
        </p>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[42px] min-w-full not-italic relative shrink-0 text-[#5b6b62] text-[28px] w-[min-content]" data-node-id="39:3469">
          The field worker will be notified. The original observation stays as captured. This decision cannot be undone.
        </p>
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="39:3470" data-name="Reason">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="39:3471">
            Message to field worker *
          </p>
          <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[152px] items-start overflow-clip px-[24px] py-[20px] relative rounded-[16px] shrink-0 w-full" data-node-id="39:3472" data-name="Input">
            <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[28px] whitespace-nowrap" data-node-id="39:3473">
              Please retake a clearer image.
            </p>
          </div>
        </div>
        <div className="content-stretch cursor-pointer flex gap-[20px] items-start justify-end overflow-clip relative shrink-0 w-full" data-node-id="39:3474" data-name="Footer">
          <button className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="39:3475" data-name="Button / secondary / Cancel">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="39:3476">
              Cancel
            </p>
          </button>
          <a className="bg-[#b3261e] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="39:3477" data-name="Button / danger / Reject correction">
            <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="39:3478" data-name="icon/x">
              <div className="absolute inset-1/4" data-node-id="39:3479" data-name="Vector">
                <div className="absolute inset-[-8.33%]">
                  <img alt="" className="block max-w-none size-full" src={imgVector} />
                </div>
              </div>
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="39:3480">
              <p className="leading-[normal]">Reject correction</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
