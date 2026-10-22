import React from 'react';
const imgIconCheck = "/assets/21d17d42-851c-4ad7-9132-85e35d26e5ed.svg";
const imgIconLeaf = "/assets/fc0256a8-6f0e-4707-aefb-78c5f4e3dd57.svg";
const imgIconHome = "/assets/0ed171ca-a403-4d32-895c-de07daa93880.svg";
const imgIconInbox = "/assets/62c75fcb-1e99-41dd-b784-7da2cd60140b.svg";
const imgIconEdit = "/assets/c01f3d35-2a49-4f3f-907e-83d535d4d670.svg";
const imgIconSend = "/assets/f186e1de-30c1-45a7-a24d-48a83f38a901.svg";
const imgIconArchive = "/assets/7de2c93c-a03e-48ba-88c6-e027afdff6ce.svg";
const imgIconHistory = "/assets/f3ff336e-6bf2-4491-ad8e-7aced7d77302.svg";
const imgIconImage = "/assets/f99baffd-f151-4fd2-959f-44719393da85.svg";
const imgVector = "/assets/f2913a1b-5bd6-4976-b20c-d378fad3d810.svg";
const imgVector1 = "/assets/2be27b2f-eb7f-40ef-be7f-df4409f50dd6.svg";
const imgVector2 = "/assets/c2ea1195-154e-4ae1-b433-5b5bf6b275d3.svg";
const imgIconRight = "/assets/8c16185e-d0c3-420b-9970-95f789f1438d.svg";
const imgFrame = "/assets/fbca6df7-fad0-4d67-b370-f42ca872f179.svg";
const imgIconSearch = "/assets/3badb148-f723-426c-bae4-eadd3e6a89d2.svg";
const imgDot = "/assets/945302ae-fbd7-4965-ae28-99f1651006e6.svg";
const imgIconBell = "/assets/9311873e-6f87-4e9e-8a8b-94b22fac7dfd.svg";
const imgIconDown = "/assets/105f02fc-ccc5-4f64-b494-a4567c4843c1.svg";
const imgIconLeft = "/assets/e7b1cd1c-3cf4-4070-85f1-531c66d094c4.svg";
const imgVector3 = "/assets/77930511-ba72-4bd9-a73d-7d526ed5695f.svg";
const imgIconLink = "/assets/4db7bff0-88d2-49ea-911c-92e8dec4c17d.svg";
const imgFrame1 = "/assets/f44a21ea-b5dc-4bd0-9559-e4e090f35709.svg";
const imgDot1 = "/assets/d35375b0-0110-4f29-8cd7-46de1b03a2b8.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev12Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="21:167" data-name="WEB / Review / REV-12 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="21:168" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="21:169" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="21:170" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="21:171" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="21:174" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="21:175">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="21:176">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="21:177" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="21:178">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:179" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:180" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:183">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:184" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:185" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:188">
            Review Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:189" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:190" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:193">
            Correction Queue
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:194" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:195" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="21:197">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:198" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:199" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:202">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:203" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:204" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:207">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:208" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:209" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:213">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6807" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6808" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6809" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6810" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6811" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6812">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="21:214" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="21:215" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="21:216" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="21:217">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="21:218" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="21:219">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="21:220">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="21:221">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="21:222" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="21:223" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="21:224" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="21:225">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="21:226" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="21:228">
              <p className="leading-[normal]">Expert Referrals</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="21:229" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:231">
              New referral
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="21:232" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:434" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:435" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:437">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="21:233" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="21:234" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="21:237" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:980" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="21:238" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="21:239" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="21:240">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="21:241" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="21:242" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:245" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="21:246" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="21:247">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="21:248" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="21:249">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="21:250">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="21:251" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="21:253" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:254" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="21:255" data-name="titles">
              <button className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="21:256" data-name="Back">
                <div className="relative shrink-0 size-[32px]" data-node-id="21:257" data-name="icon/left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeft} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="21:259">
                  Back to review
                </p>
              </button>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="21:260">
                Refer to Expert
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="21:261">
                OBS-014 · Grey blight suspected · East Hills (DIV-005)
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:262" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="21:263" data-name="Button / secondary / Cancel">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="21:264">
                  Cancel
                </p>
              </a>
              <a className="bg-[#2e7d32] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="21:265" data-name="Button / primary / Send referral">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="21:266" data-name="icon/send">
                  <div className="absolute inset-[12.5%]" data-node-id="21:267" data-name="Vector">
                    <div className="absolute inset-[-5.56%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="21:268">
                  <p className="leading-[normal]">Send referral</p>
                </div>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="21:269" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="21:270" data-name="Card / Referral details">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:271" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="21:272">
                  Referral details
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:273" data-name="Field / Disease expert">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="21:274">
                  Disease expert *
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:275" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="21:276">
                    Dr Tara Wijesinghe · EST-001, EST-002
                  </p>
                  <div className="relative shrink-0 size-[32px]" data-node-id="21:277" data-name="icon/down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:279" data-name="Field / Referral note">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="21:280">
                  Referral note *
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[240px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:281" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="21:282">
                    Describe why expert confirmation is needed
                  </p>
                </div>
              </div>
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:283">
                Evidence shared with the expert
              </p>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:284" data-name="Checkbox / Original image (IMG-014)">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="21:288" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:289">
                    Original image (IMG-014)
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:290" data-name="Checkbox / GPS provenance and capture metadata">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="21:294" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:295">
                    GPS provenance and capture metadata
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:296" data-name="Checkbox / Field note and suspected disease">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="21:300" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:301">
                    Field note and suspected disease
                  </p>
                </div>
              </div>
              <div className="bg-[#fff1d6] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="21:302" data-name="Banner / warn">
                <div className="relative shrink-0 size-[36px]" data-node-id="21:303" data-name="icon/link">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLink} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#7a4f00] text-[27px]" data-node-id="21:306">
                  Referral creates a case for the expert. If the case link is delayed, the referral shows pending case link until it is reconciled.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:173" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:174" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
            </div>
            <div className="content-stretch flex flex-col gap-[40px] h-full items-start overflow-clip relative shrink-0 w-[960px]" data-node-id="21:307" data-name="Side">
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="21:308" data-name="Card / Selected expert">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:309" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="21:310">
                    Selected expert
                  </p>
                </div>
                <div className="content-stretch flex gap-[24px] items-center overflow-clip relative shrink-0" data-node-id="21:311" data-name="u">
                  <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[48px] shrink-0 size-[96px]" data-node-id="21:312" data-name="Avatar">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[36.48px] whitespace-nowrap" data-node-id="21:313">
                      TW
                    </p>
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="21:314" data-name="t">
                    <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1f2a24] text-[30px]" data-node-id="21:315">
                      Dr Tara Wijesinghe
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="21:316">
                      USR-005 · Disease expert
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:317" data-name="Details grid">
                  <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:318" data-name="row">
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:319" data-name="kv">
                      <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:320">
                        Estates in scope
                      </p>
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:321">
                        EST-001, EST-002
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:322" data-name="row">
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:323" data-name="kv">
                      <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:324">
                        Awaiting diagnosis
                      </p>
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:325">
                        CASE-011, CASE-023, CASE-047
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[28px] items-start min-h-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] w-full" data-node-id="21:326" data-name="Card / After sending">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:327" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="21:328">
                    After sending
                  </p>
                </div>
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="21:329" data-name="Timeline">
                  <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:330" data-name="Timeline item">
                    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="21:331" data-name="rail">
                      <div className="relative shrink-0 size-[44px]" data-node-id="21:332" data-name="dot">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                      </div>
                      <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="21:334" data-name="Rectangle" />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="21:335" data-name="text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:336">
                        Referral sent
                      </p>
                      <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="21:337">
                        Status: referred
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:338" data-name="Timeline item">
                    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="21:339" data-name="rail">
                      <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="21:340" data-name="dot" />
                      <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="21:341" data-name="Rectangle" />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="21:342" data-name="text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:343">
                        Case created and linked
                      </p>
                      <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="21:344">
                        Referral becomes linked
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:345" data-name="Timeline item">
                    <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="21:346" data-name="rail">
                      <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="21:347" data-name="dot" />
                    </div>
                    <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="21:348" data-name="text">
                      <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:349">
                        Expert diagnosis
                      </p>
                      <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="21:350">
                        Confirmed disease recorded
                      </p>
                    </div>
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
  WebReviewRev12Default3840X2160 as default
};
