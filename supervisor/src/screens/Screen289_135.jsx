import React from 'react';
const imgStateOff = "/assets/f751c602-6ef0-4908-baab-c28f26d706d4.svg";
const imgStateOn = "/assets/f7eaea2b-cbc4-4588-99e9-3463200da2cf.svg";
const imgIconLeaf = "/assets/8bf8bba3-d817-4246-80b2-c86984002441.svg";
const imgIconHome = "/assets/d19ff4c0-10a6-4861-ad1a-3ca42bf027c0.svg";
const imgIconInbox = "/assets/f1925f79-6d71-45cc-9fdf-d356ea48c620.svg";
const imgIconEdit = "/assets/58ac559f-ceb8-4d5c-bf2f-f5da29d063b5.svg";
const imgIconSend = "/assets/75a6ffce-361b-4b9c-b7aa-5e7568173925.svg";
const imgIconArchive = "/assets/2b682a3d-7bae-40cf-9983-a56d96ceb27f.svg";
const imgIconHistory = "/assets/937dce48-d333-49ca-9b54-b7c887a9ef02.svg";
const imgIconImage = "/assets/9de17448-538f-490b-874b-0f9d2451613e.svg";
const imgVector = "/assets/fd2c7e0f-6865-486c-943b-0864e79c2376.svg";
const imgVector1 = "/assets/5378c166-9201-41f0-a5b2-c32273a05853.svg";
const imgVector2 = "/assets/49d354c2-7ab0-46b6-9f00-1bcff08c4983.svg";
const imgIconRight = "/assets/aa68774f-c724-4d0f-bbeb-707beff64ab4.svg";
const imgFrame = "/assets/cbcf3358-9275-4fc6-8aed-6f535b469f60.svg";
const imgIconSearch = "/assets/90b5d784-e9c2-4e76-8749-0699f13de777.svg";
const imgDot = "/assets/df81f03a-1ac6-4611-a843-ae4bdd17bcec.svg";
const imgIconBell = "/assets/88720a80-e976-48f9-93c0-01b2c94bee55.svg";
const imgIconDown = "/assets/5ccab834-5dab-492f-8abd-a4a536ac4970.svg";
const imgIconLogout = "/assets/0a12582b-9c77-471a-8715-4c72d8e8e93e.svg";
const imgDot1 = "/assets/ec8d05da-d2d2-45db-8bdc-863d9fe29121.svg";
const imgIconMail = "/assets/60c8bb1e-df61-49a5-a40d-1ae6de4a98fc.svg";
const imgIconLock = "/assets/22df40bc-612a-4609-92dd-275b3f935295.svg";
const imgIconLock1 = "/assets/458fecf5-4c5a-4cc9-872d-9ea978402d9e.svg";
function ControlToggle({ className, state = false }) {
  const isState = state;
  return <button className={className || "block h-[48px] relative w-[88px]"} id={isState ? "node-50_16" : "node-50_15"}>
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={isState ? imgStateOn : imgStateOff} />
    </button>;
}
function WebIdentityId14ProfileSupNimal3840X2160() {
  return <div className="bg-[#f4f7f3] relative size-full" data-node-id="289:135" data-name="WEB / Identity / ID-14 / profile-sup-nimal / 3840x2160">
      <div className="absolute bg-[#12351f] content-stretch flex flex-col gap-[8px] h-[2160px] items-start left-0 overflow-clip px-[28px] py-[36px] top-0 w-[496px]" data-node-id="289:136" data-name="Sidebar">
        <a className="content-stretch cursor-pointer flex gap-[20px] items-center overflow-clip px-[12px] py-[8px] relative shrink-0" data-node-id="289:137" data-name="Brand">
          <div className="bg-[#e8f5e0] content-stretch flex items-center justify-center overflow-clip relative rounded-[38px] shrink-0 size-[76px]" data-node-id="289:138" data-name="logo">
            <div className="relative shrink-0 size-[44px]" data-node-id="289:139" data-name="icon/leaf">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLeaf} />
            </div>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 text-left whitespace-nowrap" data-node-id="289:142" data-name="wordmark">
            <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[32px] text-white" data-node-id="289:143">
              TeaLeaf
            </p>
            <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#c5e48b] text-[24px]" data-node-id="289:144">
              Field Scout
            </p>
          </div>
        </a>
        <div className="h-[28px] relative shrink-0 w-[100px]" data-node-id="289:145" data-name="gap" />
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="289:146">
          MENU
        </p>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:147" data-name="Nav / Dashboard">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:148" data-name="icon/home">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHome} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:151">
            Dashboard
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:152" data-name="Nav / Review Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:153" data-name="icon/inbox">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconInbox} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:156">
            Review Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:157" data-name="Nav / Correction Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:158" data-name="icon/edit">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconEdit} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:161">
            Correction Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:162" data-name="Nav / Expert Referrals">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:163" data-name="icon/send">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSend} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:165">
            Expert Referrals
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:166" data-name="Nav / Quarantine Queue">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:167" data-name="icon/archive">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconArchive} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:170">
            Quarantine Queue
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:171" data-name="Nav / Decision History">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:172" data-name="icon/history">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconHistory} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:175">
            Decision History
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:176" data-name="Nav / Evidence Viewer">
          <div className="relative shrink-0 size-[36px]" data-node-id="289:177" data-name="icon/image">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconImage} />
          </div>
          <p className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[normal] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:181">
            Evidence Viewer
          </p>
        </a>
        <a className="content-stretch cursor-pointer flex gap-[24px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:182" data-name="Nav / Fieldwork Assignments">
          <div className="overflow-clip relative shrink-0 size-[36px]" data-node-id="289:183" data-name="icon/image">
            <div className="absolute inset-[16.67%_12.5%]" data-node-id="289:184" data-name="Vector">
              <div className="absolute inset-[-6.25%_-5.56%]">
                <img alt="" className="block max-w-none size-full" src={imgVector} />
              </div>
            </div>
            <div className="absolute bottom-1/2 left-[29.17%] right-[54.17%] top-[33.33%]" data-node-id="289:185" data-name="Vector">
              <div className="absolute inset-[-25%]">
                <img alt="" className="block max-w-none size-full" src={imgVector1} />
              </div>
            </div>
            <div className="absolute inset-[45.83%_12.5%_16.67%_29.17%]" data-node-id="289:186" data-name="Vector">
              <div className="absolute inset-[-11.11%_-7.14%]">
                <img alt="" className="block max-w-none size-full" src={imgVector2} />
              </div>
            </div>
          </div>
          <div className="[word-break:break-word] font-['Inter:Medium'] font-medium leading-[0] not-italic relative shrink-0 text-[#c9dcce] text-[27px] text-left whitespace-nowrap" data-node-id="289:187">
            <p className="leading-[normal]">Fieldwork Assignments</p>
          </div>
        </a>
        <div className="flex-[1_0_0] min-h-px relative w-[100px]" data-node-id="289:188" data-name="spacer" />
        <div className="bg-[#1b4a2b] content-stretch flex gap-[20px] items-center overflow-clip p-[20px] relative rounded-[20px] shrink-0 w-full" data-node-id="289:189" data-name="User card">
          <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[34px] shrink-0 size-[68px]" data-node-id="289:190" data-name="Avatar">
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[25.84px] whitespace-nowrap" data-node-id="289:191">
              NS
            </p>
          </div>
          <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="289:192" data-name="u">
            <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[25px] text-white" data-node-id="289:193">
              Nimal Silva
            </p>
            <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#a9c4b0] text-[23px]" data-node-id="289:194">
              Supervisor
            </p>
          </div>
        </div>
        <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#8fb39a] text-[21px] whitespace-nowrap" data-node-id="289:195">
          Demonstration data · UI design only
        </p>
      </div>
      <div className="absolute content-stretch flex flex-col h-[2160px] items-start left-[496px] overflow-clip top-0 w-[3344px]" data-node-id="289:196" data-name="Main">
        <div className="bg-white border-[#e1e8e2] border-b-2 border-solid content-stretch flex gap-[36px] h-[144px] items-center overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="289:197" data-name="Top bar">
          <div className="content-stretch flex gap-[16px] items-center overflow-clip relative shrink-0" data-node-id="289:198" data-name="Breadcrumbs">
            <a className="[word-break:break-word] block cursor-pointer font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[27px] whitespace-nowrap" data-node-id="289:199">
              <p className="leading-[normal]">Account</p>
            </a>
            <div className="relative shrink-0 size-[28px]" data-node-id="289:200" data-name="icon/right">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconRight} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[27px] whitespace-nowrap" data-node-id="289:202">
              My Profile
            </p>
          </div>
          <div className="flex-[1_0_0] h-[100px] min-w-px relative" data-node-id="289:203" data-name="spacer" />
          <a className="bg-white border-2 border-[#c5cec8] border-solid content-stretch cursor-pointer flex gap-[12px] items-center overflow-clip pl-[26px] pr-[30px] py-[16px] relative rounded-[32px] shrink-0" data-node-id="289:204" data-name="Button / secondary / Switch Demo Role">
            <div className="relative shrink-0 size-[30px]" data-node-id="289:205" data-name="Frame">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[0] not-italic relative shrink-0 text-[#1f2a24] text-[26px] text-left whitespace-nowrap" data-node-id="289:207">
              <p className="leading-[normal]">Switch Demo Role</p>
            </div>
          </a>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex gap-[16px] h-[80px] items-center overflow-clip px-[28px] relative rounded-[40px] shrink-0 w-[680px]" data-node-id="289:208" data-name="Search">
            <div className="relative shrink-0 size-[34px]" data-node-id="289:209" role="button" tabIndex="0" data-name="icon/search">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconSearch} />
            </div>
            <div className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[0] not-italic relative shrink-0 text-[#5b6b62] text-[26px] text-left whitespace-nowrap" data-node-id="289:212" role="button" tabIndex="0">
              <p className="leading-[normal]">Search observations, cases, users</p>
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0" data-node-id="289:213" role="button" tabIndex="0" data-name="Search hit area" />
          </button>
          <div className="bg-[#fff1d6] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="289:214" data-name="Badge / Demo data">
            <div className="relative shrink-0 size-[12px]" data-node-id="289:215" data-name="dot">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot} />
            </div>
            <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#7a4f00] text-[23px] whitespace-nowrap" data-node-id="289:216">
              Demo data
            </p>
          </div>
          <button className="bg-[#f1f5f1] content-stretch cursor-pointer flex items-center justify-center overflow-clip relative rounded-[40px] shrink-0 size-[80px]" data-node-id="289:217" data-name="bell">
            <div className="relative shrink-0 size-[38px]" data-node-id="289:218" data-name="icon/bell">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconBell} />
            </div>
          </button>
          <div className="content-stretch flex gap-[20px] items-center overflow-clip relative shrink-0" data-node-id="289:221" data-name="Profile menu trigger">
            <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[36px] shrink-0 size-[72px]" data-node-id="289:222" data-name="Avatar">
              <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[27.36px] whitespace-nowrap" data-node-id="289:223">
                NS
              </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="289:224" data-name="p">
              <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[26px]" data-node-id="289:225">
                Nimal Silva
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[23px]" data-node-id="289:226">
                Supervisor
              </p>
            </div>
            <div className="relative shrink-0 size-[32px]" data-node-id="289:227" data-name="icon/down">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
            </div>
          </div>
        </div>
        <div className="bg-[#f4f7f3] content-stretch flex flex-[1_0_0] flex-col gap-[40px] items-start min-h-px overflow-clip px-[64px] py-[52px] relative w-full" data-node-id="289:229" data-name="Content">
          <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:230" data-name="Page header">
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="289:231" data-name="titles">
              <p className="font-['Inter:Bold'] font-bold relative shrink-0 text-[#1f2a24] text-[52px]" data-node-id="289:232">
                My Profile
              </p>
              <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[28px]" data-node-id="289:233">
                Manage your personal details, security and notifications
              </p>
            </div>
            <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="289:234" data-name="Actions">
              <a className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch cursor-pointer flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="289:235" data-name="Button / secondary / Sign out">
                <div className="relative shrink-0 size-[32px]" data-node-id="289:236" data-name="icon/logout">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLogout} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[26px] text-left whitespace-nowrap" data-node-id="289:238">
                  Sign out
                </p>
              </a>
            </div>
          </div>
          <div className="content-stretch flex flex-[1_0_0] gap-[40px] items-start min-h-px overflow-clip relative w-full" data-node-id="289:239" data-name="Row">
            <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] h-full items-center overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-[720px]" data-node-id="289:240" data-name="Card / body">
              <div className="bg-[#e3f2da] content-stretch flex items-center justify-center overflow-clip relative rounded-[96px] shrink-0 size-[192px]" data-node-id="289:241" data-name="Avatar">
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f5a2e] text-[72.96px] whitespace-nowrap" data-node-id="289:242">
                  NS
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Bold'] font-bold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[40px] whitespace-nowrap" data-node-id="289:243">
                Nimal Silva
              </p>
              <div className="bg-[#ede7f8] content-stretch flex gap-[10px] items-center overflow-clip px-[18px] py-[6px] relative rounded-[40px] shrink-0" data-node-id="289:244" data-name="Badge / Administrator">
                <div className="relative shrink-0 size-[12px]" data-node-id="289:245" data-name="dot">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDot1} />
                </div>
                <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#52389a] text-[23px] whitespace-nowrap" data-node-id="289:246">
                  Supervisor
                </p>
              </div>
              <p className="[word-break:break-word] font-['Inter:Regular'] font-normal leading-[normal] not-italic relative shrink-0 text-[#5b6b62] text-[26px] whitespace-nowrap" data-node-id="289:247">
                nimal.silva@example.test
              </p>
              <div className="content-stretch flex flex-col gap-[32px] items-start overflow-clip relative shrink-0 w-full" data-node-id="289:248" data-name="Details grid">
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="289:249" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="289:250" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="289:251">
                      User ID
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:252">
                      USR-002
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="289:253" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="289:254" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="289:255">
                      Scope
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:256">
                      EST-001
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0 w-full" data-node-id="289:257" data-name="row">
                  <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start leading-[normal] min-w-px not-italic overflow-clip relative whitespace-nowrap" data-node-id="289:258" data-name="kv">
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[24px]" data-node-id="289:259">
                      Last sign-in
                    </p>
                    <p className="font-['Inter:Semi_Bold'] font-semibold relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:260">
                      Today · 07:41
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[40px] h-full items-start min-w-px overflow-clip relative" data-node-id="289:261" data-name="Right">
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="289:262" data-name="Card / Personal information">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:263" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="289:264">
                    Personal information
                  </p>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="289:265" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:266" data-name="Field / Full name">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:267">
                      Full name
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:268" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="289:269">
                        Nimal Silva
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:270" data-name="Field / Email">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:271">
                      Email
                    </p>
                    <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:272" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="289:273" data-name="icon/mail">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconMail} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="289:276">
                        nimal.silva@example.test
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="289:277" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:278" data-name="Field / Role">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:279">
                      Role
                    </p>
                    <div className="bg-[#f1f4f1] border-2 border-[#b8c4bc] border-solid content-stretch flex h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:280" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#5b6b62] text-[28px]" data-node-id="289:281">
                        Supervisor
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:282" data-name="Field / Language">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:283">
                      Language
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:284" data-name="Input">
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="289:285">
                        English
                      </p>
                      <div className="relative shrink-0 size-[32px]" data-node-id="289:286" data-name="icon/down">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconDown} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[32px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="289:288" data-name="Card / Security">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:289" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="289:290">
                    Security
                  </p>
                </div>
                <div className="content-stretch flex gap-[40px] items-start overflow-clip relative shrink-0 w-full" data-node-id="289:291" data-name="r">
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:292" data-name="Field / Current password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:293">
                      Current password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:294" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="289:295" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#1f2a24] text-[28px]" data-node-id="289:298">
                        ••••••••••
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:299" data-name="Field / New password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:300">
                      New password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:301" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="289:302" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="289:305">
                        Minimum 12 characters
                      </p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px overflow-clip relative" data-node-id="289:306" data-name="Field / Confirm password">
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[25px] whitespace-nowrap" data-node-id="289:307">
                      Confirm password
                    </p>
                    <div className="bg-white border-2 border-[#b8c4bc] border-solid content-stretch flex gap-[20px] h-[80px] items-center overflow-clip px-[24px] relative rounded-[16px] shrink-0 w-full" data-node-id="289:308" data-name="Input">
                      <div className="relative shrink-0 size-[34px]" data-node-id="289:309" data-name="icon/lock">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock} />
                      </div>
                      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular'] font-normal leading-[normal] min-w-px not-italic relative text-[#6b7a72] text-[28px]" data-node-id="289:312">
                        Repeat new password
                      </p>
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex items-start overflow-clip relative shrink-0" data-node-id="289:313" data-name="b">
                  <button className="bg-[#2e7d32] content-stretch cursor-pointer flex gap-[12px] h-[76px] items-center justify-center overflow-clip px-[28px] relative rounded-[16px] shrink-0" data-node-id="289:314" data-name="Button / primary / Update password">
                    <div className="relative shrink-0 size-[32px]" data-node-id="289:315" data-name="icon/lock">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIconLock1} />
                    </div>
                    <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[26px] text-left text-white whitespace-nowrap" data-node-id="289:318">
                      Update password
                    </p>
                  </button>
                </div>
              </div>
              <div className="bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex flex-col gap-[28px] items-start overflow-clip px-[40px] py-[36px] relative rounded-[28px] shadow-[0px_4px_16px_0px_rgba(18,51,31,0.08)] shrink-0 w-full" data-node-id="289:319" data-name="Card / Notifications">
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:320" data-name="Card header">
                  <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="289:321">
                    Notifications
                  </p>
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:322" data-name="Toggle / Review escalations">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="289:323" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:324">
                      Review escalations
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="289:325">
                      Notify when a review needs my attention
                    </p>
                  </div>
                  <ControlToggle className="block cursor-pointer h-[48px] relative shrink-0 w-[88px]" state />
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:327" data-name="Toggle / Device session alerts">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="289:328" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:329">
                      Correction and quarantine alerts
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="289:330">
                      Notify when a correction or quarantine item is waiting
                    </p>
                  </div>
                  <ControlToggle className="block cursor-pointer h-[48px] relative shrink-0 w-[88px]" state />
                </div>
                <div className="content-stretch flex items-center justify-between overflow-clip relative shrink-0 w-full" data-node-id="289:332" data-name="Toggle / Weekly summary email">
                  <div className="[word-break:break-word] content-stretch flex flex-col items-start leading-[normal] not-italic overflow-clip relative shrink-0 whitespace-nowrap" data-node-id="289:333" data-name="t">
                    <p className="font-['Inter:Medium'] font-medium relative shrink-0 text-[#1f2a24] text-[28px]" data-node-id="289:334">
                      Weekly summary email
                    </p>
                    <p className="font-['Inter:Regular'] font-normal relative shrink-0 text-[#5b6b62] text-[25px]" data-node-id="289:335">
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
  WebIdentityId14ProfileSupNimal3840X2160 as default
};
