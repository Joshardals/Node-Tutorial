const eventEmitter = require("events");

const customEmitter = new eventEmitter();
customEmitter.on("response", (name, id) => {
  console.log(`data received, user: ${name}, id: ${id}`);
});

customEmitter.emit("response", "Joshua", 29843);
