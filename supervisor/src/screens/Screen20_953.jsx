import React from 'react';
const imgIconCheck = "/assets/15f47e2d-780b-44dc-9175-1bb7501fb2a8.svg";
const imgIconLeaf = "/assets/5ac845be-bfac-449f-9d96-f07fa864193a.svg";
const imgIconHome = "/assets/8227442d-d045-49af-aa4a-f44bf01c44b6.svg";
const imgIconInbox = "/assets/fcb82bd2-6cad-46d5-89b6-573a0642dd3f.svg";
const imgIconEdit = "/assets/0fd23e74-3ec4-45d3-9857-14d7ec48228c.svg";
const imgIconSend = "/assets/1ddd0ba4-89c5-4386-a284-dcbdf551438b.svg";
const imgIconArchive = "/assets/272735e5-5610-4bb6-8c42-0a7e785bfd08.svg";
const imgIconHistory = "/assets/4631380a-5e29-4a94-be6f-e93f1cc05425.svg";
const imgIconImage = "/assets/ac8bd3fa-a691-4eed-8cbd-1745d8a4b363.svg";
const imgVector = "/assets/ca80c75b-1a7b-4001-a35f-27649e4468bb.svg";
const imgVector1 = "/assets/205b3b2d-045b-4f0d-b9a5-099e258f2846.svg";
const imgVector2 = "/assets/5d675a48-f713-4da9-8f9b-68d0c376370c.svg";
const imgIconRight = "/assets/3a00eb91-2445-4f7b-8495-570ef9e25107.svg";
const imgFrame = "/assets/70e49b6f-2739-4ac6-8f7d-a4b36f0c9867.svg";
const imgIconSearch = "/assets/561e7348-adbc-4eb4-9cc2-b17def6f06d0.svg";
const imgDot = "/assets/068537a7-2947-43ca-adfa-b12422bc460b.svg";
const imgIconBell = "/assets/e97e22c6-2d47-4673-9a3e-ac6d9bc3899b.svg";
const imgIconDown = "/assets/0551384d-d851-4096-9d3a-dedb3cf9773d.svg";
const imgIconLeft = "/assets/127d4ac8-1bfb-4e8b-9ef0-0de544b015bd.svg";
const imgIconCheck1 = "/assets/629f2948-0b89-45d9-861f-f458b6f3bf33.svg";
const imgIconAlert = "/assets/8965112f-1816-405b-aabd-19723bcc5abf.svg";
const imgFrame1 = "/assets/804a809d-8a2c-468c-a4b8-3ac30cc8063c.svg";
const imgDot1 = "/assets/c640df87-e452-433d-a308-cf3cb4208b26.svg";
const imgDot2 = "/assets/8f72f35a-b7ea-4a48-872a-c54e022245bd.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev10Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="20:953" data-name="WEB / Review / REV-10 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="20:954" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="20:955" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="20:956" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="20:957" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:960" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="20:961">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="20:962">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="20:963" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:964">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:965" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:966" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:969">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:970" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:971" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:974">
            Review Queue
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:975" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:976" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="20:979">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:980" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:981" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:983">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:984" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:985" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:988">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:989" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:990" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:993">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:994" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:995" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:999">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6783" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6784" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6785" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6786" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6787" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6788">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="20:1000" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:1001" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="20:1002" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="20:1003">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="20:1004" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="20:1005">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="20:1006">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:1007">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="20:1008" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="20:1009" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="20:1010" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:1011">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:1012" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:1014">
              <p className="leading-[normal]">Correction Queue</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:1015" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:1017">
              <p className="leading-[normal]">COR-005</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:1018" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1020">
              Approve
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="20:1021" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:420" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:421" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:423">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="20:1022" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="20:1023" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="20:1026" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:970" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:1027" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="20:1028" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="20:1029">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="20:1030" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="20:1031" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:1034" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="20:1035" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="20:1036">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:1037" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="20:1038">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="20:1039">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="20:1040" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="20:1042" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:1043" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="20:1044" data-name="titles">
              <button className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="20:1045" data-name="Back">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:1046" data-name="icon/left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeft} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="20:1048">
                  Back to comparison
                </p>
              </button>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="20:1049">
                Approve Correction
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="20:1050">
                COR-005 · OBS-005 · revision 2 (OBSR-005-2)
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:1051" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:1052" data-name="Button / secondary / Cancel">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="20:1053">
                  Cancel
                </p>
              </a>
              <a className="bg-[#2e7d32] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:1054" data-name="Button / primary / Confirm approval">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:1055" data-name="icon/check">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="20:1057">
                  Confirm approval
                </p>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="20:1058" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="20:1059" data-name="Card / Approval">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:1060" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:1061">
                  Approval
                </p>
              </div>
              <div className="bg-[#fff1d6] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:1062" data-name="Banner / warn">
                <div className="relative shrink-0 size-[36px]" data-node-id="20:1063" data-name="icon/alert">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#7a4f00] text-[27px]" data-node-id="20:1066">
                  Approval is not application. After you approve, the correction is marked Approved and the review stays in correction_requested until RevisionApplied is received.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:163" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:164" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:1067" data-name="Checkbox / I compared the original and revised data">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:1071" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1072">
                    I compared the original and revised data
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:1073" data-name="Checkbox / Original evidence is unchanged">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:1077" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1078">
                    Original evidence is unchanged
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1079" data-name="Field / Approval note (optional)">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:1080">
                  Approval note (optional)
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[220px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:1081" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="20:1082">
                    Add a note for the decision history
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="20:1083" data-name="Outcome">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="20:1084">
                  Correction status becomes:
                </p>
                <div className="bg-[#e3f2da] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:1085" data-name="Badge / Approved">
                  <div className="relative shrink-0 size-[12px]" data-node-id="20:1086" data-name="dot">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[23px] whitespace-nowrap" data-node-id="20:1087">
                    Approved
                  </p>
                </div>
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="20:1088">
                  (not Applied)
                </p>
              </div>
            </div>
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] h-full items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[1000px]" data-node-id="20:1089" data-name="Card / What happens next">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:1090" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:1091">
                  What happens next
                </p>
              </div>
              <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1092" data-name="Timeline">
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1093" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:1094" data-name="rail">
                    <div className="relative shrink-0 size-[44px]" data-node-id="20:1095" data-name="dot">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot2} />
                    </div>
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:1097" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:1098" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1099">
                      Approved
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:1100">
                      You confirm this decision
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1101" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:1102" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:1103" data-name="dot" />
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:1104" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:1105" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1106">
                      Revision application
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:1107">
                      System applies revision 2
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1108" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:1109" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:1110" data-name="dot" />
                    <div className="bg-[#e1e8e2] h-[60px] relative shrink-0 w-[4px]" data-node-id="20:1111" data-name="Rectangle" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:1112" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1113">
                      RevisionApplied event
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:1114">
                      Correction status becomes Applied
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[24px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:1115" data-name="Timeline item">
                  <div className="content-stretch flex flex-col items-center overflow-clip relative shrink-0" data-node-id="20:1116" data-name="rail">
                    <div className="bg-white border-4 border-[#b8c4bc] border-solid relative rounded-[22px] shrink-0 size-[44px]" data-node-id="20:1117" data-name="dot" />
                  </div>
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-w-px not-italic overflow-clip relative" data-node-id="20:1118" data-name="text">
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:1119">
                      Review returns to in_review
                    </p>
                    <p className="font-['Inter:Regular'] font-normal min-w-full relative shrink-0 text-[#5b6b62] text-[25px] w-[min-content]" data-node-id="20:1120">
                      Only after RevisionApplied
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
  WebReviewRev10Default3840X2160 as default
};
