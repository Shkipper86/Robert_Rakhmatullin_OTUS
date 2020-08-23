const fs = require('fs');
let path = process.argv[2];;
let pathString = path;
let tempPath;
function recu(){
  fs.readdir(pathString, (err, files) =>{ 
    try{
    files.forEach(file=> {
      tempPath=pathString;      
      fs.stat(`${pathString}/${file}`, (err, stats)=>{
        if (err){

        }
        else if (stats.isDirectory()){ 
          pathString=`${pathString}/${file}`; 
          console.log(pathString);
          recu();
        }else{
          console.log(`${tempPath}/${file}`);
        }
      })     
    })
  }
  catch (err){

  }  
})
}
recu();