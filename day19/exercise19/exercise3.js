function personAccount()
{
    const firstName = 'Christian';
    const lastName = 'Nwachukwu';
    const incomes = [ 7500, 1500, 1000 ];
    const expenses = [ 30, 70, 50, 500, 50 ];

    const sum = (array)=>
    {
        return (array.reduce((acc, cur)=> acc + cur, 0));
    }

    const totalIncome = function()
    {
        return (sum(incomes));
    }
    const totalExpense = function()
    {
        return (sum(expenses));
    }

    const addIncome = function(income)
    {
        incomes.push(income);
        return (incomes);
    }
    const addExpense = function(expense)
    {
        expenses.push(expense);
        return (expenses);
    }
    
    const accountBalance = ()=>
    {
        return (totalIncome() - totalExpense());
    }
    const accountInfo = function()
    {
        return (`${firstName} ${lastName} has a total weekly income of $${totalIncome()} and he spends $${totalExpense()}.`);
    }

    return {
        totalIncome: totalIncome,
        totalExpense: totalExpense,
        addIncome: addIncome,
        addExpense: addExpense,
        accountBalance: accountBalance,
        accountInfo: accountInfo
    }
}

const account = personAccount();

console.log(account.addIncome(6250));
console.log(account.addExpense(750));

console.log(account.totalIncome());
console.log(account.totalExpense());

console.log(account.accountBalance());
console.log(account.accountInfo());