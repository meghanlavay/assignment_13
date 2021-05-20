const $ = (id) => {
    return document.getElementById(id);
};

const bankAccount = (function () {

    let balance = 0;
    let owner = '';

    let displayName = $('accountName');
    let displayBalance = $('accountBalance');

    function getBalance() {
        displayName.innerHTML = owner;
        displayBalance.innerHTML = balance;
    }

    return {
        getOwnerName: function (ownerName) {
            if(owner = ownerName) {
                getBalance();
            } else {
                alert('Please enter your name');
            }
        },

        getDeposit: function (depositAmt) {
            if(depositAmt > 0) {
                balance += depositAmt;
                getBalance();
            } else {
                alert('Please enter a valid amount');
            }
        },

        getWithdrawl: function (withdrawlAmt) {
            if(withdrawlAmt <= balance) {
                balance -= withdrawlAmt;
                getBalance();
            } else {
                alert('The amount exceeds your balance');
            }
        },
    };
})();

$('btnName').onclick = function () {
    let displayName = prompt ("Please enter your name");
    bankAccount.getOwnerName(displayName)
};

$('btnDeposit').onclick = function () {
    let bankDeposit = prompt ("Enter the amount that you wish to deposit");
    bankAccount.getDeposit(parseInt(bankDeposit))
};

$('btnWithdrawl').onclick = function () {
    let bankWithdrawl = prompt ("Enter the amount that you wish to withdrawl");
    bankAccount.getWithdrawl(parseInt(bankWithdrawl))
};