// const fs = require('fs');

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

// fs.appendFile("./abes.text" , " and My name is Sudhakar Verma" , () => {});

// fs.cpSync("./abes.txt" , "./a1.txt");

// fs.unlinkSync("./abes.txt");

// fs.unlink("./abes.txt" , () => {
    
// } );

const os = require('os');
console.log("System platform" , os.platform());
console.log("user info" , os.userInfo());
console.log(" cpu" , os.arch());
console.log(" free memory" , os.freemem());
console.log(" total memory" , os.totalmem());
console.log(" uptime" , os.uptime());
console.log(" homedir" , os.homedir());
console.log(" host name" , os.hostname ());


