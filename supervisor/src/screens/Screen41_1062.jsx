import React from 'react';
const imgStateOff = "/assets/10813b7a-61d3-47dd-8731-55394a0f8726.svg";
const imgStateOn = "/assets/e0ef8a8c-763b-4819-bb20-39f87e43b18d.svg";
const imgIconLeaf = "/assets/73692d0f-d6a7-4d8f-8fb7-273ff79aa7c4.svg";
const imgIconHome = "/assets/f297977b-b40c-4cec-8de0-64ad62cf7419.svg";
const imgIconInbox = "/assets/ceaa0a6d-e4f6-4098-bb9f-d846f3fe3955.svg";
const imgIconEdit = "/assets/2bb58477-f4bb-49d2-bd46-1db7e2b94427.svg";
const imgIconSend = "/assets/2b7c5205-9bd7-4076-b07f-2355d9437537.svg";
const imgIconArchive = "/assets/ff34f3ca-3bb5-40f3-888e-dd9cb519791c.svg";
const imgIconHistory = "/assets/c9bb25c2-e094-4f76-ad7c-9bfd699bdb80.svg";
const imgIconImage = "/assets/a163aaac-c433-46e7-b02b-ebaa9382edfa.svg";
const imgVector = "/assets/ee1ff345-ac68-431f-9f84-cd86fbdeee55.svg";
const imgVector1 = "/assets/41915fb4-ada7-4b22-b817-0f7cb214f4f7.svg";
const imgVector2 = "/assets/298c0022-1803-4920-9ff2-aee4f605d9bb.svg";
const imgIconRight = "/assets/62edd353-79f1-4db9-9276-1554350f27ce.svg";
const imgFrame = "/assets/4c65475b-5a5d-4c01-b3a3-ae2be66d7a4b.svg";
const imgIconSearch = "/assets/b5d6e4d1-bea3-4e8e-9420-fdff1d4cc2e8.svg";
const imgDot = "/assets/4b7d24c4-bbbc-4ca4-8e8f-dc984bbabb13.svg";
const imgIconBell = "/assets/f33642fc-17e8-481e-8e90-0e66c70ad5a0.svg";
const imgIconDown = "/assets/3a9de5cf-df4a-4c67-b00c-5442870caea5.svg";
const imgIconLogout = "/assets/8f86af86-a128-40ec-846b-2a9ee0723c5e.svg";
const imgDot1 = "/assets/e746464e-bde9-4f64-a50d-fc56e7531358.svg";
const imgIconMail = "/assets/b47a2a44-59af-4425-807b-b57a70799c8b.svg";
const imgIconLock = "/assets/fb3c9ac9-e335-4de3-874c-53772bcd2ec9.svg";
const imgIconLock1 = "/assets/e54a43a0-4997-42b1-a58f-ad3d5bbaf3b6.svg";
function ControlToggle({ className, state = false }) {
  const isState = state;
  return <button className={className || "block h-[48px] relative w-[88px]"} id={isState ? "node-50_16" : "node-50_15"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isState ? imgStateOn : imgStateOff} />
    </button>;
}
function WebIdentityId14ProfileSup3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="41:1062" data-name="WEB / Identity / ID-14 / profile-sup / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="41:1257" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="41:1258" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="41:1259" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="41:1260" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="41:1263" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="41:1264">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="41:1265">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="41:1266" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="41:1267">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1268" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1269" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1272">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1273" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1274" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1277">
            Review Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1278" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1279" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1282">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1283" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1284" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1286">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1287" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1288" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1291">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1292" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1293" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1296">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1297" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="41:1298" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="41:1302">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="142:7467" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="142:7468" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="142:7469" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="142:7470" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="142:7471" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="142:7472">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="41:1303" data-name="spacer" />
        <div className="bg-[#1b4a2b] content-stretch flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="41:1304" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="41:1305" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] whitespace-nowrap" data-node-id="41:1306">
              MF
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="41:1307" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="41:1308">
              Malini Fernando
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="41:1309">
              Supervisor
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="41:1310">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="41:1118" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="41:1119" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="41:1120" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="41:1121">
              <p className="leading-[normal]">Account</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="41:1122" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="41:1124">
              My Profile
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="41:1125" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="71:917" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="71:918" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="71:920">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="41:1126" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="41:1127" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="41:1130" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="60:1315" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="41:1131" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="41:1132" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="41:1133">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="41:1134" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="41:1135" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="41:1138" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="41:1139" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] whitespace-nowrap" data-node-id="41:1140">
                MF
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="41:1141" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="41:1142">
                Malini Fernando
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="41:1143">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="41:1144" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </div>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="41:1146" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1147" data-name="Page header">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="41:1148" data-name="titles">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1f2a24] text-[52px]" data-node-id="41:1149">
                My Profile
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[28px]" data-node-id="41:1150">
                Manage your personal details, security and notifications
              </p>
            </div>
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="41:1151" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch cursor-pointer flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="41:1152" data-name="Button / secondary / Sign out">
                <div className="relative shrink-0 size-[32px]" data-node-id="41:1153" data-name="icon/logout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLogout} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="41:1155">
                  Sign out
                </p>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="41:1156" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] h-full items-center overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[720px]" data-node-id="41:1157" data-name="Card / body">
              <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[96px] shrink-0 size-[192px]" data-node-id="41:1158" data-name="Avatar">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[72.96px] whitespace-nowrap" data-node-id="41:1159">
                  MF
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[40px] whitespace-nowrap" data-node-id="41:1160">
                Malini Fernando
              </p>
              <div className="bg-[#ede7f8] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="41:1161" data-name="Badge / Administrator">
                <div className="relative shrink-0 size-[12px]" data-node-id="41:1162" data-name="dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#52389a] text-[23px] whitespace-nowrap" data-node-id="41:1163">
                  Supervisor
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="41:1164">
                malini.fernando@example.test
              </p>
              <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1165" data-name="Details grid">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1166" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="41:1167" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="41:1168">
                      User ID
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1169">
                      USR-003
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1170" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="41:1171" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="41:1172">
                      Scope
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1173">
                      EST-002
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1174" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="41:1175" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="41:1176">
                      Last sign-in
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1177">
                      Today · 07:41
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-w-px overflow-clip relative" data-node-id="41:1178" data-name="Right">
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="41:1179" data-name="Card / Personal information">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1180" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="41:1181">
                    Personal information
                  </p>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1182" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1183" data-name="Field / Full name">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1184">
                      Full name
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1185" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="41:1186">
                        Malini Fernando
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1187" data-name="Field / Email">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1188">
                      Email
                    </p>
                    <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1189" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="41:1190" data-name="icon/mail">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMail} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="41:1193">
                        malini.fernando@example.test
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1194" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1195" data-name="Field / Role">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1196">
                      Role
                    </p>
                    <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1197" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="41:1198">
                        Supervisor
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1199" data-name="Field / Language">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1200">
                      Language
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1201" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="41:1202">
                        English
                      </p>
                      <div className="relative shrink-0 size-[32px]" data-node-id="41:1203" data-name="icon/down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="41:1205" data-name="Card / Security">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1206" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="41:1207">
                    Security
                  </p>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="41:1208" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1209" data-name="Field / Current password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1210">
                      Current password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1211" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="41:1212" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="41:1215">
                        ••••••••••
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1216" data-name="Field / New password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1217">
                      New password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1218" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="41:1219" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="41:1222">
                        Minimum 12 characters
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="41:1223" data-name="Field / Confirm password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="41:1224">
                      Confirm password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="41:1225" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="41:1226" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="41:1229">
                        Repeat new password
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="41:1230" data-name="b">
                  <button className="bg-[#2e7d32] content-stretch cursor-pointer flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="41:1231" data-name="Button / primary / Update password">
                    <div className="relative shrink-0 size-[32px]" data-node-id="41:1232" data-name="icon/lock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock1} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="41:1235">
                      Update password
                    </p>
                  </button>
                </div>
              </div>
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="41:1236" data-name="Card / Notifications">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1237" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="41:1238">
                    Notifications
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1239" data-name="Toggle / Review escalations">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="41:1240" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1241">
                      Review escalations
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="41:1242">
                      Notify when a review needs my attention
                    </p>
                  </div>
                  <ControlToggle className="block cursor-pointer h-[48px] relative shrink-0 w-[88px]" state />
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1245" data-name="Toggle / Device session alerts">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="41:1246" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1247">
                      Correction and quarantine alerts
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="41:1248">
                      Notify when a correction or quarantine item is waiting
                    </p>
                  </div>
                  <ControlToggle className="block cursor-pointer h-[48px] relative shrink-0 w-[88px]" state />
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="41:1251" data-name="Toggle / Weekly summary email">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="41:1252" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="41:1253">
                      Weekly summary email
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="41:1254">
                      Digest of activity in my scope
                    </p>
                  </div>
                  <ControlToggle className="block cursor-pointer h-[48px] relative shrink-0 w-[88px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
}
export {
  WebIdentityId14ProfileSup3840X2160 as default
};
