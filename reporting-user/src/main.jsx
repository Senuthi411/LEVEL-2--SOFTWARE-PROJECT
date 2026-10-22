import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import Dashboard from './screens/dashboard';
import Estates from './screens/estates';
import Divisions from './screens/divisions';
import Diseases from './screens/diseases';
import Bottlenecks from './screens/bottlenecks';
import Freshness from './screens/freshness';
import Empty from './screens/empty';
import Loading from './screens/loading';
import Collapsed from './screens/collapsed';
import Observations from './screens/observations';
import Comparison from './screens/comparison';
import ReportingFilters from './screens/filters';
import './style.css';

const navigation = [['Analytics Dashboard','dashboard'],['Estate Overview','estates'],['Division Overview','divisions'],['Observation Statistics','observations'],['Disease Distribution','diseases'],['Suspected vs Confirmed','comparison'],['Review Bottlenecks','bottlenecks'],['Reporting Filters','filters'],['Data Freshness','freshness']];
const screens = { dashboard: Dashboard, estates: Estates, divisions: Divisions, observations: Observations, comparison: Comparison, filters: ReportingFilters, diseases: Diseases, bottlenecks: Bottlenecks, freshness: Freshness, empty: Empty, loading: Loading, collapsed: Collapsed };
const unavailable = {profile:'Reporting User Profile',error:'Analytics error state'};
function App() {
  const [route,setRoute]=useState(location.hash.slice(1)||'dashboard');
  const [scale,setScale]=useState(window.innerWidth/3840);
  const [modal,setModal]=useState(null);
  const [query,setQuery]=useState('');
  const [message,setMessage]=useState('');
  const root=useRef(null);
  useEffect(()=>{ const resize=()=>setScale(window.innerWidth/3840); const hash=()=>{setRoute(location.hash.slice(1)||'dashboard');setModal(null);}; window.addEventListener('resize',resize);window.addEventListener('hashchange',hash); return ()=>{window.removeEventListener('resize',resize);window.removeEventListener('hashchange',hash);}; },[]);
  useEffect(()=>{if(!message)return;const timeout=setTimeout(()=>setMessage(''),3500);return ()=>clearTimeout(timeout);},[message]);
  useEffect(()=>{const close=e=>{if(e.key==='Escape')setModal(null);};window.addEventListener('keydown',close);return ()=>window.removeEventListener('keydown',close);},[]);
  function go(next){location.hash=next;}
  function exportReport(){
    const table=root.current.querySelector('table');
    if(table){
      const csv=[...table.rows].map(row=>[...row.cells].map(cell=>'"'+cell.innerText.replaceAll('"','""')+'"').join(',')).join('\r\n');
      const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));const link=document.createElement('a');link.href=url;link.download=`tealeaf-${route}.csv`;link.click();URL.revokeObjectURL(url);setMessage('Report exported');return;
    }
    const rows=[...root.current.querySelectorAll('[data-name="tr"], [data-name="Table row"], [data-name^="Row /"]')].map(row=>row.innerText.replaceAll('\n',','));
    const csv=['TeaLeaf Reporting User — '+route,'Demo snapshot,21 Oct 2026 10:00 UTC+05:30',...(rows.length?rows:[root.current.innerText.split('Content').at(-1)])].map(row=>'"'+row.replaceAll('"','""')+'"').join('\r\n');
    const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8;'}));const a=document.createElement('a');a.href=url;a.download=`tealeaf-${route}.csv`;a.click();URL.revokeObjectURL(url);setMessage('Report exported');
  }
  function click(e){
    const target=e.target.closest('[data-name]'); const chain=[];let el=target;while(el&&el!==root.current){if(el.dataset?.name)chain.push(el.dataset.name);el=el.parentElement;}
    const name=chain.join(' | ');
    const nav=navigation.find(([label])=>name.includes('Nav / '+label)); if(nav){e.preventDefault();go(nav[1]);return;}
    if(/Sidebar collapse toggle/.test(name)){go(route==='collapsed'?'dashboard':'collapsed');return;}
    if(/Sidebar expand toggle/.test(name)){go('dashboard');return;}
    if(/Dismiss banner/.test(name)){target.closest('[data-name^="Banner"]')?.remove();return;}
    if(/User card|Profile menu trigger/.test(name)){go('profile');return;}
    if(/Switch Demo Role/.test(name)){setModal('role');return;}
    if(/Search/.test(name)){setModal('search');return;}
    if(/bell/.test(name)){setModal('notifications');return;}
    if(/Button.*Filters/.test(name)){go('filters');return;}
    if(/Button.*Export/.test(name)){exportReport();return;}
    if(/Check again|Retry|Refresh/.test(name)){setMessage('Showing the supplied demo snapshot · 21 Oct 2026');return;}
    if(/Reset filters|Clear filters/.test(name)){go('dashboard');return;}
    if(/KPI \/ Total|Observations captured/.test(name)){go('observations');return;}
    if(/KPI \/ Verified|KPI \/ Awaiting/.test(name)){go('bottlenecks');return;}
    if(/Confirmed diagnoses/.test(name)){go('comparison');return;}
    if(/Suspected disease distribution/.test(name)){go('diseases');return;}
  }
  useEffect(()=>{root.current?.querySelectorAll('a:not([href])').forEach(a=>{a.href='#';a.onclick=e=>e.preventDefault();});root.current?.querySelectorAll('[data-name^="Nav /"]').forEach(a=>{const nav=navigation.find(([label])=>a.dataset.name==='Nav / '+label);if(nav){a.setAttribute('href','#'+nav[1]);a.setAttribute('aria-label',nav[0]);}});},[route]);
  const Screen=screens[route]||Dashboard;
  return <>
    <div style={{height:2160*scale,overflow:'hidden'}}><div ref={root} className="design-viewport" style={{transform:`scale(${scale})`}} onClick={click}><Screen/></div></div>
    {unavailable[route]&&<div className="overlay"><section className="dialog" role="dialog" aria-modal="true" aria-labelledby="blocked-title"><h2 id="blocked-title">{unavailable[route]}</h2><p>This screen could not be retrieved because the Figma Starter plan reached its tool limit. The original layout has not been recreated or guessed.</p><p className="mt-3">Provide a Figma export or restore MCP access to complete this screen accurately.</p><button onClick={()=>go('dashboard')}>Back to Analytics Dashboard</button></section></div>}
    {modal&&<div className="overlay" onClick={()=>setModal(null)}><section className="dialog" role="dialog" aria-modal="true" aria-label={modal} onClick={e=>e.stopPropagation()}>
      {modal==='search'?<><h2>Search reports and filters</h2><input autoFocus placeholder="Search reports and filters" value={query} onChange={e=>setQuery(e.target.value)}/>{navigation.filter(([label])=>label.toLowerCase().includes(query.toLowerCase())).map(([label,path])=><a key={path} href={'#'+path} onClick={()=>setModal(null)}>{label}</a>)}</>:modal==='notifications'?<><h2>Notifications</h2><p>Expert diagnoses dataset is delayed in the supplied demo snapshot.</p><a href="#freshness" onClick={()=>setModal(null)}>View Data Freshness</a></>:<><h2>Reporting User</h2><p>This implementation covers the Reporting User role. Other roles are outside the requested scope.</p></>}
      <button onClick={()=>setModal(null)}>Close</button>
    </section></div>}
    {message&&<div role="status" className="fixed bottom-6 right-6 rounded-xl bg-[#12351f] px-6 py-4 text-white shadow-lg">{message}</div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
