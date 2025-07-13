let input = document.getElementById("input");
let success = document.getElementById("success");

let current_text = "";
let entry = "";

function copyContent() {
    navigator.clipboard.writeText(current_text).then(() => {
        success.style.opacity = 1;

        setTimeout(() => {
            success.style.opacity = 0;
        }, 1000);
    }).catch(err => {
        console.log("Error copying: ", err)
    })
}

function pow() {
    if (!!current_text) {
        current_text += "**";
        input.value = current_text;
    }
}

function sqrt() {
    if (!!current_text) {
        current_text = String(Math.sqrt(parseInt(input.value)));
        input.value = current_text;
    } else {
        alert("No input to calculate the square root");
    }
}

function divideByOne() {
    if (!!current_text) {
        current_text = String(1 / parseInt(input.value));
        input.value = current_text;
    } else {
        alert("No input to divide");
    }
}

function powByTwo() {
    if (!!current_text) {
        current_text = String(parseInt(input.value)**2);
        input.value = current_text;
    } else {
        alert("No input to power")
    }
}

function clearEntry() {
    if (!!entry) {
        current_text = current_text.slice(0, -entry.length);
        entry = "";
        input.value = current_text;
    } else {
        alert("No entry to delete");
    }
}

function changeValue() {
    if (!!entry) {
        let entryVal = String(Number(entry) * -1);
        current_text = current_text.slice(0, -entry.length);
        current_text += entryVal;
        input.value = current_text;
    } else {
        alert("No entry to change");
    }
}

function buttonClick(char) {
    current_text += char;
    entry += char;
    input.value = current_text;

    if (!Number(char)) {
        entry = "";
    }
}

function clearDisplay() {
    current_text = "";
    entry = "";
    input.value = "";
}

function calculate() {
    console.log("click")
    try {
        let result = eval(current_text).toString();
        input.value = result;
        current_text = result;
    } catch (error) {
        input.value = "Error";
        current_text = "";
    }
}

function backspace() {
    console.log(current_text)
    current_text = current_text.slice(0, -1);
    input.value = current_text;

    if (!!entry) {
        entry = entry.slice(0, -1)
    }
}
