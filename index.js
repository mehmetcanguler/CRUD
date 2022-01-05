const fs= require('fs')

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}',(err)=>{
    if(err) console.log(err)
    console.log("dosya eklendi")
});
fs.readFile('employees.json',"utf8",(err,data)=>{
    if(err) console.log(err)
    console.log(data)
    console.log("veri okuma tamamlandı")
})

fs.unlink('employees.json',(err)=>{
    if(err) console.log(err)
    console.log("dosya silme tamamlandı")
})