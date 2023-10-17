// // Synchronous

// console.log(" I ");
// console.log(" eat ");

// setTimeout(() =>
// {
//     console.log(" ice cream ");
// }, 4000);

// console.log(" with a ");
// console.log(" spoon ");

// // Asynchronous

// // Callback
// function one(call_two)
// {
//     call_two();
//     console.log(' step 1 ');
// }

// function two()
// {
//     console.log(' step 2 ');
// }

// one(two);

let stocks = {
    Fruits: [ 'strawberry', 'grapes', 'banana', 'apple' ],
    liquid: [ 'water', 'ice' ],
    holder: [ 'cone', 'cup' , 'stick'],
    toppings: [ 'chocolate', 'peanuts' ],
}

// console.log(stocks.Fruits[2]);


let order = (Fruit_name, call_production) =>
{
    setTimeout(() =>
    {
        console.log(`${stocks.Fruits[Fruit_name]} was selected`);
        call_production();
    }, 2000);
}

let production = () =>
{
    setTimeout(() =>
    {
        console.log("Production has started");

        setTimeout(()=>
        {
            console.log("The fruit has been chopped");

            setTimeout(()=>
            {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

                setTimeout(()=>
                {
                    console.log("Machine was started")
                }, 1000);

                setTimeout(()=>
                {
                    console.log(`ice cream was placed on the ${stocks.holder[0]}`);

                    setTimeout(()=>
                    {
                        console.log(`${stocks.toppings[0]} was added as toppings`);

                        setTimeout(()=>
                        {
                            console.log("serve ice cream");
                        }, 2000);
                    }, 3000);
                }, 1000);
            }, 1000);
        }, 2000);
    }, 0);
}

order(0, production);
