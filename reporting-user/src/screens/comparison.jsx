import React, { useState } from 'react';
import ReportingLayout from '../components/ReportingLayout';
import { cardClass, ReportHeader, ReportButton, ReportChart } from '../components/ReportingUI';
export default function Comparison() {
  const [showWarning,setShowWarning]=useState(true);
  return <ReportingLayout active="Suspected vs Confirmed" title="Suspected vs Confirmed">
    <ReportHeader title="Suspected vs Confirmed Disease" subtitle="Suspected (field) and confirmed (expert) counts · Data as of 21 Oct 2026 · 10:00 (UTC+05:30)">
      <ReportButton icon="e9abc.svg" data-name="Button / secondary / Filters">Filters</ReportButton><ReportButton icon="2385a.svg" data-name="Button / secondary / Export">Export</ReportButton>
    </ReportHeader>
    {showWarning&&<div className="flex items-center gap-[20px] bg-[#fff1d6] rounded-[20px] px-[32px] py-[24px] w-full text-[27px] text-[#7a4f00]"><img src="/assets/d91f1.svg" alt=""/><p className="flex-1">Confirmed diagnoses are few and may lag behind field reports. Suspected and confirmed counts are separate measures.</p><button aria-label="Dismiss comparison notice" onClick={()=>setShowWarning(false)}><img src="/assets/6f062.svg" alt=""/></button></div>}
    <div className="flex flex-1 min-h-0 gap-[40px] w-full">
      <section className={`${cardClass} flex-1 min-w-0`}><h2 className="text-[32px] font-semibold mb-[32px]">Weekly counts</h2><ReportChart max={15} height={600} labels={['28 Sep','05 Oct','12 Oct','19 Oct']} series={[{name:'Suspected (field)',color:'#2e7d32',values:[11,12,9,1]},{name:'Confirmed (expert)',color:'#1a5c9e',values:[0,2,1,0]}]}/></section>
      <section className={`${cardClass} w-[1240px] shrink-0`}><h2 className="text-[32px] font-semibold mb-[32px]">Confirmed diagnoses</h2>
        <table className="report-table text-[27px]" aria-label="Confirmed diagnoses"><thead><tr>{['Diagnosis','Case','Disease','Date'].map(h=><th key={h}>{h}</th>)}</tr></thead><tbody>{[['DIAG-042','CASE-042','Grey blight','05 Oct 2026'],['DIAG-006','CASE-006','Grey blight','07 Oct 2026'],['DIAG-030','CASE-030','Grey blight','12 Oct 2026']].map(row=><tr key={row[0]}>{row.map((v,i)=><td key={i}>{v}</td>)}</tr>)}</tbody></table>
        <dl className="mt-[40px] grid gap-[32px] text-[25px]"><div><dt className="text-[#5b6b62]">Awaiting diagnosis</dt><dd className="text-[28px] font-semibold mt-[6px]">3</dd><p className="text-[22px] text-[#5b6b62] mt-[10px]">Awaiting cases</p></div><div><dt className="text-[#5b6b62]">Referral not yet linked to a case (REF-999)</dt><dd className="text-[28px] font-semibold mt-[6px]">1</dd></div></dl>
      </section>
    </div>
  </ReportingLayout>;
}
