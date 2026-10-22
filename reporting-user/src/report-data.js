export const statuses=['Submitted','In review','Verified','Flagged','Correction requested','Referred'];
export const divisions=[
  {id:'DIV-001',name:'North Ridge',estate:'Highland',counts:[5,0,0,1,0,0],recent:[1,0,0,0,0,0],disease:'Blister blight (tie)',recentDisease:'Blister blight',confirmed:0},
  {id:'DIV-002',name:'Central Terrace',estate:'Highland',counts:[0,3,1,0,0,2],recent:[0,0,0,0,0,0],disease:'Grey blight (tie)',confirmed:0},
  {id:'DIV-003',name:'Lower Slope',estate:'Highland',counts:[0,1,2,2,0,1],recent:[0,0,0,0,0,0],disease:'Brown blight (tie)',confirmed:1},
  {id:'DIV-004',name:'Riverbank',estate:'Riverbend',counts:[3,0,0,2,0,0],recent:[0,0,0,0,0,0],disease:'Algal leaf spot',confirmed:0},
  {id:'DIV-005',name:'East Hills',estate:'Riverbend',counts:[0,1,1,0,2,1],recent:[0,1,0,0,0,0],disease:'Blister blight',recentDisease:'Grey blight',confirmed:0},
  {id:'DIV-006',name:'West Terrace',estate:'Riverbend',counts:[0,1,1,1,0,2],recent:[0,1,1,0,0,0],disease:'Grey blight',recentDisease:'Blister blight (tie)',confirmed:2},
];
export const defaultFilters={estate:'all',division:'all',period:'30',statuses:[...statuses],measure:'suspected'};
export function reportRows(filters) {
  return divisions.filter(d=>(filters.estate==='all'||d.estate===filters.estate)&&(filters.division==='all'||d.id===filters.division)).map(d=>({...d,values:filters.period==='7'?d.recent:d.counts,total:(filters.period==='7'?d.recent:d.counts).reduce((a,b)=>a+b,0),disease:filters.period==='7'?(d.recentDisease||'—'):d.disease,confirmed:filters.period==='7'?0:d.confirmed}));
}
export function readFilters(){try{const v=JSON.parse(localStorage.getItem('tealeaf-reporting-filters'));if(v&&['all','Highland','Riverbend'].includes(v.estate)&&['7','30'].includes(v.period)&&['suspected','confirmed','both'].includes(v.measure)&&Array.isArray(v.statuses)&&v.statuses.every(s=>statuses.includes(s))&&(v.division==='all'||divisions.some(d=>d.id===v.division&&d.estate===v.estate)))return v;}catch{}return {...defaultFilters,statuses:[...statuses]};}
