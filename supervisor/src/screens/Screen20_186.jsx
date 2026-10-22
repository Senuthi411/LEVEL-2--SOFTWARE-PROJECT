import React from 'react';
const imgIconCheck = "/assets/691aeebf-85fb-4320-90ec-dae743680d96.svg";
const imgIconLeaf = "/assets/a8bc1d2b-c15c-4774-8855-d6adb54efb15.svg";
const imgIconHome = "/assets/aaa38d5d-16b4-45d4-9383-8591d47b0095.svg";
const imgIconInbox = "/assets/17b8716d-69a4-4c5b-9e4a-492d26c78e81.svg";
const imgIconEdit = "/assets/7a397baf-8de3-4e7c-aaf2-38fb8b4999b1.svg";
const imgIconSend = "/assets/7a9f7913-a0af-415c-a7a7-2b672206aec4.svg";
const imgIconArchive = "/assets/9e45f972-3116-4991-8b45-e33ffaed336a.svg";
const imgIconHistory = "/assets/780637b2-e790-45f4-b507-7cc66402bf6e.svg";
const imgIconImage = "/assets/77f369bc-ec5f-47f1-aaaf-93e22986fa2b.svg";
const imgVector = "/assets/04c10af3-c0da-44f7-bf03-824cf91b18c1.svg";
const imgVector1 = "/assets/7327c439-6c41-4ae5-80f3-13f520dbd017.svg";
const imgVector2 = "/assets/3106fc0b-02ac-475f-9ae2-bfcda2f7d234.svg";
const imgIconRight = "/assets/33d71603-097a-44a4-8ec6-f294f6dfc39a.svg";
const imgFrame = "/assets/7660d21b-7363-4edc-b8f7-fb682fddf5af.svg";
const imgIconSearch = "/assets/50f2ce9a-0e66-4daa-9d10-86d9a220c4f9.svg";
const imgDot = "/assets/15f21bea-c969-478c-ba73-b69a19fb4895.svg";
const imgIconBell = "/assets/f80c4a2e-a300-4eed-97e8-269aca6f2cbb.svg";
const imgIconDown = "/assets/68d1b405-81a4-4c72-9784-c6f9b56f806c.svg";
const imgIconLeft = "/assets/b0114565-c91b-4c66-b5c8-5a1ea0628c30.svg";
const imgIconSend1 = "/assets/2df5ab00-0845-4d21-81f7-58e400e5c519.svg";
const imgIconShield = "/assets/77c4cf51-3b90-41ff-a8a3-4fd4800b1173.svg";
const imgFrame1 = "/assets/a8f225f8-15f8-4a49-ae3a-d51e69069f54.svg";
const imgDot1 = "/assets/5f1d4fcb-5899-466d-ad70-ab811e884a7e.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev06Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="20:186" data-name="WEB / Review / REV-06 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="20:187" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="20:188" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="20:189" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="20:190" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:193" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="20:194">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="20:195">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="20:196" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:197">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:198" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:199" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:202">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:203" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:204" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:207">
            Review Queue
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:208" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:209" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="20:212">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:213" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:214" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:216">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:217" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:218" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:221">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:222" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:223" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:226">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:227" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:228" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:232">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6735" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6736" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6737" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6738" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6739" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6740">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="20:233" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:234" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="20:235" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="20:236">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="20:237" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="20:238">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="20:239">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:240">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="20:241" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="20:242" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="20:243" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:244">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:245" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:247">
              <p className="leading-[normal]">Correction Queue</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:248" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:250">
              New request
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="20:251" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:392" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:393" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:395">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="20:252" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="20:253" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="20:256" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:950" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:257" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="20:258" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="20:259">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="20:260" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="20:261" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:264" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="20:265" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="20:266">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:267" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="20:268">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="20:269">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="20:270" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="20:272" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:273" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="20:274" data-name="titles">
              <button className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="20:275" data-name="Back">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:276" data-name="icon/left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeft} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="20:278">
                  Back to review
                </p>
              </button>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="20:279">
                Request Correction
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="20:280">
                OBS-014 · East Hills (DIV-005) · Hiruni Nadeesha
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:281" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:282" data-name="Button / secondary / Cancel">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="20:283">
                  Cancel
                </p>
              </a>
              <a className="bg-[#2e7d32] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:284" data-name="Button / primary / Send correction request">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:285" data-name="icon/send">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="20:287">
                  Send correction request
                </p>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="20:288" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="20:289" data-name="Card / Correction request">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:290" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:291">
                  Correction request
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:292">
                What should the field worker correct?
              </p>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:293" data-name="Checkbox / Retake a clearer image">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:297" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:298">
                    Retake a clearer image
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:299" data-name="Checkbox / Confirm symptom details">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:303" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:304">
                    Confirm symptom details
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:305" data-name="Checkbox / Correct division">
                <ControlCheckbox className="bg-white block border-3 border-[#8a9a91] border-solid cursor-pointer relative rounded-[10px] shrink-0 size-[40px]" />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:307" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:308">
                    Correct division
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:309" data-name="Checkbox / Other">
                <ControlCheckbox className="bg-white block border-3 border-[#8a9a91] border-solid cursor-pointer relative rounded-[10px] shrink-0 size-[40px]" />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:311" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:312">
                    Other
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:313" data-name="Field / Message to field worker">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:314">
                  Message to field worker *
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[240px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:315" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="20:316">
                    Please retake a clearer image and confirm symptom details.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:317" data-name="r">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="20:318" data-name="Field / Requested revision number">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:319">
                    Requested revision number
                  </p>
                  <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:320" data-name="Input">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="20:321">
                      2
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="20:322" data-name="Field / Requested by">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:323">
                    Requested by
                  </p>
                  <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:324" data-name="Input">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="20:325">
                      Malini Fernando (USR-003)
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-[#e1eefb] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:326" data-name="Banner / info">
                <div className="relative shrink-0 size-[36px]" data-node-id="20:327" data-name="icon/shield">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconShield} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#164f8a] text-[27px]" data-node-id="20:329">
                  The original image stays preserved. The field worker submits a new revision; the original is never overwritten.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:148" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:149" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
            </div>
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] h-full items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[960px]" data-node-id="20:330" data-name="Card / What happens next">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:331" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:332">
                  What happens next
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="20:333" data-name="Timeline">
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:334" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:335" data-name="rail">
                    <div className="relative shrink-0 size-[44px]" data-node-id="20:336" data-name="dot">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                    </div>
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:338" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:339" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:340">
                      Request sent
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:341">
                      Status: requested
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:342" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:343" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:344" data-name="dot" />
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:345" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:346" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:347">
                      Field worker submits revision 2
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:348">
                      Status: resubmitted
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:349" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:350" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:351" data-name="dot" />
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:352" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:353" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:354">
                      You approve or reject
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:355">
                      Approval is not application
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:356" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:357" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:358" data-name="dot" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:359" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:360">
                      RevisionApplied
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:361">
                      Only then does review return to in_review
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export {
  WebReviewRev06Default3840X2160 as default
};
