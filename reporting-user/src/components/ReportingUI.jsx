import React from 'react';
export const cardClass = 'bg-white border-2 border-[#e1e8e2] rounded-[28px] shadow-[0_4px_16px_#12331f14] px-[40px] py-[36px]';
export function ReportHeader({ title, subtitle, children }) {
  return <header className="flex items-center justify-between w-full shrink-0"><div><h1 className="text-[52px] font-bold leading-normal">{title}</h1><p className="text-[28px] text-[#5b6b62] mt-[8px]">{subtitle}</p></div><div className="flex gap-[20px]">{children}</div></header>;
}
export function ReportButton({ children, icon, primary=false, ...props }) {
  return <button {...props} className={`flex items-center justify-center gap-[12px] h-[76px] px-[28px] rounded-[16px] border-2 text-[26px] font-semibold ${primary?'bg-[#2e7d32] border-[#2e7d32] text-white':'bg-white border-[#b8c4bc] text-[#1f5a2e]'}`}>{icon&&<img src={'/assets/'+icon} alt=""/>}{children}</button>;
}
export function ReportChart({ labels, series, max=10, height=520 }) {
  return <div role="img" aria-label={series.map(s=>`${s.name}: ${s.values.map((v,i)=>`${labels[i]} ${v}`).join(', ')}`).join('; ')}>
    <div className="flex gap-[16px]">
      <div className="flex flex-col justify-between items-end text-[22px] text-[#5b6b62] w-[32px]" style={{height}}>{Array.from({length:6},(_,i)=><span key={i}>{max-i*max/5}</span>)}</div>
      <div className="flex-1"><div className="relative" style={{height}}>
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">{Array.from({length:6},(_,i)=><div key={i} className="w-full border-t-2 border-[#edf1ed]"/>)}</div>
        <div className="absolute inset-0 flex">{labels.map((label,i)=><div className="flex-1 flex items-end justify-center gap-[6px]" key={label}>{series.map(s=><div key={s.name} title={`${label}: ${s.name} ${s.values[i]}`} style={{height:`${s.values[i]/max*100}%`,background:s.color,width:series.length>1?68:80}} className="relative rounded-t-[6px]"/>)}</div>)}</div>
      </div><div className="flex mt-[12px]">{labels.map(label=><span key={label} className="flex-1 text-center text-[23px] text-[#5b6b62]">{label}</span>)}</div></div>
    </div>
    <div className="flex gap-[36px] mt-[32px] text-[25px]">{series.map(s=><span key={s.name} className="flex items-center gap-[12px]"><span className="w-[20px] h-[20px] rounded-full" style={{background:s.color}}/>{s.name}</span>)}</div>
  </div>;
}
