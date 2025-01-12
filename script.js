let number1 = 0
let number2 = 0
let operator = ""

function add(a, b) {
	return a + b
}

function subtract(a, b) {
	return a - b
}

function multiply(a, b) {
	return a * b
}

function divide(a, b) {
	return Math.round((a / b) * 1000000000) / 1000000000
}

function operate(a, b, c) {
	switch (c) {
		case "+":
			return add(a, b)
		case "-":
			return subtract(a, b)
		case "*":
			return multiply(a, b)
		case "/":
			return divide(a, b)
	}
}

console.log(operate(2, 2, "/"))
