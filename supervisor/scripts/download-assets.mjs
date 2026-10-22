import { readFile, mkdir, writeFile, stat } from 'node:fs/promises';
const assets={...JSON.parse(await readFile(new URL('./assets.json',import.meta.url),'utf8')),...JSON.parse(await readFile(new URL('./assets-new.json',import.meta.url),'utf8').catch(()=>'{}')),...JSON.parse(await readFile(new URL('./assets-extra.json',import.meta.url),'utf8').catch(()=>'{}'))};
await mkdir('public/assets',{recursive:true});
Object.assign(assets,JSON.parse(await readFile(new URL('./assets-final.json',import.meta.url),'utf8').catch(()=>'{}')));
const queue=Object.entries(assets);let failed=[];
async function worker(){while(queue.length){const [file,url]=queue.shift();try{const existing=await stat('public/assets/'+file).catch(()=>null);if(existing?.size)continue;const response=await fetch(url);if(!response.ok)throw Error(response.status);const data=Buffer.from(await response.arrayBuffer());if(!data.length)throw Error('Empty asset');await writeFile('public/assets/'+file,data);}catch(e){failed.push(file+': '+e.message);}}}
await Promise.all(Array.from({length:8},worker));
console.log(JSON.stringify({total:Object.keys(assets).length,failed}));if(failed.length)process.exitCode=1;
