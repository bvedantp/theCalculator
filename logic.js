function add(num1,num2){
    return num1 + num2;
}

function subtract(num1,num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1,num2){
    return num1 / num2;
}

function operate(operator, num1, num2) {
    //just use key value pairs, dummy
    //this below code is useful when u want operators in function parameters
    let opera= {
        "+": add(num1,num2),
        "-": subtract(num1,num2),
        "*": multiply(num1,num2),
        "/": divide(num1,num2)
    };
    return opera[operator];
}

let numDisplay= document.querySelector("p");
let numpad= document.getElementById("numpad");
let operators=  document.getElementById("operators");
let bottomRow= document.getElementById("bottomRow");
let allClear = document.getElementById("delete");
let equals= document.getElementById("equals");
let num1='';
let num2='';
let operator='';

function operatorCheck(){
    if(operator==='') return false
    return true;
}

numpad.addEventListener('click', (e)=>{
    const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  } //this upper nugget of code is to prevent bubbling
    if(operatorCheck()){
        num2+=e.target.innerText;
    } else {
        num1+=e.target.innerText;
    }
    numDisplay.innerText+= e.target.innerText;
    });

operators.addEventListener('click', e=>{
    const isButton = e.target.nodeName === 'BUTTON';
  if (!isButton) {
    return;
  } 
    numDisplay.innerText+= e.target.innerText;
    operator= e.target.innerText;
});

//bottomRow.addEventListener('click', e=>numDisplay.innerText+= e.target.innerText);

allClear.addEventListener('click', (e)=>{
    numDisplay.innerHTML="";
    num1='';
    num2='';
    operator='';
    });

equals.addEventListener('click', ()=>{
    
    num1=Number(num1);
    num2=Number(num2);
    numDisplay.innerText=operate(operator, num1, num2);
    console.log(`${num1} ${operator} ${num2}`);
    num1=operate(operator, num1, num2);
    num2='';
    console.log(`${num1} ${operator} ${num2}`);
    //operator='';
})

