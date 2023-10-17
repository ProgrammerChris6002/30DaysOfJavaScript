let stocks = {
    Fruits: [ 'strawberry', 'grapes', 'banana', 'apple' ],
    liquid: [ 'water', 'ice' ],
    holder: [ 'cone', 'cup' , 'stick'],
    toppings: [ 'chocolate', 'peanuts' ],
}

let is_shop_open = true;

let order = (time, work)=>
{

    return (new Promise( (resolve, reject)=>
    {
        if (is_shop_open)
        {
            setTimeout(()=>
            {
                resolve(work());
            }, (time * 1000));
        }
        else
        {
            reject(console.log("Our shop is closed"));
        }
    } ));
}

order(2, ()=> console.log(`${stocks.Fruits[0]} was selected`))

.then(()=>
{
    return (order(0, ()=> console.log("Production has started")));
})

.then(()=>
{
    return (order(2, ()=> console.log("the fruit was chopped")));
})

.then(()=>
{
    return (order(1, ()=> console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]}`)));
})

.then(()=>
{
    return (order(1, ()=> console.log("start the machine")));
})

.then(()=>
{
    return (order(2, ()=> console.log(`Ice cream was placed on ${stocks.holder[0]}`)));
})

.then(()=>
{
    return (order(3, ()=> console.log(`${stocks.toppings[0]} was selected`)));
})

.then(()=>
{
    return (order(1, ()=> console.log("ice cream was served")));
})

.catch(()=>
{
    console.log("Customer left");
})

.finally(()=>
{
    console.log("day ended, shop is closed");
});
