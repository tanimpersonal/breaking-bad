document.getElementById('my-modal').style.display='none';
document.getElementById('calculate').addEventListener('click',function(){
    const income= document.getElementById('income');
    const incomeValue= parseInt(income.value);
    const remBalance= document.getElementById('balance');
    const food= document.getElementById('food');
    const foodValue= parseInt(food.value);
    const rent= document.getElementById('rent');
    const rentValue= parseInt(rent.value);
    const clothes= document.getElementById('clothes');
    const clothesValue= parseInt(clothes.value); 
    console.log(typeof(clothesValue));
    let totalExpense;
    let remainingBalance;
    if(isNaN(foodValue)==false&&isNaN(rentValue)==false&&isNaN(clothesValue)==false&&foodValue>=0&&rentValue>=0&&clothesValue>=0){
        totalExpense= total(foodValue,rentValue,clothesValue);
        const expense= document.getElementById('expense');
        if(isNaN(incomeValue)==false && incomeValue>totalExpense && incomeValue>0){
             remainingBalance=balance(incomeValue,totalExpense);
             remBalance.innerText=remainingBalance;
        } else{
            alert('rembalance not okay');
        }
        expense.innerText= totalExpense;
       
    }else{
       document.getElementById('my-modal').style.display='block';
       document.getElementById('close').addEventListener('click',function(){
        document.getElementById('my-modal').style.display='none';
       })
    }
})
function total(foodValue,rentValue,clothesValue){
    {
        let totalExpense= foodValue+rentValue+clothesValue;
        return totalExpense;
    }
}
function balance(incomeValue,totalExpense){
    let myBalance= incomeValue-totalExpense;
    return myBalance;
}
