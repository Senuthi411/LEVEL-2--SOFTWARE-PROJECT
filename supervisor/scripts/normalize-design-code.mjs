import {readdir,readFile,writeFile} from 'node:fs/promises';
import {transform} from 'esbuild';
for(const file of await readdir('src/screens')){
  const path='src/screens/'+file;let code=await readFile(path,'utf8');
  if(/^\s*(type|interface)\s+\w+/m.test(code)){
    const result=await transform(code,{loader:'tsx',jsx:'preserve',format:'esm'});
    code=result.code;console.log('Converted '+file+' to JavaScript');
  }
  if(!/import React\b/.test(code))code="import React from 'react';\n"+code;
  await writeFile(path,code);
}
