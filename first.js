console.log("I am learning node.js");
const fs= require('fs');
fs.writeFile('output.txt','Writing file',(err)=>{
    if(err)console.log(`error occured-->${err}`);
    else console.log('File written successfully');
})