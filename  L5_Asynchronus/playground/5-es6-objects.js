// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user ={
    name: name,
    age: userAge,
    location: 'Philadelphia'
}



// Object destructuring

const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    rating: 5,
}


const transaction = (type, {label:productLabel, stock, rating = 3 })  =>{
    console.log(type, productLabel, stock, rating);

}

transaction('order', product);