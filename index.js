const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id === 'clear') {
            display.innerText = '';
        } else if (item.id === 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.slice(0, -1);
        } else if (item.id === 'equal') {
            if (display.innerText.trim() === '') {
                display.innerText = 'Please enter some number to calculate';
                setTimeout(() => display.innerText = '', 2000);
            } else {
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
            }
        } else {
            display.innerText += item.id;
        }
    };
});
