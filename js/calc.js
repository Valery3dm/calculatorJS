
(function () {
    const calculatorData = [];
    const mathOperationNumber = ["+","-","*","/"];
    document.querySelectorAll('.tapButton .btn')
    .forEach(element => element.addEventListener('click',checkNumber));

    document.querySelectorAll('.tapButton .btnCalc')
    .forEach(element => element.addEventListener('click',mathOfNumber));

    document.querySelectorAll('.tapButton .enter')
    .forEach(element => element.addEventListener('click',result));

    document.querySelectorAll('.tapButton .delete')
    .forEach(element => element.addEventListener('click',clean));

    document.querySelectorAll('.tapButton .deleteLast')
    .forEach(element => element.addEventListener('click',cleanLast));

    document.querySelectorAll('.tapButton .match')
    .forEach(element => element.addEventListener('click',square));


    function checkNumber(e){
        let clickedButton = e.target;
        let inpt = document.getElementById('demo');
        calculatorData.push(clickedButton.value);
        document.getElementById('demo').value = calculatorData.join('');
    }
    function mathOfNumber(e){
        let clickedButtonZnak = e.target;
        let inpt  = document.getElementById('demo');

        if (calculatorData.length == 0 && clickedButtonZnak.value != "-"){  
            clean();
        } else if (calculatorData.length >= 2 && mathOperationNumber.includes(calculatorData[calculatorData.length-1])){
            calculatorData.pop();
            calculatorData.push(clickedButtonZnak.value);
        } else if (calculatorData.length == 1 && mathOperationNumber.includes(calculatorData[calculatorData.length-1])){
            clean();
        } else {
            calculatorData.push(clickedButtonZnak.value);
        }
        document.getElementById('demo').value = calculatorData.join('');
    }
    function result(){
            const displayValue = document.getElementById('demo');
        if (mathOperationNumber.includes(calculatorData[calculatorData.length-1])){
            
            displayValue.value = "ERORR";
            calculatorData.length = 0;
        } else {
            let res = calculatorData.join('');
            displayValue.value = eval(res);
            calculatorData.length = 0;
            calculatorData.push(displayValue.value);
        }    
    }



    function clean(){
        calculatorData.length = 0;
        document.getElementById('demo').value = "";
    }
    function cleanLast(){
        if (calculatorData.length === 1){
            clean();
        } else {
            calculatorData.pop();
            document.getElementById('demo').value = calculatorData.join('');
        }
    }
    function square(){
        let res = calculatorData.join('');
        calculatorData.length = 0;
        if (res > 0){
            calculatorData.push(document.getElementById('demo').value = Math.sqrt(res));
        } else {
            document.getElementById('demo').value = "Numb. must be>0"
        }  
    }   
})();
    




