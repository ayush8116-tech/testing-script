const { Board, Led } = require("johnny-five");
const board = new Board(); // It will auto-detect your port on macOS

const result = process.argv;

board.on("ready", () => {
  const red = new Led(3);
  const green = new Led(10);
  const action = {
    "0": () => {
      green.on();
      setTimeout(() => {
        green.off();
      }, 2000);
    },
    "1": () => {
      red.on();
      setTimeout(() => {
        red.off();
      }, 2000);
    },
  };

  action[result[2]]();
});
