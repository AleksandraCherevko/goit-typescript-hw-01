// type messageValue = {
//   message: string;
// };

function showMessage(message: string) {
  console.log(`${message}`);
}

// ===========================================================

type numValue = {
  num1: number;
  num2: number;
};

function calc(num1: numValue, num2: numValue) {
  return num1.num1 + num2.num2;
}

// ===========================================================

type errorValue = {
  error: string;
};

function customError() {
  throw new Error("Error");
}


