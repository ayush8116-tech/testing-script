const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// 1. Point to your Arduino's port
const port = new SerialPort({
  path: "/dev/cu.usbmodem14101", // Change this to your port
  baudRate: 9600,
});

// 2. Use a parser to read the native C++ output line-by-line
const parser = port.pipe(new ReadlineParser({ delimiter: "\r\n" }));

port.on("open", () => {
  console.log("✅ Connection established with Native C++ code.");

  // Send a command to the C++ logic every 2 seconds
  let state = 1;
  setInterval(() => {
    console.log(`Sending to C++: ${state}`);
    port.write(state.toString());
    state = state === 1 ? 0 : 1;
  }, 2000);
});

// 3. Listen for the "Confirm" message from the native code
parser.on('data', (data) => {
  console.log(`Arduino Feedback: ${data}`);
});
