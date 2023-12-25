// ## Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
let c = 1;
function count(){
    console.log(c);
    c++;
    if(c>time){
        clearInterval(out);
    }
}
const time=30;
let out = setInterval(count, 1000);
