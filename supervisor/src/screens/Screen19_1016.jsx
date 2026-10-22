import React from 'react';
const imgIconCheck = "/assets/62c6ca63-d48c-455e-98d9-9156e8829b8c.svg";
const imgIconLeaf = "/assets/f9500f0f-1e9d-4357-af1a-c71ff4de746d.svg";
const imgIconHome = "/assets/c0061a67-f6d5-4b0a-b643-58c05ca52d5b.svg";
const imgIconInbox = "/assets/d08fd245-9311-4d35-9414-24927a143899.svg";
const imgIconEdit = "/assets/27fa09e6-1ee1-4fc3-ab19-b8f57b373e7f.svg";
const imgIconSend = "/assets/2751a512-1a67-4f7b-b0b0-103d88b9a4fe.svg";
const imgIconArchive = "/assets/5f46cf08-0299-477b-a7eb-eba54609b176.svg";
const imgIconHistory = "/assets/7770a879-4c54-4a7f-9665-9eceb7c386a8.svg";
const imgIconImage = "/assets/44c5b1ea-1c64-47c4-9e72-845d9f7a0c81.svg";
const imgVector = "/assets/120c4817-55b3-48ea-8cd6-826559466976.svg";
const imgVector1 = "/assets/076551ef-4fe3-44f5-80a9-a202c060d5b4.svg";
const imgVector2 = "/assets/95f3e11b-2e94-40dc-9a1f-641af1744eed.svg";
const imgIconRight = "/assets/c14a203b-13e3-41b1-8e06-da620dc7bb6e.svg";
const imgFrame = "/assets/406c6fa1-9a30-420e-a414-afabc7863bc4.svg";
const imgIconSearch = "/assets/4334f661-1430-4872-9bb7-74032cce30bb.svg";
const imgDot = "/assets/f9e06faa-df27-49c9-a5f5-504b482d6f4b.svg";
const imgIconBell = "/assets/2469f9ee-5040-4fe0-8340-464797a1bf38.svg";
const imgIconDown = "/assets/2f090897-168a-4ca2-8cef-80d0ed2b94a0.svg";
const imgIconLeft = "/assets/0bb6a4a8-5106-4326-8792-ee031b3790c6.svg";
const imgIconCheck1 = "/assets/846ca307-013d-4b78-b269-d262e57bd6a8.svg";
const imgLeaf = "/assets/325d49cf-b79d-4b47-b839-d321416ff37a.svg";
const imgSymptomSpot = "/assets/ab762a5c-951b-4611-8705-1cc2fd21c0a0.svg";
const imgSymptomSpot1 = "/assets/623de07e-7cee-4590-a21c-1a513d68a86b.svg";
const imgSymptomSpot2 = "/assets/99ae1e88-9852-43fb-8372-5a5d4abedbbc.svg";
const imgSymptomSpot3 = "/assets/9ce6f6bf-b3ee-426f-b010-c2c7a3fc2565.svg";
const imgIconImage1 = "/assets/ed4af662-65e5-4215-bdb5-0150cbd3defe.svg";
const imgIconInfo = "/assets/81ef36d5-4de0-4376-9a03-5dac300d7063.svg";
const imgFrame1 = "/assets/342c09af-9e2e-4ce2-9b29-d45cfcc800f8.svg";
const imgDot1 = "/assets/6d1afda8-8e97-43d6-9036-8abc5dbb6f49.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev04Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="19:1016" data-name="WEB / Review / REV-04 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="19:1017" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="19:1018" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="19:1019" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="19:1020" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="19:1023" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="19:1024">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="19:1025">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="19:1026" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="19:1027">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1028" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1029" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1032">
            Dashboard
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1033" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1034" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="19:1037">
            Review Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1038" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1039" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1042">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1043" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1044" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1046">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1047" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1048" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1051">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1052" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1053" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1056">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1057" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="19:1058" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="19:1062">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6711" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6712" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6713" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6714" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6715" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6716">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="19:1063" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="19:1064" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="19:1065" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="19:1066">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="19:1067" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="19:1068">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="19:1069">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="19:1070">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="19:1071" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="19:1072" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="19:1073" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="19:1074">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="19:1075" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="19:1077">
              <p className="leading-[normal]">Review Queue</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="19:1078" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="19:1080">
              <p className="leading-[normal]">OBS-014</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="19:1081" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="19:1083">
              Verify
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="19:1084" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:378" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:379" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:381">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="19:1085" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="19:1086" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="19:1089" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:940" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="19:1090" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="19:1091" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="19:1092">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="19:1093" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="19:1094" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1097" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="19:1098" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="19:1099">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="19:1100" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="19:1101">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="19:1102">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="19:1103" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="19:1105" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="19:1106" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="19:1107" data-name="titles">
              <button className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="19:1108" data-name="Back">
                <div className="relative shrink-0 size-[32px]" data-node-id="19:1109" data-name="icon/left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeft} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="19:1111">
                  Back to review
                </p>
              </button>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="19:1112">
                Verify Observation
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="19:1113">
                OBS-014 · East Hills (DIV-005)
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1114" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="19:1115" data-name="Button / secondary / Cancel">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="19:1116">
                  Cancel
                </p>
              </a>
              <button className="bg-[#2e7d32] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="19:1117" data-name="Button / primary / Confirm verification">
                <div className="relative shrink-0 size-[32px]" data-node-id="19:1118" data-name="icon/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="19:1120">
                  Confirm verification
                </p>
              </button>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="19:1121" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] h-full items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[1120px]" data-node-id="19:1122" data-name="Card / Evidence summary">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="19:1123" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="19:1124">
                  Evidence summary
                </p>
              </div>
              <div className="h-[680px] overflow-clip relative rounded-[24px] shrink-0 w-[1040px]" data-node-id="19:1125" style={{ backgroundImage: "linear-gradient(163.79622514959567deg, rgb(107, 168, 74) 0%, rgb(31, 74, 42) 76.923%)" }} data-name="Evidence image / IMG-014 · original.jpg">
                <div className="absolute left-[227.6px] size-[584.8px] top-[47.6px]" data-node-id="19:1126" data-name="leaf">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeaf} />
                </div>
                <div className="absolute h-[68.907px] left-[476.93px] top-[242.53px] w-[86.133px]" data-node-id="19:1129" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot} />
                </div>
                <div className="absolute h-[52.693px] left-[591.07px] top-[341.07px] w-[65.867px]" data-node-id="19:1130" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot1} />
                </div>
                <div className="absolute h-[40.533px] left-[442.67px] top-[382.67px] w-[50.667px]" data-node-id="19:1131" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot2} />
                </div>
                <div className="absolute h-[32.427px] left-[582.93px] top-[217.73px] w-[40.533px]" data-node-id="19:1132" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot3} />
                </div>
                <div className="absolute bg-[#0e1a12] content-stretch flex gap-[12px] items-center left-[28px] opacity-85 overflow-clip px-[20px] py-[12px] rounded-[16px] top-[600px]" data-node-id="19:1133" data-name="Image chip">
                  <div className="relative shrink-0 size-[28px]" data-node-id="19:1134" data-name="icon/image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="19:1138">
                    IMG-014 · original.jpg
                  </p>
                </div>
              </div>
              <div className="[word-break:break-word] content-stretch flex flex-col gap-[32px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="19:1139" data-name="Details grid">
                <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="19:1140" data-name="row">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="19:1141" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="19:1142">
                      Observation
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="19:1143">
                      OBS-014
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="19:1144" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="19:1145">
                      Suspected disease
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="19:1146">
                      Grey blight
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="19:1147" data-name="row">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="19:1148" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="19:1149">
                      GPS accuracy
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="19:1150">
                      ±19 m
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="19:1151" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="19:1152">
                      Review version
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="19:1153">
                      1
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="19:1154" data-name="Card / Verification checklist">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="19:1155" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="19:1156">
                  Verification checklist
                </p>
              </div>
              <div className="bg-[#e1eefb] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="19:1157" data-name="Banner / info">
                <div className="relative shrink-0 size-[36px]" data-node-id="19:1158" data-name="icon/info">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInfo} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#164f8a] text-[27px]" data-node-id="19:1161">
                  Verified means the observation record is accepted. It is not an expert diagnosis.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:138" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:139" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1162" data-name="Checkbox / Evidence image is clear and shows the leaf symptoms">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="19:1166" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="19:1167">
                    Evidence image is clear and shows the leaf symptoms
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1168" data-name="Checkbox / Location is inside the assigned division">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="19:1172" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="19:1173">
                    Location is inside the assigned division
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1174" data-name="Checkbox / Symptoms match the suspected disease">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="19:1178" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="19:1179">
                    Symptoms match the suspected disease
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="19:1180" data-name="Checkbox / GPS accuracy (±19 m) is acceptable for this division">
                <ControlCheckbox className="bg-white block border-3 border-[#8a9a91] border-solid cursor-pointer relative rounded-[10px] shrink-0 size-[40px]" />
                <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="19:1182" data-name="t">
                  <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[27px]" data-node-id="19:1183">
                    GPS accuracy (±19 m) is acceptable for this division
                  </p>
                  <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="19:1184">
                    Review the accuracy band before accepting
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="19:1185" data-name="Field / Verification note (optional)">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="19:1186">
                  Verification note (optional)
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[220px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="19:1187" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="19:1188">
                    Add a short note for the decision history
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="19:1189" data-name="Outcome">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="19:1190">
                  Resulting status:
                </p>
                <div className="bg-[#e3f2da] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="19:1191" data-name="Badge / Verified">
                  <div className="relative shrink-0 size-[12px]" data-node-id="19:1192" data-name="dot">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[23px] whitespace-nowrap" data-node-id="19:1193">
                    Verified
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export {
  WebReviewRev04Default3840X2160 as default
};
