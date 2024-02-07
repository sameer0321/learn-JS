// Function to print even numbers between 1 and 20
function printEvenNumbers() {
    let evenNumbers = "Even numbers between 1 and 20:<br>";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            evenNumbers += i + "<br>";
        }
    }

    return evenNumbers;
}

// Function to print numbers in reverse from 10 to 1
function printReverseNumbers() {
    let reverseNumbers = "Counting down from 10 to 1:<br>";

    for (let i = 10; i >= 1; i--) {
        reverseNumbers += i + "<br>";
    }

    return reverseNumbers;
}

// Function to print odd numbers between 1 and 20
function printOddNumbers() {
    let oddNumbers = "Odd numbers between 1 and 20:<br>";

    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            oddNumbers += i + "<br>";
        }
    }

    return oddNumbers;
}


document.getElementById("output-container").innerHTML = printEvenNumbers() + printReverseNumbers() + printOddNumbers();


function generateTable() {
    let inputNumber = document.getElementById("numberInput").value;
    let num = parseInt(inputNumber);
    if (isNaN(num)) {
        document.getElementById("table-container").innerHTML = "Please enter a valid number.";
        return;
    }

    let tableHTML = "<table border='1'>";
    for (let i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + num + " x " + i + "</td><td>" + (num * i) + "</td></tr>";
    }
    tableHTML += "</table>";

    // Update the innerHTML of the container
    document.getElementById("table-container").innerHTML = tableHTML;
}

