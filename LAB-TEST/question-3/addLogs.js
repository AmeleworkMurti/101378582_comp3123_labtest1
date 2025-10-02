const fs = require("fs");
const path = require("path");

const logsDir = path.join(__dirname, "Logs");

// Creates Logs directory if there is none
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir);
}

// Change current working directory to Logs
process.chdir(logsDir);

// creates 10 log files (starting from log0.txt )
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  fs.writeFileSync(fileName, `This is log file number ${i}\n`);
  console.log(` ${fileName}`);
}
