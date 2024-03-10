let display = document.querySelector(".display");
let btnClear = document.querySelector("#btnClear");
let btnClearLastAction = document.querySelector("#btnClearLastAction");
let btnBackSpace = document.querySelector("#btnBackSpace");
let btnDiv = document.querySelector("#btnDiv");
let btnMul = document.querySelector("#btnMul");
let btnMinus = document.querySelector("#btnMinus");
let btnPlus = document.querySelector("#btnPlus");
let btnPN = document.querySelector("#btnPN");
let btnPoint = document.querySelector("#btnPoint");
let btnEqual = document.querySelector("#btnEquals");
let btnNumber = document.querySelectorAll(".btnNumber");
let setPoint = false, number1, number2,op = "",result, setresult=false;

// add the contents of the buttons together
btnNumber.forEach(element => {
    element.addEventListener("click", (e)=>{
        if(display.textContent === "0.0"){
            
            display.textContent = e.target.textContent
        }else{
            display.textContent += e.target.textContent

        }
    })
});

// clear the screen
btnClear.addEventListener('click',(e) => {

    display.textContent="0.0";
    setPoint = false;
    setresult = false;
    number1 = 0;
    number2 = 0;
});

// clear one by one screen contents
btnClearLastAction.addEventListener('click',(e)=>{

    display.textContent = "0.0";
});


// after deleting the checker,you can put the checker again and don't put the more than once.
btnBackSpace.addEventListener('click',(e) =>{

    let len=display.textContent.length;
    let lastDigit = display.textContent.substring(len-1,len);
    if (lastDigit === "."){
        setPoint = false;
    }
    if(len > 1){
        display.textContent = display.textContent.substring(0, len-1);
    }else{
        display.textContent = "0.0";
    }
});


btnPN.addEventListener('click',(e) =>{

    display.textContent = display.textContent * -1;
});


btnPoint.addEventListener('click', (e) => {

    if(setPoint === false){
        display.textContent += ".";
        setPoint = true;
    }
});


btnPlus.addEventListener('click', (e)=>{

    number1 = Number(display.textContent);
     display.textContent = "0.0";
     op = "+";
});


btnMinus.addEventListener('click', (e)=>{

    number1 = Number(display.textContent);
    display.textContent = "0.0";
    op = "-";
});


btnDiv.addEventListener('click', (e)=>{

    number1 = Number(display.textContent);
    display.textContent = "0.0";
    op = "/";
});


btnMul.addEventListener('click', (e)=>{

    number1 = Number(display.textContent);
    display.textContent = "0.0";
    op = "*";
});


// applying mathematical operators and registering the result.
btnEqual.addEventListener('click', (e)=>{

    if (setresult===false){
        number2 = Number(display.textContent);

    }else{
        number1 = Number(display.textContent);

    }
    switch (op){
        case '+':
            result= number1 + number2;

            break;
        case '-':
            result= number1 - number2;
;
            break;
        case '/':
            result= number1 / number2;

            break;
        case '*':
            result= number1 * number2;

            break;

    }
    display.textContent=result;
    setresult = true;
});
