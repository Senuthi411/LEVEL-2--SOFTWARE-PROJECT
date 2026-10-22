import React from 'react';
const imgIconCheck = "/assets/78bbe142-5829-4e0f-8115-6b70bf14a187.svg";
const imgIconLeaf = "/assets/67b9e088-6fce-46de-af4b-367c5f7fead1.svg";
const imgIconHome = "/assets/e6915a66-8a2b-4424-8d7c-32ce6a958341.svg";
const imgIconInbox = "/assets/6a3cec9a-7f16-4e42-b6ee-33c7c74476aa.svg";
const imgIconEdit = "/assets/61f5e9de-4dbe-4d16-90f3-9d0469a83efc.svg";
const imgIconSend = "/assets/e0600c32-25e5-42f2-8c48-5f8283f0f309.svg";
const imgIconArchive = "/assets/24d9c51e-e921-4cb7-ba43-2f7466d795d0.svg";
const imgIconHistory = "/assets/d7e962d7-e7a5-484f-8af9-bfbe6d6e8d53.svg";
const imgIconImage = "/assets/d5b291e4-faa7-43cd-9a70-3bf78787a834.svg";
const imgVector = "/assets/0fe03100-4c1a-4010-89db-6728e4641d83.svg";
const imgVector1 = "/assets/805b2546-3a61-48e9-b046-cdc8b0f1d1bb.svg";
const imgVector2 = "/assets/fa4e336b-1386-4eed-ad41-ac32f4a575ab.svg";
const imgIconRight = "/assets/b5314357-4139-410e-8cbd-8858e67dfe07.svg";
const imgFrame = "/assets/43e9c84a-84d6-4324-b1da-45073070a81e.svg";
const imgIconSearch = "/assets/3c973ba5-b62c-4ddf-9a62-e9c133e28524.svg";
const imgDot = "/assets/bd1708c6-c1ca-4dee-ad55-a5cd781034a1.svg";
const imgIconBell = "/assets/c0003c0e-f7c2-4e8d-b1ac-93c6f5b307f0.svg";
const imgIconDown = "/assets/64528602-9d10-41dd-84a5-45828ea89d54.svg";
const imgVector3 = "/assets/7ef9a500-60fd-4e55-ba1a-d60c51ee81e6.svg";
const imgIconX = "/assets/7204ef51-a5d5-4c48-8173-e046b52bb1cd.svg";
const imgIconShield = "/assets/a2b254ee-c425-4b71-96a1-bac7b426db51.svg";
const imgFrame1 = "/assets/ca836dd9-e6b2-4617-bfbf-7f8a7b23fe69.svg";
const imgIconAlert = "/assets/3f41e5a9-9f06-4a8e-9147-1f551bb364a1.svg";
const imgDot1 = "/assets/0d3d45ef-dd08-4e98-83c7-0981edf370b4.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev11Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="21:2" data-name="WEB / Review / REV-11 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="21:3" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="21:4" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="21:5" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="21:6" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="21:9" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="21:10">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="21:11">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="21:12" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="21:13">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:14" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:15" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:18">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:19" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:20" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:23">
            Review Queue
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:24" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:25" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="21:28">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:29" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:30" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:32">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:33" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:34" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:37">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:38" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:39" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:42">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:43" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="21:44" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="21:48">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6795" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6796" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6797" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6798" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6799" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6800">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="21:49" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="21:50" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="21:51" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="21:52">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="21:53" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="21:54">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="21:55">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="21:56">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="21:57" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="21:58" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="21:59" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="21:60">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="21:61" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="21:63">
              <p className="leading-[normal]">Correction Queue</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="21:64" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <button className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] text-left whitespace-nowrap" data-node-id="21:66">
              <p className="leading-[normal]">COR-041</p>
            </button>
            <div className="relative shrink-0 size-[28px]" data-node-id="21:67" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:69">
              Reject
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="21:70" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:427" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:428" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:430">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="21:71" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="21:72" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="21:75" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:975" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="21:76" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="21:77" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="21:78">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="21:79" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="21:80" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:83" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="21:84" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="21:85">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="21:86" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="21:87">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="21:88">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="21:89" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="21:91" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:92" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="21:93" data-name="titles">
              <a className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="21:94" data-name="Back">
                <div className="overflow-clip relative shrink-0 size-[32px]" data-node-id="21:95" data-name="icon/left">
                  <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-node-id="21:96" data-name="Vector">
                    <div className="absolute inset-[-8.33%_-16.67%]">
                      <img alt="" className="block max-w-none size-full" src={imgVector3} />
                    </div>
                  </div>
                </div>
                <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="21:97">
                  <p className="leading-[normal]">Back to correction</p>
                </div>
              </a>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="21:98">
                Reject Correction
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="21:99">
                COR-041 · OBS-041 · East Hills (DIV-005)
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:100" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="21:101" data-name="Button / secondary / Cancel">
                <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="21:102">
                  <p className="leading-[normal]">Cancel</p>
                </div>
              </a>
              <button className="bg-[#b3261e] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="21:103" data-name="Button / danger / Confirm rejection">
                <div className="relative shrink-0 size-[32px]" data-node-id="21:104" data-name="icon/x">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconX} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="21:106">
                  Confirm rejection
                </p>
              </button>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="21:107" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="21:108" data-name="Card / Rejection">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:109" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="21:110">
                  Rejection
                </p>
              </div>
              <div className="bg-[#e1eefb] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="21:111" data-name="Banner / info">
                <div className="relative shrink-0 size-[36px]" data-node-id="21:112" data-name="icon/shield">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconShield} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#164f8a] text-[27px]" data-node-id="21:114">
                  Rejecting leaves the original observation and evidence unchanged.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:168" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:169" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:115" data-name="Field / Reason">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="21:116">
                  Reason *
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:117" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="21:118">
                    Evidence still unclear
                  </p>
                  <div className="relative shrink-0 size-[32px]" data-node-id="21:119" data-name="icon/down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:121" data-name="Field / Message to field worker">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="21:122">
                  Message to field worker *
                </p>
                <div className="bg-white border-3 border-[#b3261e] border-solid content-stretch flex h-[260px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="21:123" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="21:124">
                    Explain what is still missing
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="21:125" data-name="help">
                  <div className="relative shrink-0 size-[28px]" data-node-id="21:126" data-name="icon/alert">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#b3261e] text-[24px] whitespace-nowrap" data-node-id="21:129">
                    A message is required when rejecting a correction
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="21:130" data-name="Checkbox / Notify field worker (Hiruni Nadeesha)">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="21:134" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="21:135">
                    Notify field worker (Hiruni Nadeesha)
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="21:136" data-name="Outcome">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="21:137">
                  Correction status becomes:
                </p>
                <div className="bg-[#fde4e1] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="21:138" data-name="Badge / Rejected">
                  <div className="relative shrink-0 size-[12px]" data-node-id="21:139" data-name="dot">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a8221a] text-[23px] whitespace-nowrap" data-node-id="21:140">
                    Rejected
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] h-full items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[1000px]" data-node-id="21:141" data-name="Card / Correction summary">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="21:142" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="21:143">
                  Correction summary
                </p>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="21:144" data-name="Details grid">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:145" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:146" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:147">
                      Correction
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:148">
                      COR-041
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:149" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:150" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:151">
                      Observation
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:152">
                      OBS-041
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:153" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:154" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:155">
                      Requested
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:156">
                      04 Oct 2026
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:157" data-name="row">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="21:158" data-name="kv">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[24px] whitespace-nowrap" data-node-id="21:159">
                      Status
                    </p>
                    <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="21:160" data-name="Badge / Requested">
                      <div className="relative shrink-0 size-[12px]" data-node-id="21:161" data-name="dot">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="21:162">
                        Requested
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="21:163" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="21:164" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="21:165">
                      Reason
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="21:166">
                      Please retake a clearer image and confirm symptom details.
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
  WebReviewRev11Default3840X2160 as default
};
