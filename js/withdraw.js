// * step-1. add event handler in withdraw button
// * step-1. add event handler in withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // * step-2. get the withdraw amount from the withdraw field
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const withdrawAmount = parseFloat(withdrawFieldString);

    // * step-3. get the current total withdraw amount
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(withdrawTotalString);

    // * step-4. add numbers to set the total withdraw
    const currentTotalWithdraw = previousWithdrawTotal + withdrawAmount;
    // * set the withdraw total
    withdrawTotalElement.innerText = currentTotalWithdraw;
    
    // * step-5. get balance current total
    const balanceTotal = document.getElementById('balance-total');
    const PreviousBalaneTotalString = balanceTotal.innerText;
    const PreviousBalaneTotal = parseFloat(PreviousBalaneTotalString);

    // * step-6. calculate current total balance
    const currentBalanceTotal2 = PreviousBalaneTotal - withdrawAmount;
    // * set the balance total
    balanceTotal.innerText = currentBalanceTotal2;

     // * step-7. clear the withdraw field
     withdrawField.value ='';

















})