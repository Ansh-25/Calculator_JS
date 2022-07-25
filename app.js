let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

const evaluate = (s) =>{
    let num1=0, num2=0;
    let flag = true;
    let operation = "";
    for(let i=0;i<s.length;++i){
        let digit = s[i] - "0";
        if(digit<10 && digit>=0){
            if(flag){
                num1*=10;
                num1+=digit;
            } else{
                num2*=10;
                num2+=digit;
            }            
        }else {
            operation = s[i];
            flag = false;
        }
    }
    switch(operation){
        case '*':
            return num1*num2;
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '+':
            return num1+num2;
        case '/':
            return num1/num2;
        default:
            return "Error!";
    }
}

buttons.map(button =>{
    button.addEventListener('click', (e) =>{
        if(display.innerText == "Only binary expressions allowed") display.innerText = "";
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '←':
                if(display.innerText)
                    display.innerText = display.innerText.slice(0,-1);
                break;
            case '=':
                display.innerText = evaluate(display.innerText);
                break; 
            default:
                display.innerText += e.target.innerText; 
        }
    })
})

