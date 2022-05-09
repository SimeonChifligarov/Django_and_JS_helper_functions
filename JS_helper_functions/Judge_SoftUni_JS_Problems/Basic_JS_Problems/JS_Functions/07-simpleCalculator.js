// NOT MY CODE
// JUST CHECKING...

function calculator() {
    let firstInput;
    let secondInput;
    let resultBox;

    function init(selector1, selector2, resultSelector) {
        firstInput = document.querySelector(selector1);
        secondInput = document.querySelector(selector2);
        resultBox = document.querySelector(resultSelector);
    }

    function add() {
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }

    function subtract() {
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }

    return {
        init,
        add,
        subtract
    }

}

// const calculate = calculator();
// calculate.init('#num1', '#num2', '#result');
// 

// document.body.innerHTML = '<input type="text" id="num1" />' +
//     '<input type="text" id="num2" />' +
//     '<input type="text" id="result" readonly />';

// let obj = result();

// obj.init("#num1","#num2",'#result');
// let num1 = $('#num1');
// let num2 = $('#num2');
// let res = $('#result');
// num1.val(-13);
// num2.val(5);
// obj.subtract();
// // expect(res.val()).to.equal('-18',"Incorrect result");