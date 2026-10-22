import React,{useState} from 'react';
import ReportingLayout from '../components/ReportingLayout';
import {cardClass,ReportHeader,ReportButton,ReportChart} from '../components/ReportingUI';
import {statuses,divisions,defaultFilters,reportRows,readFilters} from '../report-data';
const periodLabels={'30':'Last 30 days · 22 Sep – 21 Oct','7':'Last 7 days · 15 Oct – 21 Oct'};
export default function ReportingFilters(){
  const [applied,setApplied]=useState(readFilters);
  const [draft,setDraft]=useState(()=>({...applied,statuses:[...applied.statuses]}));
  const [notice,setNotice]=useState('');
  const rows=reportRows(applied),total=rows.reduce((sum,r)=>sum+r.total,0);
  function update(key,value){setDraft(v=>({...v,[key]:value,...(key==='estate'?{division:'all'}:{})}));setNotice('');}
  function apply(event){event?.preventDefault();const next={...draft,statuses:[...draft.statuses]};setApplied(next);localStorage.setItem('tealeaf-reporting-filters',JSON.stringify(next));setNotice('Filters applied');}
  function reset(){const next={...defaultFilters,statuses:[...statuses]};setDraft(next);setApplied(next);localStorage.removeItem('tealeaf-reporting-filters');setNotice('Filters reset');}
  const labels=[applied.estate==='all'?'All my estates (2)':applied.estate,applied.division==='all'?'All divisions':divisions.find(d=>d.id===applied.division)?.name,periodLabels[applied.period],...applied.statuses,applied.measure==='suspected'?'Suspected (field)':applied.measure==='confirmed'?'Confirmed (expert)':'Show both separately'];
  return <ReportingLayout active="Reporting Filters" title="Reporting Filters">
    <ReportHeader title="Reporting Filters" subtitle="Choose scope, period and measures for your report."><ReportButton onClick={reset}>Reset</ReportButton><ReportButton primary icon="e3be9.svg" onClick={apply}>Apply filters</ReportButton></ReportHeader>
    <div className="flex gap-[40px] flex-1 min-h-0 w-full">
      <form onSubmit={apply} className={`${cardClass} w-[1120px] shrink-0 flex flex-col gap-[32px]`}>
        <h2 className="text-[32px] font-semibold">Filters</h2>
        <label className="report-field">Estate<select aria-label="Estate" value={draft.estate} onChange={e=>update('estate',e.target.value)}><option value="all">All my estates (2)</option><option>Highland</option><option>Riverbend</option></select></label>
        <label className="report-field">Division<select aria-label="Division" disabled={draft.estate==='all'} value={draft.division} onChange={e=>update('division',e.target.value)}><option value="all">{draft.estate==='all'?'All divisions · choose one estate first':'All divisions'}</option>{divisions.filter(d=>d.estate===draft.estate).map(d=><option key={d.id} value={d.id}>{d.name} ({d.id})</option>)}</select></label>
        <label className="report-field">Period<select aria-label="Period" value={draft.period} onChange={e=>update('period',e.target.value)}>{Object.entries(periodLabels).map(([value,label])=><option key={value} value={value}>{label}</option>)}</select></label>
        <fieldset><legend className="text-[25px] font-medium mb-[20px]">Review status</legend><div className="grid grid-cols-2 gap-y-[24px] gap-x-[12px]">{statuses.map(status=><label className="flex items-center gap-[20px] text-[27px]" key={status}><input className="w-[40px] h-[40px] accent-[#2e7d32]" type="checkbox" checked={draft.statuses.includes(status)} onChange={e=>update('statuses',e.target.checked?[...draft.statuses,status]:draft.statuses.filter(s=>s!==status))}/>{status}</label>)}</div></fieldset>
        <fieldset><legend className="text-[25px] font-medium mb-[20px]">Disease measure</legend><div className="flex flex-col gap-[24px]">{[['suspected','Suspected (field)'],['confirmed','Confirmed (expert)'],['both','Show both separately']].map(([value,label])=><label key={value} className="flex gap-[20px] items-center text-[27px]"><input className="w-[40px] h-[40px] accent-[#2e7d32]" type="radio" name="measure" value={value} checked={draft.measure===value} onChange={()=>update('measure',value)}/>{label}</label>)}</div></fieldset>
        <p role="status" className="text-[25px] text-[#1f5a2e] min-h-[32px]">{notice}</p>
      </form>
      <div className="flex-1 min-w-0 flex flex-col gap-[40px]">
        <div className="flex flex-wrap gap-[20px] items-center text-[25px]" aria-label="Applied filters"><strong>Active:</strong>{labels.map((label,i)=><span key={i} className="bg-[#e3f2da] text-[#1f5a2e] rounded-[30px] px-[20px] py-[10px]">{label}</span>)}</div>
        <section className={`${cardClass} flex-1 min-h-0 overflow-auto`} aria-label="Report preview"><h2 className="text-[32px] font-semibold mb-[24px]">Report preview</h2><p className="text-[24px] text-[#5b6b62] mb-[24px]">Observations captured, by division · selected period · y-axis = number of observations</p>
          {total===0?<div className="p-[50px] bg-[#f4f7f3] rounded-[20px]"><h3 className="text-[34px] font-semibold">No observations in this selection</h3><p className="text-[27px] mt-[16px]">The selected division has no observations captured in the selected period. Change the period or division in the filters to see data.</p></div>:<>
            <ReportChart labels={rows.map(d=>d.name)} series={[{name:'Observations',color:'#2e7d32',values:rows.map(d=>d.total)}]}/>
            <div className="overflow-x-auto mt-[32px]"><table className="report-table report-preview-table" aria-label="Filtered observations"><thead><tr><th scope="col">Division</th><th scope="col">Estate</th><th scope="col">Total</th>{statuses.map(s=>applied.statuses.includes(s)&&<th scope="col" key={s}>{s}</th>)}{applied.measure!=='confirmed'&&<th scope="col">Suspected disease</th>}{applied.measure!=='suspected'&&<th scope="col">Expert-confirmed</th>}</tr></thead><tbody>{rows.map(r=><tr key={r.id}><td>{r.name}<br/>{r.id}</td><td>{r.estate}</td><td>{r.total}</td>{statuses.map((s,i)=>applied.statuses.includes(s)&&<td key={s}>{r.values[i]}</td>)}{applied.measure!=='confirmed'&&<td>{r.disease}</td>}{applied.measure!=='suspected'&&<td>{r.confirmed}</td>}</tr>)}</tbody></table></div>
          </>}
          <p className="text-[22px] leading-normal text-[#5b6b62] mt-[32px]">Counts are observations captured in the selected period, grouped by their current review status. The status checkboxes show or hide columns; TOTAL is the sum of all six statuses. Suspected disease is field reported; confirmed counts are expert diagnoses. Source: fixture snapshot 21 Oct 2026 · 10:00 (UTC+05:30).</p>
        </section>
      </div>
    </div>
  </ReportingLayout>;
}
