const fs = require("fs");
const readline = require("readline");
const file = fs.createReadStream("input.txt");

const rl = readline.createInterface({
    input: file,
    crlfDelay: Infinity
});

let ans = 0;

rl.on("line", (line) => {
    let tmp = 0;
    for(let i = 0; i < line.length; i++) {
      //checkNumber() regex elegans lenne vagy hard codeolom 
    }
    for(let n = line.length - 1; n >= 0; n--) {
      //checkNumber()
    }
    ans += tmp;
});

rl.on("close", () => {
    console.log(ans);
});
