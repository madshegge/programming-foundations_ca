/* 

QUESTION 1

*/

var greeting = "hello there";

/* 

QUESTION 2

*/

var person = [
    
    {
        name: "Mads",
        age: 25,
    }
];

/* 

QUESTION 3

*/

var outOfStock = true;

if(outOfStock === true){

    console.log("Out of Stock");

}
else{

    console.log("In Stock");

}

/* 

QUESTION 4

*/

var values = [4, 16, 45, 66, 74]

for(i = 0; i < values[i]; i++){

    console.log(values[i]);

}

/* 

QUESTION 5

*/

for(j = 15; j <= 25; j++){

    console.log(j);
}

/* 

QUESTION 6

*/

for(j = 15; j <= 25; j++){

    if( j === 20){
        console.log(j);

    }
}   
/* 

QUESTION 7

*/

var orders = [
    {
        name: "Peter Parker",
        orderNumber: 27420,
        orderStatus: true
    },
    {
        name: "Bruce Wayne",
        orderNumber: 16969,
        orderStatus: false
    }
]

for(i = 0; i < orders.length; i++){

    var customerName = orders[i].name;
    var customerOrderNum = orders[i].orderNumber;
    var customerOrderStatus = orders[i].orderStatus;

    console.log("Order number: " + customerOrderNum + ". " + "Order shipped: " + customerOrderStatus + ".")
}

/* 

QUESTION 8

*/

function whatIDontLike(ThingIDontLike){

    console.log("I dont like: " + ThingIDontLike)
}
whatIDontLike("things");
/* 

QUESTION 9

*/

function subtractor(arg1, arg2){

    var sum = arg1 - arg2;
    console.log(sum)
}
subtractor(40,15);

/* 

QUESTION 10

*/

var list = [];

function addToArray(itemToAdd){

    list.push(itemToAdd);

    console.log(list)
}
addToArray("Hello there");

