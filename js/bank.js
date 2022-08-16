// * step-1. add eventListener to the diposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    // * step-2. get the deposit amount from the deposit input field
    // ? use .value to get value from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // * step-3. get the current total deposit amount
    const depositTotalElement = document.getElementById('deposite-total');
    const PreviousDepositTotalString = depositTotalElement.innerText;
    const PreviousDepositTotal = parseFloat(PreviousDepositTotalString);

    // * step-4. add numbers to set the total deposit
    const currentDepositTotal = PreviousDepositTotal + newDepositAmount;
    // * set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    // * step-5. get balance current total
    const balanceTotal = document.getElementById('balance-total');
    const PreviousBalaneTotalString = balanceTotal.innerText;
    const PreviousBalaneTotal = parseFloat(PreviousBalaneTotalString);

    // * step-6. calculate current total balance
    const currentBalanceTotal = PreviousBalaneTotal + newDepositAmount;
    // * set the balance total
    balanceTotal.innerText = currentBalanceTotal;




    // * step-7. clear the deposit field
    depositField.value = '';








    // * step-. get the Withdraw amount from the withdraw input field

})