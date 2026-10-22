import React from 'react';
const imgIconCheck = "/assets/5f028edb-da79-4111-8252-82f16c051685.svg";
const imgIconLeaf = "/assets/78130e38-3bdf-4b07-afd2-f8647c1ff8dd.svg";
const imgIconHome = "/assets/e72ae2ef-ece0-43b7-a1c0-93ef82da70c0.svg";
const imgIconInbox = "/assets/c41b648f-e2f5-4992-bdd4-acdba47ede06.svg";
const imgIconEdit = "/assets/11890e9a-a985-45b3-893c-5ec785416c83.svg";
const imgIconSend = "/assets/edf4e90c-6ffb-4466-a866-abaa3cac8a5a.svg";
const imgIconArchive = "/assets/2b5aeeae-4d24-409e-a469-d20cb55eab6e.svg";
const imgIconHistory = "/assets/9b7d6dfb-b153-485d-a978-4dc2c5b817ba.svg";
const imgIconImage = "/assets/4e6e3c3e-43ab-4393-8cfb-40c8da6a5d48.svg";
const imgVector = "/assets/0f620692-15ac-4a38-906b-ef519dc680d6.svg";
const imgVector1 = "/assets/d3afce59-345b-4fcd-b170-b3d1330706bd.svg";
const imgVector2 = "/assets/028bcac3-b878-455b-9eb3-4212189a93c4.svg";
const imgIconRight = "/assets/e3ceb918-f02c-4c21-9343-af4adf6083b9.svg";
const imgFrame = "/assets/4435d071-62c3-467d-92d9-37b0c5e562bd.svg";
const imgIconSearch = "/assets/b7f553f4-031d-45c1-a396-64e25f1d892d.svg";
const imgDot = "/assets/4f441386-2e98-4b54-9550-0a653632febe.svg";
const imgIconBell = "/assets/80fd3acf-4b52-446f-b9f9-06ea616a530a.svg";
const imgIconDown = "/assets/03de263c-2265-44c3-a823-28785a745705.svg";
const imgIconLeft = "/assets/d6910c42-5583-4282-89f1-d6b239a2ed49.svg";
const imgIconFlag = "/assets/b78af834-83d8-4932-b35f-64cc0dbae8a0.svg";
const imgLeaf = "/assets/120359d1-0e1b-4d2d-9356-42710f34b51f.svg";
const imgSymptomSpot = "/assets/8f19fc8c-45a3-4fda-8f40-9611effc1d2e.svg";
const imgSymptomSpot1 = "/assets/cc83fadb-2b37-4d3b-b517-4868f7f924dd.svg";
const imgSymptomSpot2 = "/assets/368f3954-d606-4b28-89a6-80644209d75e.svg";
const imgSymptomSpot3 = "/assets/49b7f5d8-3cd6-4721-9eb2-0d1b7e686c42.svg";
const imgIconImage1 = "/assets/72749d90-f7a1-40bc-8b99-8ee812abb385.svg";
const imgDot1 = "/assets/be031806-6e4d-4408-9b76-fdcacf73f7ba.svg";
const imgIconFlag1 = "/assets/5a6d2c6c-3b2f-4033-9515-6d33cf225ba6.svg";
const imgFrame1 = "/assets/0e356af7-36bb-42e5-ac6f-f472988d5a36.svg";
const imgIconAlert = "/assets/9f94b056-72f7-4e0f-8746-d348d6e76e60.svg";
const imgDot2 = "/assets/674be550-5735-4762-b60f-4cb95c758465.svg";
function ControlCheckbox({ className, state = false }) {
  const isState = state;
  return <button className={className || `border-3 border-solid overflow-clip relative rounded-[10px] size-[40px] ${isState ? "bg-[#2e7d32] border-[#2e7d32] content-stretch flex items-center justify-center" : "bg-white block border-[#8a9a91]"}`} id={isState ? "node-50_7" : "node-50_6"}>
      {isState && <div className="relative shrink-0 size-[26px]" data-node-id="50:4" data-name="icon/check">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconCheck} />
        </div>}
    </button>;
}
function WebReviewRev05Default3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="20:2" data-name="WEB / Review / REV-05 / default / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="20:3" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="20:4" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="20:5" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="20:6" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:9" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="20:10">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="20:11">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="20:12" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:13">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:14" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:15" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:18">
            Dashboard
          </p>
        </a>
        <a className="bg-[#2a5c38] content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:19" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:20" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[27px] text-left text-white whitespace-nowrap" data-node-id="20:23">
            Review Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:24" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:25" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:28">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:29" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:30" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:32">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:33" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:34" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:37">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:38" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:39" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:42">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:43" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="20:44" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="20:48">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:6723" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:6724" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:6725" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:6726" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:6727" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:6728">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="20:49" data-name="spacer" />
        <a className="bg-[#1b4a2b] content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:50" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="20:51" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] text-left whitespace-nowrap" data-node-id="20:52">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative text-left whitespace-nowrap" data-node-id="20:53" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="20:54">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="20:55">
              Supervisor
            </p>
          </div>
        </a>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="20:56">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="20:57" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="20:58" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="20:59" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:60">
              <p className="leading-[normal]">Review</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:61" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:63">
              <p className="leading-[normal]">Review Queue</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:64" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="20:66">
              <p className="leading-[normal]">OBS-014</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="20:67" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:69">
              Flag
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="20:70" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:385" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:386" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:388">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="20:71" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="20:72" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="20:75" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:945" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:76" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="20:77" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="20:78">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="20:79" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="20:80" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:83" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="20:84" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] text-left whitespace-nowrap" data-node-id="20:85">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="20:86" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="20:87">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="20:88">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="20:89" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </a>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="20:91" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:92" data-name="Page header">
            <div className="content-stretch flex flex-col gap-[8px] items-start overflow-clip relative shrink-0" data-node-id="20:93" data-name="titles">
              <button className="content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="20:94" data-name="Back">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:95" data-name="icon/left">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeft} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#2e7d32] text-[26px] text-left whitespace-nowrap" data-node-id="20:97">
                  Back to review
                </p>
              </button>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[52px] whitespace-nowrap" data-node-id="20:98">
                Flag Observation
              </p>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[28px] whitespace-nowrap" data-node-id="20:99">
                OBS-014 · East Hills (DIV-005) · Hiruni Nadeesha
              </p>
            </div>
            <div className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:100" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:101" data-name="Button / secondary / Cancel">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="20:102">
                  Cancel
                </p>
              </a>
              <a className="bg-[#b3261e] content-stretch flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="20:103" data-name="Button / danger / Flag observation">
                <div className="relative shrink-0 size-[32px]" data-node-id="20:104" data-name="icon/flag">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFlag} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="20:106">
                  Flag observation
                </p>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="20:107" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] h-full items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[1120px]" data-node-id="20:108" data-name="Card / Evidence summary">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:109" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:110">
                  Evidence summary
                </p>
              </div>
              <div className="h-[680px] overflow-clip relative rounded-[24px] shrink-0 w-[1040px]" data-node-id="20:111" style={{ backgroundImage: "linear-gradient(163.79622514959567deg, rgb(107, 168, 74) 0%, rgb(31, 74, 42) 76.923%)" }} data-name="Evidence image / IMG-033 · original.jpg">
                <div className="absolute left-[227.6px] size-[584.8px] top-[47.6px]" data-node-id="20:112" data-name="leaf">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLeaf} />
                </div>
                <div className="absolute h-[68.907px] left-[476.93px] top-[242.53px] w-[86.133px]" data-node-id="20:115" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot} />
                </div>
                <div className="absolute h-[52.693px] left-[591.07px] top-[341.07px] w-[65.867px]" data-node-id="20:116" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot1} />
                </div>
                <div className="absolute h-[40.533px] left-[442.67px] top-[382.67px] w-[50.667px]" data-node-id="20:117" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot2} />
                </div>
                <div className="absolute h-[32.427px] left-[582.93px] top-[217.73px] w-[40.533px]" data-node-id="20:118" data-name="symptom spot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgSymptomSpot3} />
                </div>
                <div className="absolute bg-[#0e1a12] content-stretch flex gap-[12px] items-center left-[28px] opacity-85 overflow-clip px-[20px] py-[12px] rounded-[16px] top-[600px]" data-node-id="20:119" data-name="Image chip">
                  <div className="relative shrink-0 size-[28px]" data-node-id="20:120" data-name="icon/image">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage1} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap" data-node-id="20:124">
                    IMG-014 · original.jpg
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:125" data-name="Details grid">
                <div className="[word-break:break-word] content-stretch flex gap-[32px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="20:126" data-name="row">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="20:127" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="20:128">
                      Observation
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="20:129">
                      OBS-014
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="20:130" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="20:131">
                      Suspected disease
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="20:132">
                      Blister blight
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:133" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="20:134" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="20:135">
                      Captured
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="20:136">
                      15 Oct 2026
                    </p>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-w-px overflow-clip relative" data-node-id="20:137" data-name="kv">
                    <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[24px] whitespace-nowrap" data-node-id="20:138">
                      Current status
                    </p>
                    <div className="bg-[#ede7f8] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:139" data-name="Badge / In review">
                      <div className="relative shrink-0 size-[12px]" data-node-id="20:140" data-name="dot">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                      </div>
                      <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#52389a] text-[23px] whitespace-nowrap" data-node-id="20:141">
                        In review
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-[1_0_0] flex-col gap-[32px] h-full items-start min-w-px overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)]" data-node-id="20:142" data-name="Card / Flag details">
              <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="20:143" data-name="Card header">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="20:144">
                  Flag details
                </p>
              </div>
              <div className="bg-[#fff1d6] content-stretch flex gap-[20px] items-center overflow-clip px-[32px] py-[24px] relative rounded-[20px] shrink-0 w-full" data-node-id="20:145" data-name="Banner / warn">
                <div className="relative shrink-0 size-[36px]" data-node-id="20:146" data-name="icon/flag">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconFlag1} />
                </div>
                <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Medium'] font-medium leading-[normal] min-w-px not-italic relative text-[#7a4f00] text-[27px]" data-node-id="20:148">
                  Flagging marks a concern for follow-up. It does not delete or change the original evidence.
                </p>
                <button className="content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[22px] shrink-0 size-[44px]" data-node-id="66:143" data-name="Dismiss banner">
                  <div className="relative shrink-0 size-[24px]" data-node-id="66:144" data-name="Frame">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
                  </div>
                </button>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:149" data-name="Field / Reason">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:150">
                  Reason *
                </p>
                <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:151" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="20:152">
                    Image quality issue
                  </p>
                  <div className="relative shrink-0 size-[32px]" data-node-id="20:153" data-name="icon/down">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:155" data-name="r">
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="20:156" data-name="Field / Concern category">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:157">
                    Concern category
                  </p>
                  <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:158" data-name="Input">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="20:159">
                      Evidence
                    </p>
                    <div className="relative shrink-0 size-[32px]" data-node-id="20:160" data-name="icon/down">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="20:162" data-name="Field / Review version">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:163">
                    Review version
                  </p>
                  <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:164" data-name="Input">
                    <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="20:165">
                      1
                    </p>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="20:166" data-name="Field / Explanation">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="20:167">
                  Explanation *
                </p>
                <div className="bg-white border-3 border-[#b3261e] border-solid content-stretch flex h-[240px] items-start overflow-clip pt-[20px] px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="20:168" data-name="Input">
                  <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="20:169">
                    Explain what needs follow-up
                  </p>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0" data-node-id="20:170" data-name="help">
                  <div className="relative shrink-0 size-[28px]" data-node-id="20:171" data-name="icon/alert">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconAlert} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#b3261e] text-[24px] whitespace-nowrap" data-node-id="20:174">
                    Add a note explaining the flag before continuing
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="20:175" data-name="Checkbox / Notify field worker (Ravindu Kumara)">
                <ControlCheckbox className="bg-[#2e7d32] border-3 border-[#2e7d32] border-solid content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[40px]" state />
                <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0" data-node-id="20:179" data-name="t">
                  <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="20:180">
                    Notify field worker (Ravindu Kumara)
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="20:181" data-name="Outcome">
                <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="20:182">
                  Resulting status:
                </p>
                <div className="bg-[#fde4e1] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="20:183" data-name="Badge / Flagged">
                  <div className="relative shrink-0 size-[12px]" data-node-id="20:184" data-name="dot">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot2} />
                  </div>
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#a8221a] text-[23px] whitespace-nowrap" data-node-id="20:185">
                    Flagged
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
  WebReviewRev05Default3840X2160 as default
};
