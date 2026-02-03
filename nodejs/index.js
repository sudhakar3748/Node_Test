const fs = require('fs');

// fs.writeFileSync("./index.txt" , 'Hello World');
// fs.writeFileSync('./abes.text' , 'Hello ABES');

// fs.writeFileSync("./a1.txt" , 'First File');
// fs.writeFileSync('./a2.text' , 'Second File');

// fs.readFileSync('./abes.txt' , 'utf-8');

// const result = fs.readFileSync("./abes.txt" , "utf-8");
// console.log(result);

// const result = fs.readFileSync("./index.txt" , "utf-8");
// console.log(result);

// fs.writeFile("./abes.text" , "we are code" , () => { });

// fs.readFile("./abes.text" , "utf-8" , (err, result) => {
//     if (err){
//         console.log("error " , err);
//     }
//     else{
//         console.log(result);
//     }
// } );


// fs.appendFileSync("./abes.text" , "from abes engineering college");

fs.appendFile("./abes.text" , " and My name is Sudhakar Verma" , () => {});
