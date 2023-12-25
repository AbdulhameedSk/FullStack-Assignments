// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
var c=1;

function showTime(){
    const d = new Date();
    c++;
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
    if(c>=limit){
        clearInterval(out);
    }
}
let limit=1000000;
let out=setInterval(showTime, 1000);
