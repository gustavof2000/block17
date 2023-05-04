const coffee_data = require("./coffee_data.js");


coffee_data.forEach(word => console.log(word.name));


const result = coffee_data.filter(drinksUnderFive);

function drinksUnderFive(items){
    return items.price <= 5
}
console.table(result);


const result1 = coffee_data.filter(drinksPricedEven);
function drinksPricedEven(items){
    return items.price % 2 == 0;
}
console.table(result1);



const sum = coffee_data.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0,);
console.log(sum);



const result2 = coffee_data.filter(seasonalDrinks);
function seasonalDrinks(items){
    return items.seasonal;
}
console.table(result2);



const result3 = coffee_data.filter(seasonalDrinks);
function seasonalDrinks(items){
    return items.seasonal;
}
result3.forEach(word => console.log(`${word.name} with imported beans`))
