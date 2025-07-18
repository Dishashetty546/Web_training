const datas = [
    { name: "ABC", profession: "SDE" },
    { name: "DEF", profession: "SDE I" }
];

function getData() {
    setTimeout(() => {
        let output = "";
        datas.forEach((data) => {
            output += `<li>${data.name}</li>`;
        });
        document.body.innerHTML = `<h1>Employee Record:</h1><ul>${output}</ul>`;
    }, 2000);
}

function createData(newData) {
   return new Promise((resolve,reject)=>{
     setTimeout(() => {
        datas.push(newData);
        let error= false;
        if(!error)
        {
            resolve();
        }
        else{
            reject("Some error Occured.....");
        }
    }, 5000);
   });
}

// createData({ name: "Disha", profession: "SDE II" }).then(getData).catch(err=> console.log(err))
async function start(){
    await createData({name:"Ajay", profession:"SDE"})
    getData();
}
start();