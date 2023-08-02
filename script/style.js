const ShowNum = document.getElementById("ShowNum")
const input = document.getElementById("input")

function find(x) {
    return x == '.'
}

function checkOddEven() {
    let num = input.value
    if (Array.from(num.toString()).find(find)) {
        ShowNum.innerHTML = "Invalid input!"
    }else if(input.value % 2 === 0 && num !== ''  ) {ShowNum.innerHTML = "Even number"
    }else if (input.value % 2 > 0) {
        ShowNum.innerHTML = "Odd number"
    }else {
        ShowNum.innerHTML = "Input a Number!"
    }
}