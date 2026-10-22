import React from 'react';
const imgFrame = "/assets/654a0348-9f73-4b53-954a-961b8caa0570.svg";

export default function OverlayRefreshingLoading() {
  return (
    <div className="relative size-full" data-node-id="66:72" data-name="Overlay / Refreshing (loading)">
      <div className="absolute bg-[rgba(255,255,255,0.55)] h-[2160px] left-0 top-0 w-[3840px]" data-node-id="66:73" data-name="Scrim" />
      <div className="absolute bg-white border-2 border-[#e1e8e2] border-solid content-stretch flex gap-[24px] items-center left-[1737px] overflow-clip px-[48px] py-[36px] rounded-[28px] shadow-[0px_16px_48px_0px_rgba(13,31,20,0.22)] top-[1018px]" data-node-id="66:74" data-name="Loading card">
        <div className="relative shrink-0 size-[48px]" data-node-id="66:75" data-name="Frame">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
        </div>
        <p className="[word-break:break-word] font-['Inter:Semi_Bold'] font-semibold leading-[normal] not-italic relative shrink-0 text-[#1f2a24] text-[32px] whitespace-nowrap" data-node-id="66:77">
          Refreshing…
        </p>
      </div>
    </div>
  );
}
