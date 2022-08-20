// ! Deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);
    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('Enter number');
        return;
    }

    const depositElement = document.getElementById('deposit-total');
    const depositElementSring = depositElement.innerText;
    const previousDepositAmount = parseFloat(depositElementSring);

    const totalCurrentDepositAmount = previousDepositAmount + newDepositAmount;
    depositElement.innerText = totalCurrentDepositAmount;

    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const previousBalance = parseFloat(balanceElementString);

    const totalBalance = previousBalance + newDepositAmount;
    balanceElement.innerText = totalBalance;
})

// ! Withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawFieldString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawFieldString);
    withdrawField.value = '';
    if(isNaN(newWithdrawAmount)){
        alert('Enter Number')
        return;
    }
    const balanceElement = document.getElementById('balance-total');
    const balanceElementString = balanceElement.innerText;
    const previousBalance = parseFloat(balanceElementString);
    if(newWithdrawAmount > previousBalance){
        alert('not enough money');
        return;
    }
    const withdrawElement = document.getElementById('withdraw-total');
    const withdrawElementStrring = withdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(withdrawElementStrring);

    const totalCurrentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    withdrawElement.innerText = totalCurrentWithdrawAmount;

    

    

    const totalBalance = previousBalance - newWithdrawAmount;
    balanceElement.innerText = totalBalance;

})

