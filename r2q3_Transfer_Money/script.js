// PLACE YOUR CODE HERE

accountValue = 0
account = document.querySelector("#account")
walletValue = 0
wallet = document.querySelector("#other-wallet")

document.querySelector("#topUp10").addEventListener("click", function () {
    accountValue += 10
    account.innerHTML = accountValue
})
document.querySelector("#transfer10ToWallet").addEventListener("click", function () {
    if (accountValue >= 10) {
        accountValue -= 10
        account.innerHTML = accountValue
        walletValue += 10
        wallet.innerHTML = walletValue
    }
})
document.querySelector("#transfer10ToAccount").addEventListener("click", function () {
    if (walletValue >= 10) {
        accountValue += 10
        account.innerHTML = accountValue
        walletValue -= 10
        wallet.innerHTML = walletValue
    }
})

document.querySelector("#spend").addEventListener("click", function () {
    amountSpent = Number(document.querySelector("#amount").value)
    if (walletValue >= amountSpent) {
        walletValue -= amountSpent
        wallet.innerHTML = walletValue
    }
})


