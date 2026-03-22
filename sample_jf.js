const { Board, Led } = require("johnny-five");
const board = new Board(); // It will auto-detect your port on macOS

const calculate = (a, b) => {
  return a + b;
};

board.on("ready", () => {
  const led = new Led(10);
  led.off();

  if (calculate(2, 1) === 3) {
    led.on();
  }
});