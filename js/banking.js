//function
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    //clear input field
    inputField.value = '';

    return amountValue;
}

//function 
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotalValue = parseFloat(totalText);
    totalElement.innerText = amount + previousTotalValue;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceValue = parseFloat(balanceTotalText);
    return previousBalanceValue;
}
// function
function updateBalance(amount) {
    const balanceTotal = document.getElementById('balance-total');
    /* 
    const balanceTotalText = balanceTotal.innerText;
    const previousbalancevalue = parseFloat(balanceTotalText); 
    */
    previousBalanceValue = getCurrentBalance();
    balanceTotal.innerText = amount + previousBalanceValue;
}


//deposite event handle
document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount);
    }
    /*  
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    */

    //function call


    //getting current deposit amount
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotalValue = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + previousDepositTotalValue; 
    */




    //update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalancevalue = parseFloat(balanceTotalText);

    //adding new and previous balance amount
    balanceTotal.innerText = depositAmount + previousbalancevalue; 
    */



});


//withdarw event handle
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //function call
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(-withdrawAmount);
    }
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    */





    //getting current withdrw value
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalValue = parseFloat(withdrawTotalText);
    withdrawTotal.innerText = withdrawAmount + previousWithdrawTotalValue; 
    */



    //update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousbalancevalue = parseFloat(balanceTotalText);

    // new balance amount
    balanceTotal.innerText = previousbalancevalue - withdrawAmount; 
    */


});
