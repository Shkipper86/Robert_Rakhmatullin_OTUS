let Product = [{
    id:1,
    name: "Coca Cola",
    descriptions: "The Coca-Cola Company",
    category: "soft drink",
    price: 60,
    balance: 1000
},
{
    id:2,
    name: "Pepsi",
    descriptions: "PepsiCo.",
    category: "soft drink",
    price: 55,
    balance: 5000
},
{
    id:3,
    name: "Pringles",
    descriptions: "Kellogg’s product",
    category: "crisps",
    price: 130,
    balance: 300
},
{
    id: 4,
    name: "Alti Kamembert",
    descriptions: "Dessert soft Camembert - cheese with white mold",
    category: "cheese",
    price: 430,
    balance: 157
},
{
    id: 5,
    name: "Teapigs with chocolate",
    descriptions: "Black tea Teapigs with chocolate",
    category: "tea",
    price: 674,
    balance:7
}
];
let categories = [{
    id: 1,
    name: "soft drink"
},
{
    id:2,
    name: "crisps"
},
{
    id:3,
    name:"cheese"
},
{
    id:4,
    name:"tea"
}];

let buyer=[{
    id:1,
    name: "Ivanov Ivan",    
},
{
    id:2,
    name: "Petrov Petr"
}]
module.exports = {Product, categories, buyer}