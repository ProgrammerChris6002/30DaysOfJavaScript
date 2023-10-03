function sum(array)
{
    let result = 0;
    for (nums of array) result += nums;
    return (result);
}

const personAccount = {
    firstName: 'Christian',
    lastName: 'Nwachukwu',
    incomes: [7500, 1500, 1000],
    expenses: [30, 70, 50, 500, 50],
    totalIncome()
    {
        return (sum(this.incomes));
    },
    totalExpense()
    {
        return (sum(this.expenses));
    },
    accountInfo()
    {
        return (`${this.firstName} ${this.lastName} has a total weekly income of $${this.totalIncome()} and he spends $${this.totalExpense()}.`);
    },
    addIncome()
    {
        for (const income of arguments) this.incomes.push(parseInt(income));
        return (this.incomes);
    },
    addExpense()
    {
        for (const expense of arguments) this.expenses.push(parseInt(expense));
        return (this.expenses);
    },
    accountBalance()
    {
        return (this.totalIncome() - this.totalExpense());
    }
}
console.log(personAccount);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountInfo());
personAccount.addIncome(2000, 3000);
console.log(personAccount.accountInfo());
personAccount.addExpense(350, 650);
console.log(personAccount.accountInfo());
console.log(`Account balance = $${personAccount.accountBalance()}`);


const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
];

function getCurrentDateTime()
{
    let zone = 'AM';
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let time = [ month, date, hours, minutes ];
    if (hours > 11)
    {
        zone = 'PM';
        hours -= 12;
    }

    for (let element of time)
    {
        element > 9 ? element = element : element = '0' + element;
    }

    let currentTime = `${date}/${month}/${year} ${hours}:${minutes} ${zone}`;
    return (currentTime);
}
console.log(getCurrentDateTime());

function signUp(array)
{
    const newUser = {};
    let username = prompt('Enter username: ').toLowerCase();
    let email = prompt('Enter email: ').toLowerCase();
    let password = prompt('Enter password: ');

    for (i = 0 ; i < array.length ; i++)
    {
        if (username === array[i].username.toLowerCase())
        {
            return (`Username '${username}' already exists, try another one`);
        }
        else if (email === array[i].email.toLowerCase())
        {
            return (`Email '${email}' already exists!\nTry signing in.`);
        }
    }
    let _id = Math.random().toString(36).substr(2, 6);
    let createdAt = getCurrentDateTime();
    let isLoggedIn = true;

    newUser._id = _id;
    newUser.username = username[0].toUpperCase() + username.slice(1);
    newUser.email = email;
    newUser.password = password;
    newUser.createdAt = createdAt;
    newUser.isLoggedIn = isLoggedIn;
    array.push(newUser);

    return ('Successfully signed up.');
}
console.log(signUp(users));

function signIn(array)
{
    let username = prompt('Enter username: ').toLowerCase();
    let password = prompt('Enter password: ');
    for (let i = 0 ; i < array.length ; i++)
    {
        if (users[i].username.toLowerCase() === username && users[i].password === password)
        {
            users[i].isLoggedIn = true;
            return ('Logged In!');
        }
    }
    return ('Incorrect login details!\nTry again.');
}
// console.log(signIn(users));

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];

function getProduct(productsArray)
{
    let productName = prompt('Enter product name: ').toLowerCase();
    let productDescription = prompt('Enter product description: ').toLowerCase();
    let productPrice = parseInt(prompt('Enter product price: '));
    if (Number.isNaN(productPrice)) return ('Product price must be a number!');

    for (const product of productsArray)
    {
        if (product.name.toLowerCase() === productName && product.description.toLowerCase() === productDescription && product.price === productPrice)
        {
            return (product);
        }
    }
    return ('Product not found!');
}

function rateProduct(productsArray)
{
    const product = getProduct(productsArray);
    if (typeof product === "string") return ('Product not found!');

    let productRating = Math.round(Number(prompt('Rate product : ')) * 10) / 10
    if (Number.isNaN(productRating)) return ('Product rating must be a number!');
    let userId = Math.random().toString(36).substr(2, 6);

    product.ratings.push({ userId: userId, rate: productRating });
    console.log('Rating successfully added');
    return (productsArray);
}
// console.log(rateProduct(products));

function averageProductRating(productsArray)
{
    const product = getProduct(productsArray);
    if (typeof product === "string") return ('Product not found!');
    let averageRating = 0;
    let count = 0;

    for (i = 0 ; i < product.ratings.length ; i++)
    {
        averageRating += product.ratings[i].rate;
        count++;
    }
    return (averageRating / count);
}
// console.log(averageProductRating(products));

function likeProduct(productsArray)
{
    const product = getProduct(productsArray);
    let userId = Math.random().toString(36).substr(2, 6);
    let isLiked;
    if (product.likes.length > 0)
    {
        product.likes.pop();
        isLiked = false;
    }
    else
    {
        product.likes.push(userId);
        isLiked = true;
    }
    return (isLiked);
}
//console.log(likeProduct(products));
