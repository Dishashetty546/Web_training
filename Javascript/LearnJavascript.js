// if(true)
// {
//     let x=2;
//     console.log("x:",x);
//     x=20;
//     console.log(x)
// }
// let x=45;

// const y=40;
// console.log(y);
// y=50;
// console.log(y);
// console.log(x);

// // -----------------------------------------------------------------------------------------------------------------------
// let num1 = 9007199254740991;
// console.log(typeof(num1))
 // -----------------------------------------------------------------------------------------------------------------------
// let v=10;
// let c= v>=10?"Disha":"Shetty";
// console.log(c);
//-------------------------------------------------------------------------------------------------------------------------------

// function marksSysten()
// {
//     let marks=20;
//     if(marks>=90)
//     {
//         console.log("Excellent")
//     }
//     else if(marks<=90 && marks>=50)
//     {
//         console.log("good")
//     }
//     else(marks<=50)
//     {
//         console.log("bad")
//     }
// }
// marksSysten();
//--------------------------------------------------------------------------------------------------------------------------------------------
// let c=10;
// switch(c)
// {
//     case 1: console.log("Case 1 : executed");
//     break;
//     case 2: console.log("case 2 : executed");
//     break;
//     default: console.log("ygghjfghjs");
//     break;
// }
//--------------------------------------------------------------------------------------------------------------------------------------------
// let num= [1,2,4,5,6,6]
// console.log(num);

// let num1=new Array(1,2,3,'yuhfjs')
// console.log(num1)
//------------------------------------------------------------------------------------------------------------------------------------
// let data= new Array(2,3,5,9,3,5,4,7)
// for(let x of data)
// {
//     console.log(x);
// }
//-----------------------------------------------------------------------------------------------------------------------
// data.shift();
// console.log(data)

// data.lastIndexOf()
// console.log(data)

// console.log(data.sort())
//----------------------------------------------------------------------------------------------------------

// function display(){
//     console.log("Hello")
//     console.log("world")
//     console.log("my self disha")
// }
// display()
//-----------------------------------------------------------------------------------------------------------------------------------------------

// let display = function(name){
//     console.log("Welcome: ",name);

// }
// display["disha"];
//-----------------------------------------------------------------------------------------------------------------------------------------------
// let res= function(x,y){
//     return x+y;
// }
// console.log(res)
//--------------------------------------------------------------------------------------------------------------------------------------------

// let d=(name)=>{
//     console.log("Welcome:",name)
// }
// d("Ajay");
//-----------------------------------------------------------------------------------------------------------------------------------------------
// let res=(x,y)=> x+y;
// console.log(res(20,30));
//-----------------------------------------------------------------------------------------------------------------
// setTimeout(()=>{
//     console.log("Hello");
// },2000)
//--------------------------------------------------------------------------------------------------------------
// function d(name,callback){
//     console.log("Welcome",name)
//     callback()

// }
// function b(){
//     console.log("Hello");
// }
// d("disha",b);
//------------------------------------------------------------------------------------
// function dp(name)
// {
//     console.log(name);
// }
// dp()
//--------------------------------------------------------------------------------------------------------------
let e={
    id:24566,
    name:"Disha",
    city:"Udupi"
}
console.log(e)
console.log(e.name);
console.log(e['name'])
e.s=5000;
console.log(e);
for(let key in e)
{
    console.log("key:"+key+"value:"+e[key])
}
let{id,name,age}= e;
console.log(id);
console.log(name);
console.log(age);