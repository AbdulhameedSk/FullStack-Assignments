// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
// For example, if the file input was
// ```
// hello     world    my    name   is       Abdul
// ```
// After the program runs, the output should be
// ```
// hello world my name is Abdul
// ```
// The program should handle cases where there are multiple consecutive spaces or tabs between words as well. It should also handle cases with different types of white space
const fs = require("fs");

function cleanFile(file) {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) throw err;
        let newData = data.replace(/\s+/g, " ");  // Remove multiple spaces with a single space

        fs.writeFile(file, newData, (err) => {
            if (err) throw err;
            console.log('File cleaned and written successfully.');
        });
    });
}

cleanFile('Sample.txt');
