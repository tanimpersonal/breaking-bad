// MODAL ID
document.getElementById('my-modal').style.display = 'none';
// MODAL ID END


// EXPENSE AND BALANCE BUTTON
document.getElementById('calculate').addEventListener('click', function () {
    const income = document.getElementById('income');
    const incomeValue = parseInt(income.value);
    const remBalance = document.getElementById('balance');
    const food = document.getElementById('food');
    const foodValue = parseInt(food.value);
    const rent = document.getElementById('rent');
    const rentValue = parseInt(rent.value);
    const clothes = document.getElementById('clothes');
    const clothesValue = parseInt(clothes.value);
    let totalExpense;
    let remainingBalance;
    // check expense inputs are positive and not any character 
    if (isNaN(foodValue) == false && isNaN(rentValue) == false && isNaN(clothesValue) == false && foodValue >= 0 && rentValue >= 0 && clothesValue >= 0) {
        totalExpense = total(foodValue, rentValue, clothesValue);
        const expense = document.getElementById('expense');
        // check income value is greater than 0, positive, and greater than expense
        if (isNaN(incomeValue) == false && incomeValue > totalExpense && incomeValue > 0) {
            remainingBalance = balance(incomeValue, totalExpense);
            remBalance.innerText = remainingBalance;
            expense.innerText = totalExpense;
            disabler(income);
            disabler(food);
            disabler(rent);
            disabler(clothes);
            // enable button if expense and balance is calculated
            if (expense.innerText != '' || remBalance.innerText != '') {
                document.getElementById('save-button').removeAttribute('disabled');
            }
            // saving button
            document.getElementById('save-button').addEventListener('click', function () {
                const percentage = document.getElementById('percentage');
                const saving = document.getElementById('saving');
                const percentageValue = parseInt(percentage.value);
                const remainingSave = document.getElementById('remaining');
                let savedAmount = save(incomeValue, percentageValue);
                // check if percentage is not negative and a number
                if (percentageValue >= 0 && isNaN(percentageValue) == false && savedAmount < remainingBalance) {
                    saving.innerText = savedAmount;
                    let totalRem = remainingBalance - savedAmount;
                    remainingSave.innerText = totalRem;
                    disabler(percentage);
                } else {
                    const modalText = document.getElementById('modal-text');
                    modalText.innerText = 'Your percentage is either bigger than the available balance or its negative or not a number!'
                    modal();

                }
            })
        } else if (incomeValue < totalExpense) {
            const modalText = document.getElementById('modal-text');
            modalText.innerText = 'Your income input is less than expense!'
            modal();
        } else {
            const modalText = document.getElementById('modal-text');
            modalText.innerText = 'Your income input is either negative or not a number.'
            modal();
        }
    } else if (foodValue < 0 || isNaN(foodValue) == true) {
        const modalText = document.getElementById('modal-text');
        modalText.innerText = 'Your food expense input is either negative or not a number.'
        modal();
    } else if (rentValue < 0 || isNaN(rentValue) == true) {
        const modalText = document.getElementById('modal-text');
        modalText.innerText = 'Your rent expense input is either negative or not a number.'
        modal();
    } else if (clothesValue < 0 || isNaN(clothesValue) == true) {
        const modalText = document.getElementById('modal-text');
        modalText.innerText = 'Your clothes expense input is either negative or not a number.'
        modal();
    }
})
// EXPENSE AND BALANCE END


// FUNCTIONS


// expense calculator
function total(foodValue, rentValue, clothesValue) {
    {
        let totalExpense = foodValue + rentValue + clothesValue;
        return totalExpense;
    }
}
// expense calculator end


// balance calculator
function balance(incomeValue, totalExpense) {
    let myBalance = incomeValue - totalExpense;
    return myBalance;
}
// balance calculator end


// saving amount calculator
function save(remainingBalance, percentageValue) {
    let balance = remainingBalance * (percentageValue / 100);
    let precisedBalance = balance.toPrecision(3);
    return parseFloat(precisedBalance);
}
// saving amount calculator end


// modal close open
function modal() {
    document.getElementById('my-modal').style.display = 'block';
    document.getElementById('close').addEventListener('click', function () {
        document.getElementById('my-modal').style.display = 'none';
    })
}

function disabler(parameter){
    parameter.setAttribute('disabled',true);
}
// modal close open end


// FUNCTIONS END