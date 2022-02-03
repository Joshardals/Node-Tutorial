const { writeFileSync } = require("fs");
for (let i = 0; i < 10000; i++) {
  writeFileSync("./content/bigFile.txt", `This is a big File ${i}\n`, {
    flag: "a",
  });
}
