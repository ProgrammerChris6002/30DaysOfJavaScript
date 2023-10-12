const personAccount = {
    firstName: "Christian",
    lastName: "Nwachukwu",
    incomes: [ 7500, 1500, 1000 ],
    expenses: [ 30, 70, 50, 500, 50 ],
    
    sum(array)
    {
        return (array.reduce((acc, cur) => acc + cur, 0));
    },

    totalIncome()
    {
        return (this.sum(this.incomes));
    },
    totalExpense()
    {
        return (this.sum(this.expenses));
    },

    addIncome(income)
    {
        this.incomes.push(income);
        return (this.incomes);
    },
    addExpense(expense)
    {
        this.expenses.push(expense);
        return (this.expenses);
    },

    accountBalance()
    {
        return (this.totalIncome() - this.totalExpense());
    },
    accountInfo()
    {
        return (`${this.firstName} ${this.lastName} has a total weekly income of $${this.totalIncome()} and he spends $${this.totalExpense()}.`);
    }
}

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.addIncome(10000));
console.log(personAccount.addExpense(1000));
console.log(personAccount.accountBalance(1000));
console.log(personAccount.accountInfo(1000));
