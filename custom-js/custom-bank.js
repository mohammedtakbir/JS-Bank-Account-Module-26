// ! Deposit
// * 1
document.getElementById('deposit-btn').addEventListener('click', function(){
    // * 2
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const newDepositAmount = parseFloat(depositAmountString);
    
    // * 3
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalString = depositTotal.innerText;
    const currentDeposit = parseFloat(depositTotalString);

    // * 4 
    const totalCurrentDeposit = currentDeposit + newDepositAmount;
    // * 4.1
    depositTotal.innerText = totalCurrentDeposit;

    // * 5
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalString = balanceTotal.innerText;
    const currentBalance = parseFloat(balanceTotalString);
    
    // * 6
    const totalCurrentBalance = currentBalance + newDepositAmount;
    // * 6.1
    balanceTotal.innerText = totalCurrentBalance;
    // * 7
    depositField.value = '';
})

// ! Withdraw
// * 1
document.getElementById('withdraw-btn').addEventListener('click', function(){
    // * 2
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);

    // * 3 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotal.innerText;
    const currentWithdraw = parseFloat(withdrawTotalString);

    // * 4
    const totalCurrentWithdraw = currentWithdraw + newWithdrawAmount;
    //  * 4.1
    

})