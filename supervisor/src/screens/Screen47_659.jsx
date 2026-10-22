import React from 'react';
const imgFrame = "/assets/c5044b8b-83c6-4bab-a7ad-12885d869840.svg";
const imgFrame1 = "/assets/3ab5b70f-2a67-4042-8b36-644d1918c01c.svg";

export default function OverlayNotificationsSupervisor() {
  return (
    <div className="relative size-full" data-node-id="47:659" data-name="Overlay / Notifications — Supervisor">
      <button className="absolute bg-[rgba(255,255,255,0.01)] block cursor-pointer h-[2160px] left-0 top-0 w-[3840px]" data-node-id="61:437" data-name="Click-outside to close" />
      <div className="absolute bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col items-start left-[2436px] overflow-clip py-[16px] rounded-[32px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[127px] w-[960px]" data-node-id="47:660" data-name="Panel">
        <div className="content-stretch flex items-center justify-between overflow-clip px-[36px] py-[18px] relative shrink-0 w-full" data-node-id="47:661" data-name="Frame">
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="47:662">
            NOTIFICATIONS
          </p>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[28px] shrink-0 size-[56px]" data-node-id="47:663" data-name="Close">
            <div className="relative shrink-0 size-[28px]" data-node-id="47:664" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
          </button>
        </div>
        <a className="content-stretch cursor-pointer flex gap-[24px] items-center overflow-clip px-[36px] py-[22px] relative shrink-0 w-full" data-node-id="47:666" data-name="Row / Correction resubmitted">
          <div className="bg-[#e1eefb] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[64px]" data-node-id="47:667" data-name="Frame">
            <div className="relative shrink-0 size-[32px]" data-node-id="47:668" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="47:671" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[30px]" data-node-id="47:672">
              Correction resubmitted
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[26px]" data-node-id="47:673">
              COR-005 · OBS-005
            </p>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] items-center overflow-clip px-[36px] py-[22px] relative shrink-0 w-full" data-node-id="47:674" data-name="Row / Quarantine item waiting">
          <div className="bg-[#e1eefb] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[64px]" data-node-id="47:675" data-name="Frame">
            <div className="relative shrink-0 size-[32px]" data-node-id="47:676" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="47:679" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[30px]" data-node-id="47:680">
              Quarantine item waiting
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[26px]" data-node-id="47:681">
              QUA-001 · decision needed
            </p>
          </div>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] items-center overflow-clip px-[36px] py-[22px] relative shrink-0 w-full" data-node-id="47:682" data-name="Row / Referral linked">
          <div className="bg-[#e1eefb] content-stretch flex items-center justify-center overflow-clip relative rounded-[32px] shrink-0 size-[64px]" data-node-id="47:683" data-name="Frame">
            <div className="relative shrink-0 size-[32px]" data-node-id="47:684" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="47:687" data-name="Frame">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[30px]" data-node-id="47:688">
              Referral linked
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[26px]" data-node-id="47:689">
              REF-023 · CASE-023
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}
