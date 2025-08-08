//input - 7:30 AM
function WorkOut(Times){
    //This line will split the code based on space and store it, ["7:30","AM"]
    const[Time, median] = Times.split(' ');
    //now we have to split the code, based on hour and minutes, will get [ "7", "30"]
    const[hr, min] = Time.split(':').map(Number);
    let hrs= Number(hr)
    let mins= Number(min)
    //will get
    //["7", "30", "AM"]

    //12 hour time to 24 hour time
    //12 am - midnight - 0 hour
    //12 pm - midday - 12
    //after 12 pm --> will add with 12
    //ex: 1pm --> 12+1 = 13pm
    if(median==='PM' && Time !=='12')
    {
        hrs+=12;
    }
    if(median === 'AM' && Time === '12')
    {
        hrs=0;
    }
    //lets say, 6:30 ---> total = 6*60+30= 390
    let total= hrs*60+mins;
// 5*60 = 300 , 9*60 = 540 , if total bw 300 nd 540  return this
    if(total> 5*60 && total<9*60)
    {
        return "cardio session";
    }
    else if(total > 9*60 && total<=12*60)
    {
        return "strength Training";
    }
    else if(total>12*60 && total<= 17*60)
    {
        return "Yoga and flexibility";
    }
    else if(total>17*60 && total<=20*60)
    {
        return "high intensity interval training";
    }
    else
    {
        return "ligh stretching and cool down";
    }



}


console.log(WorkOut("6:30 AM"));
console.log(WorkOut("10:15 AM"));
console.log(WorkOut("3:00 PM"))
console.log(WorkOut("5:45 PM"))
console.log(WorkOut("9:10 PM"))



