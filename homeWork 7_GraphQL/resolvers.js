const {Product, categories, byer} = require('./base');
const getProductById = (id) => Product.find(prod => prod.id === id);
const getBuyerById =(id)=>byer.find(buy=>buy.id === id);
const resolvers ={
    Query:{
        Products:()=>Product,
        Product: (_,{id})=> getProductById(id),
        category:()=> categories,
        buyer:(_,{id})=>getBuyerById(id),
    },
    Mutation:{
        createProduct:(_,{id, name, descriptions, category, price, balance})=>{
            const newProduct={id, name, descriptions, category, price, balance};
            Product.push(newProduct);
            return newProduct;
        },
        updateProduct:(_,{id, name, descriptions, category, price, balance})=>{
            let newProduct=getProductById(id);
            newProduct.name=name;
            newProduct.descriptions=descriptions;
            newProduct.category=category;
            newProduct.price=price;
            newProduct.balance=balance;
            return newProduct;
        }
    }
}
module.exports = resolvers;