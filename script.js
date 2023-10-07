let display = "";
const output = document.getElementById("output");

const handleInput = (value) => {
  display += value;
  updateDisplay();
};

const handleDelete = () => {
  if (display.length > 0) {
    display = display.slice(0, -1);
    updateDisplay();
  }
};

const handleReset = () => {
  display = "";
  updateDisplay();
};

const handleCalculate = () => {
  try {
    const result = eval(display);
    display = result.toString();
    updateDisplay();
  } catch (error) {
    display = "Error";
    updateDisplay();
  }
};

const updateDisplay = () => {
  output.value = display;
};