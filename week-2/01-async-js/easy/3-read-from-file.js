// ## Reading the contents of a file
// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

const fs=require ("fs");
//Lets check if file exists or not
console.log(fs.existsSync("Sampletxt.txt"));
//Reading contents in file
fs.readFile("Sampletxt.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})
//Synchronous File Reading
try {
    const data = fs.readFileSync('Sampletxt.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(err);
}

