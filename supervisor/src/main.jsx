import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {createRoot} from 'react-dom/client';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import {navigation, screens, pending} from './routes';
import {designScreens,nodeRoutes,overlayScreens} from './design-registry';
import prototypeLinks from './prototype-links.json';
import './styles.css';

Object.assign(screens,designScreens);

const textOf = element => typeof element === 'string' || typeof element === 'number' ? String(element) : Array.isArray(element) ? element.map(textOf).join(' ') : React.isValidElement(element) ? textOf(element.props.children) : '';
const routeNow=()=>location.hash.slice(1).split('?')[0] || '/dashboard';
const readStorage=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}};
const findNamed=(element,name)=>{if(!React.isValidElement(element))return null;if(element.props['data-name']===name)return element;for(const child of React.Children.toArray(element.props.children)){const found=findNamed(child,name);if(found)return found;}return null;};

function App(){
  const [route,setRoute]=useState(routeNow);
  const [size,setSize]=useState({width:innerWidth,height:innerHeight});
  const [collapsed,setCollapsed]=useState(false);
  const [tab,setTab]=useState('All');
  const [dialog,setDialog]=useState(null);
  const [query,setQuery]=useState('');
  const [toast,setToast]=useState('');
  const [dismissed,setDismissed]=useState(false);
  const [overlay,setOverlay]=useState(null);
  const [values,setValues]=useState({});
  const [filters,setFilters]=useState({});
  const [preferences,setPreferences]=useState(()=>readStorage('tealeaf-notifications',{}));
  const [form,setForm]=useState(()=>readStorage('tealeaf-assignment-draft',{
    title:'Inspect East Hills block C for suspected blight',
    instructions:'Inspect the reported leaf discolouration in East Hills block C. Photograph affected leaves from three angles and submit one observation per distinct area. Record location at division level only.',
    due:'16 Oct 2026', division:'DIV-005 · East Hills', priority:'High',
  }));
  const host=useRef(null),closeButton=useRef(null);
  const scale=Math.max(size.width,1280)/3840;
  const canvasHeight=Math.max(2160,size.height/scale);
  const go=path=>{if(routeNow()===path)setRoute(path);else location.hash=path;setDialog(null);setOverlay(null);};
  const notify=message=>setToast(message);
  useEffect(()=>{const hash=()=>{setRoute(routeNow());setTab('All');setDismissed(false);setFilters({});setOverlay(null);window.scrollTo(0,0);};const resize=()=>setSize({width:innerWidth,height:innerHeight});window.addEventListener('hashchange',hash);window.addEventListener('resize',resize);return()=>{window.removeEventListener('hashchange',hash);window.removeEventListener('resize',resize);};},[]);
  useEffect(()=>{if(toast){const timer=setTimeout(()=>setToast(''),3500);return()=>clearTimeout(timer);}},[toast]);
  useEffect(()=>{if(route==='/screen/41-690'){const timer=setTimeout(()=>go('/dashboard'),700);return()=>clearTimeout(timer);}},[route]);
  useEffect(()=>{if(overlay&&(overlayScreens[overlay]?.name.includes('Toast')||overlay==='66:72')){const timer=setTimeout(()=>setOverlay(null),2600);return()=>clearTimeout(timer);}},[overlay]);
  useEffect(()=>{if(dialog)closeButton.current?.focus();const escape=e=>{if(e.key==='Escape'){setDialog(null);setOverlay(null);}};window.addEventListener('keydown',escape);return()=>window.removeEventListener('keydown',escape);},[dialog]);
  useLayoutEffect(()=>{const compact=collapsed||route==='/dashboard/collapsed';const main=host.current?.querySelector('[data-name="Main"]');const sidebar=host.current?.querySelector('[data-name="Sidebar"]');if(main){main.style.height=canvasHeight+'px';main.style.left=compact?'168px':'496px';main.style.width=compact?'3672px':'3344px';}if(sidebar){sidebar.style.height=canvasHeight+'px';sidebar.style.width=compact?'168px':'496px';}},[route,collapsed,canvasHeight,tab]);
  const blocked=message=>setDialog({type:'blocked',title:message,body:'This screen could not be retrieved because the linked Figma Starter plan reached its MCP tool limit. Its design must be retrieved before this screen can be implemented accurately.'});
  const updateForm=(key,value)=>setForm(current=>({...current,[key]:value}));

  function follow(target){
    if(overlayScreens[target]){setOverlay(target);return;}
    if(nodeRoutes[target]){go(nodeRoutes[target]);return;}
    if(['22:2','29:2'].includes(target)){notify('Choose Supervisor to explore this portal.');return;}
    notify('This journey is not included in the Figma prototype.');
  }
  function chooseFilter(label){
    const kind=['47:1032','51:948'].includes(overlay)?'division':['51:534','51:982'].includes(overlay)?'disease':['51:553','51:1001','51:591'].includes(overlay)?'date':overlay==='51:569'?'type':'search';
    const value=/All|Clear search|Last 30 days/.test(label)?'':label.replace(/^(Division|Disease|Date|Captured|Decision type):\s*/, '');
    setFilters(current=>({...current,[kind]:value}));setOverlay(null);
  }
  function perform(id,name,label){
    if(name==='Close'||name==='Click-outside to close'||name==='Scrim')return()=>setOverlay(null);
    if(name.startsWith('Option / '))return()=>chooseFilter(label);
    if(label==='Reset filters')return()=>{setFilters({});notify('Filters reset.');};
    if(label==='Export')return()=>{
      const rows=[...host.current.querySelectorAll('[data-name="Header row"],[data-name^="Row "]')].map(row=>[...row.children].map(cell=>'"'+cell.textContent.trim().replaceAll('"','""')+'"').join(','));
      const url=URL.createObjectURL(new Blob([rows.join('\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='tealeaf-'+route.split('/')[1]+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);notify('Export downloaded.');
    };
    if(label==='Refresh'||label==='Refresh status'){const link=prototypeLinks[id]?.[0];return()=>{if(link&&nodeRoutes[link[1]])follow(link[1]);else notify('Refreshed.');};}
    if(label==='Update password')return()=>{const password=values['/profile:New password']||'',confirm=values['/profile:Confirm password']||'';if(password.length<12)return notify('Use at least 12 characters for your new password.');if(password!==confirm)return notify('The passwords do not match.');notify('Password changes are unavailable in this demonstration.');};
    if(label==='Assign task'||label==='Save as draft')return action(name,label);
    if(name.startsWith('Button /')&&['Send correction request','Send referral','Confirm rejection','Record decision','Flag observation'].includes(label)){
      const field=label==='Send correction request'?'Message to field worker':label==='Send referral'?'Referral note':label==='Confirm rejection'?'Message to field worker':label==='Flag observation'?'Explanation':'Reason';
      return()=>{const input=[...host.current.querySelectorAll('input,textarea')].find(input=>input.getAttribute('aria-label')===field);const value=values[route+':'+field]??input?.value;if(value!==undefined&&!value.trim())return notify('Complete the required '+field.toLowerCase()+'.');const link=prototypeLinks[id]?.[0];if(link)follow(link[1]);};
    }
    if(name==='Dismiss banner')return action(name,label);
    if(name.startsWith('Button /')&&name.includes('disabled'))return null;
    const link=prototypeLinks[id]?.[0];
    if(link&&(nodeRoutes[link[1]]||overlayScreens[link[1]]||['22:2','29:2'].includes(link[1])))return()=>follow(link[1]);
    if(label==='Cancel'&&overlay)return()=>setOverlay(null);
    if(label==='Save changes'){return()=>{localStorage.setItem('tealeaf-assignment-draft',JSON.stringify(form));go('/assignments/assigned');notify('Changes saved.');};}
    return action(name,label);
  }

  function action(name,label){
    if(name.startsWith('Nav / '))return()=>go(navigation[name.slice(6)]);
    if(name==='Brand')return()=>go('/dashboard');
    if(name==='User card'||name==='Profile menu trigger')return()=>go('/profile');
    if(name==='Sidebar collapse toggle')return()=>setCollapsed(v=>!v);
    if(name==='Search'||name==='Search hit area')return()=>{setQuery('');setDialog({type:'search',title:'Search observations, cases, users'});};
    if(name==='bell')return()=>setOverlay('47:659');
    if(name==='Dismiss banner')return()=>setDismissed(true);
    if(name.startsWith('Tab / '))return()=>{
      const next=name.slice(6);
      if(route.startsWith('/assignments'))setTab(next);
      else if(next==='Overview')go('/evidence/observation');
      else if(next==='Evidence')go('/evidence');
      else if(next==='Metadata')go('/evidence/metadata');
      else if(next==='Revisions')go('/evidence/revision');
    };
    if(name.startsWith('Row / ASG-'))return()=>go(name.endsWith('ASG-001')?'/assignments/submitted':'/assignments/'+name.slice(6));
    if(name==='Division chip')return()=>updateForm('division',label);
    if(name==='Priority chip')return()=>updateForm('priority',label);
    if(name.includes('Button /')){
      if(label==='Switch Demo Role')return()=>go('/demo');
      if(label==='Open review queue'||label==='Go to review')return()=>go('/review');
      if(label==='Fieldwork Assignments')return()=>go('/assignments');
      if(label==='Create assignment')return()=>go('/assignments/new');
      if(label==='Back to list'||label==='Cancel')return()=>go('/assignments');
      if(label==='Assign task')return()=>{if(!form.title.trim()||!form.instructions.trim()||!form.due)return notify('Enter a title, instructions and due date.');localStorage.setItem('tealeaf-assignment',JSON.stringify({...form,status:'Assigned'}));go('/assignments/assigned');notify('Assignment saved in this browser.');};
      if(label==='Save as draft')return()=>{localStorage.setItem('tealeaf-assignment-draft',JSON.stringify(form));notify('Draft saved in this browser.');};
      if(label==='Reset demo state')return()=>{localStorage.removeItem('tealeaf-assignment');localStorage.removeItem('tealeaf-assignment-draft');setTab('All');notify('Demo state reset.');};
      if(label.includes('Field Worker starts'))return()=>{localStorage.setItem('tealeaf-assignment-status','In progress');go('/assignments/in-progress');};
      if(label.includes('mobile submission'))return()=>go('/assignments/submitted');
      if(label==='Edit / reassign')return()=>go('/assignments/edit');
      if(label==='Cancel assignment')return()=>go(route==='/assignments/cancel'?'/assignments/cancelled':'/assignments/cancel');
      if(label==='Open evidence')return()=>go('/evidence');
      if(label==='Compare revisions')return()=>go('/evidence/revision');
      if(label==='Back to history')return()=>go('/evidence/observation');
      if(label==='Copy coordinates')return async()=>{try{await navigator.clipboard.writeText('6.980, 80.635');notify('Coordinates copied.');}catch{notify('Coordinates: 6.980, 80.635');}};
      if(label==='Open original')return()=>{const picture=host.current?.querySelector('[data-name="Main image"]');const asset=picture?.querySelector('img')||host.current?.querySelector('[data-name="Image canvas"] img');if(asset)window.open(asset.src,'_blank','noopener');else blocked('Original evidence image');};
    }
    if(label==='View queue')return()=>go('/review');
    if(route==='/dashboard'&&/^Row \d/.test(name))return()=>go('/review');
    if(route==='/dashboard'&&/COR-|QUA-|OBS-024/.test(label)&&name.includes('Attention'))return()=>go(label.includes('COR-')?'/corrections':label.includes('QUA-')?'/quarantine':'/review');
    return null;
  }

  function hydrate(element,fieldName='',insideInput=false,contextId=''){
    if(!React.isValidElement(element))return element;
    if(typeof element.type==='function'&&element.type.name==='ControlCheckbox'){
      const key=route+':checkbox:'+contextId,checked=values[key]??element.props.state??false;
      const rendered=element.type({...element.props,state:checked});
      return React.cloneElement(rendered,{role:'checkbox','aria-label':fieldName||'Select correction option','aria-checked':checked,onClick:e=>{e.stopPropagation();setValues(v=>({...v,[key]:!checked}));}});
    }
    const p=element.props,name=p['data-name']||'',id=p['data-node-id'],label=textOf(p.children).trim().replace(/\s+/g,' ');
    if(dismissed&&name==='Banner / ok')return null;
    if(name==='Content'&&pending[route])return <div key={id} className="pending-content"><h1>{pending[route]}</h1><div className="pending-card"><p>This screen is awaiting Figma access.</p><p>The Figma Starter plan reached its MCP tool limit before this design could be retrieved.</p><a href="#/dashboard">Return to Supervisor Dashboard</a></div></div>;
    if(name==='Breadcrumbs'&&pending[route])return <div key={id} className="breadcrumb">Review <span>›</span> <strong>{pending[route]}</strong></div>;
    let props={key:id||undefined};
    const click=perform(id,name,label);
    if(click){props.onClick=e=>{e.preventDefault();e.stopPropagation();click();};props['aria-label']=name.startsWith('Tab / ')?name.slice(6).replace(/\s+\d+$/,''):label||name;props.tabIndex=0;props.onKeyDown=e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();e.stopPropagation();click();}};if(element.type!=='button'&&element.type!=='a')props.role='button';}
    if(element.type==='a')props.href='#'+(nodeRoutes[prototypeLinks[id]?.[0]?.[1]]||(name.startsWith('Nav / ')?navigation[name.slice(6)]||route:route));
    if(name.startsWith('Nav / '))props['aria-current']=navigation[name.slice(6)]===route?'page':undefined;
    if(name.startsWith('Nav / ')&&pending[route])props.className=(p.className||'').replace('bg-[#2a5c38]','')+(navigation[name.slice(6)]===route?' active-nav':'');
    if(name.startsWith('Tab / ')){props.role='tab';props['aria-selected']=route.startsWith('/assignments')?tab===name.slice(6):undefined;props.className=p.className+(tab===name.slice(6)?' selected-tab':'');}
    if(name==='Tab / All'&&tab!=='All')props.className=p.className+' inactive-tab';
    if(name.startsWith('Row / ASG-')&&tab!=='All'){
      const status=React.Children.toArray(p.children).find(child=>React.isValidElement(child)&&['Submitted','Assigned','In progress','Draft','Completed','Reassigned','Cancelled'].some(s=>child.props['data-name']==='Badge / '+s));
      if(textOf(status).trim()!==tab)return null;
    }
    if(name==='Division chip'||name==='Priority chip'){const selected=name==='Division chip'?form.division===label:form.priority===label;props['aria-pressed']=selected;props['data-option']=label;props.className=p.className+' option-chip'+(selected?' chosen':' unchosen');}
    if(route==='/assignments/new'&&['144:240','144:243','144:253'].includes(id)){
      const key=id==='144:240'?'title':id==='144:243'?'instructions':'due';
      return React.createElement(key==='instructions'?'textarea':'input',{key:id,className:p.className+' form-input',value:form[key],type:'text','aria-label':key,onChange:e=>updateForm(key,e.target.value),required:true});
    }
    if(/^Row \d/.test(name)&&Object.values(filters).some(Boolean)){
      const lower=label.toLowerCase();if(Object.entries(filters).some(([kind,value])=>value&&kind!=='date'&&!lower.includes(value.toLowerCase())))return null;
      if(filters.date==='Last 7 days'){const match=label.match(/(\d{2}) Oct 2026/);if(match&&Number(match[1])<14)return null;}
    }
    if(element.type==='p'&&/^(Division|Disease|Captured|Date|Decision type):/.test(label)){
      const kind=label.startsWith('Division')?'division':label.startsWith('Disease')?'disease':label.startsWith('Decision')?'type':'date';
      if(filters[kind])return React.cloneElement(element,{...props},label.split(':')[0]+': '+filters[kind]);
    }
    if(name.startsWith('Toggle / ')){
      const enabled=preferences[name]??!name.includes('Weekly');
      const toggle=()=>{const next={...preferences,[name]:!enabled};setPreferences(next);localStorage.setItem('tealeaf-notifications',JSON.stringify(next));notify('Notification preference saved.');};
      const children=React.Children.toArray(p.children);
      return React.cloneElement(element,{...props},hydrate(children[0]),<button key="toggle" className={'notification-toggle'+(enabled?' on':'')} role="switch" aria-checked={enabled} aria-label={name.slice(9)} onClick={toggle}><span/></button>);
    }
    if(element.type==='p'&&insideInput&&fieldName){
      const key=route+':'+fieldName;
      const readonly=/^(Email|Role|Requested by|Requested revision number|Review version)$/.test(fieldName);
      const multiline=/note|Message|Explanation|Instructions/i.test(fieldName);
      const password=/password/i.test(fieldName);
      const placeholder=password||/Minimum|Repeat|Explain|Enter |Optional|Select /i.test(label);
      return React.createElement(multiline?'textarea':'input',{key:id,className:p.className+' native-input',style:{fontFamily:'Inter, sans-serif'},'aria-label':fieldName,readOnly:readonly,type:password?'password':'text',value:values[key]??(placeholder?'':label),placeholder:placeholder?label:undefined,onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),onChange:e=>setValues(current=>({...current,[key]:e.target.value}))});
    }
    if(name==='Checkbox'){
      const checked=values[id]??true;props.role='checkbox';props['aria-checked']=checked;props.tabIndex=0;props.onClick=e=>{e.stopPropagation();setValues(v=>({...v,[id]:!checked}));};if(!checked)props.style={background:'white',border:'2px solid #b8c4bc'};
    }
    if(name.startsWith('Radio / ')){
      const selected=(values[route+':decision']??'Release')===name.slice(8);
      const choose=()=>setValues(v=>({...v,[route+':decision']:name.slice(8)}));
      const selectedRing=findNamed(Screen(),'ring selected');
      const children=React.Children.toArray(p.children).filter(child=>child.props?.['data-name']!=='selected background').map(child=>{
        if(child.props?.['data-name']==='ring')return React.cloneElement(child,{key:'ring'},React.Children.toArray(child.props.children).filter(c=>c.props?.['data-name']!=='ring selected'),selected&&selectedRing);
        return hydrate(child);
      });
      return React.cloneElement(element,{...props,role:'radio','aria-label':name.slice(8),'aria-checked':selected,style:{borderWidth:selected?3:2,borderColor:selected?'#2e7d32':'#e1e8e2',background:selected?'#f1f7ec':'white'},onClick:choose},children);
    }
    // All prototype screens use the same design font; font weight is retained.
    if(p.className?.includes("font-['Inter:"))props.style={...p.style,fontFamily:'Inter, sans-serif'};
    const children=React.Children.map(p.children,child=>hydrate(child,name.startsWith('Field / ')?name.slice(8):fieldName,name==='Input'||insideInput,id||contextId));
    return React.cloneElement(element,props,children);
  }
  const Screen=screens[route]||screens['/dashboard'];
  return <>
    <div className="viewport" style={{width:3840*scale,height:canvasHeight*scale}}>
      <div ref={host} className={'design-canvas'+(collapsed?' sidebar-collapsed':'')} style={{width:3840,height:canvasHeight,transform:`scale(${scale})`}}>{hydrate(Screen())}{overlay&&overlayScreens[overlay]&&<div className="design-overlay" role="dialog" aria-modal="true" aria-label="Portal dialog">{hydrate(overlayScreens[overlay]())}</div>}</div>
    </div>
    {toast&&<div className="toast" role="status">{toast}</div>}
    {dialog&&<div className="modal-backdrop" onClick={()=>setDialog(null)}><section role="dialog" aria-modal="true" aria-labelledby="dialog-title" className="modal" onClick={e=>e.stopPropagation()}><button ref={closeButton} className="close-dialog" onClick={()=>setDialog(null)} aria-label="Close">×</button><h2 id="dialog-title">{dialog.title}</h2>{dialog.type==='search'?<><input autoFocus aria-label="Search" placeholder="Search observations, cases, users" value={query} onChange={e=>setQuery(e.target.value)}/><div className="search-results">{Object.entries(navigation).filter(([label])=>label.toLowerCase().includes(query.toLowerCase())).map(([label,path])=><a key={path} href={'#'+path} onClick={()=>setDialog(null)}>{label}<span>→</span></a>)}{query.toUpperCase().startsWith('OBS-')&&<a href="#/evidence/observation" onClick={()=>setDialog(null)}>Observation evidence →</a>}</div></>:<p>{dialog.body}</p>}</section></div>}
  </>;
}
createRoot(document.getElementById('root')).render(<App/>);
