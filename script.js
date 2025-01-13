let number1 = ""
let number2 = ""
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

function clear() {
	number1 = ""
	number2 = ""
	operator = ""
	display.textContent = ""
}

const buttons = document.querySelector(".buttons")
const display = document.querySelector(".text")

buttons.addEventListener("click", (event) => {
	// who clicked?
	const element = event.target.textContent
	if (element.length > 3) return

	// number
	if (operator == "") {
		//number1
		if (element.match(/[1234567890]/) != null) {
			if (number1.charAt(0) == "0" && number1.charAt(1) != ".") {
				number1 = element
			} else {
				if (number1.charAt(0) == "-" && number1.charAt(1) == "0" && number1.charAt(2) != ".") {
					number1 = element
				} else {
					number1 += element
				}
			}
		}

		// number1 decimals
		if (element.match(/\./) != null && number1.match(/\./) == null) {
			if (number1 == "") {
				number1 = "0"
				number1 += element
			} else {
				number1 += element
			}
		}
		display.textContent = number1
	} else {
		//number2
		if (element.match(/[1234567890]/) != null) {
			if (number2.charAt(0) == "0" && number2.charAt(1) != ".") {
				number2 = element
			} else {
				if (number2.charAt(0) == "-" && number2.charAt(1) == "0" && number2.charAt(2) != ".") {
					number2 = element
				} else {
					number2 += element
				}
			}
		}

		//number2 decimals
		if (element.match(/\./) != null && number2.match(/\./) == null) {
			if (number2 == "") {
				number2 = "0"
				number2 += element
			} else {
				number2 += element
			}
		}

		//display
		display.textContent = number1 + operator + number2
	}

	// operators
	if (element.match(/[-+/*]/) != null && element != "+/-") {
		if (number1 != "") {
			operator = element
			display.textContent = number1 + operator
		}
	}

	// change +/-
	if (element == "+/-") {
		if (operator == "") {
			if (number1.charAt(0) == "-") {
				number1 = number1.substring(1)
			} else {
				number1 = "-" + number1
			}
			display.textContent = number1
		} else {
			if (number2.charAt(0) == "-") {
				number2 = number2.substring(1)
			} else {
				number2 = "-" + number2
			}
			display.textContent = number1 + operator + number2
		}
	}

	// clear
	if (element == "C") {
		clear()
	}

	// operate
	if (element == "=") {
		if (number1 != "" && operator != "" && number2 != "") {
			number1 = parseFloat(number1)
			number2 = parseFloat(number2)
			const result = operate(number1, number2, operator)
			clear()
			display.textContent = result
			number1 = result
		}
	}
})
