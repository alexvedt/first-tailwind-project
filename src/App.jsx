import './App.css'
import Header from "./components/header"
import { faker } from '@faker-js/faker';
const randomName = faker.person.fullName(); 
console.log(randomName); 



/**
 * this is the pet object which is used to store the pet details
 */
const pet = {
  name: "Milo",
  type: "dog",
  age: 2,
  color: "brown",
  isCute: true,
};

/**
 * this is the petAge variable which is used show the pet age
 * you can also use {age} instead of {pet.age}
 */
const { age } = pet;
console.log("petAge>>>>>", age);

const { name, type, color  } = pet;
const greetings = `Hello, my name is ${name} and I am a ${type} and I am ${age} years old and I am ${color} in color`;
console.log(greetings);


/**
 * this is the car object which is used to store the car details
 */

const car = {
  brand: "BMW",
  model: "X5",
  year: 2021,
};

/**
 * this is the best way to show the car details using destructuring 
 */
const {brand, model, year } = car;
const carDetails = `This is a ${brand} ${model} and it was made in ${year}`;
console.log(carDetails);




const members = ["Alex", "Ada", "Ridwan"]

const [member0, member1,  ...rest] = members

console.log(member0, member1, rest)

const introSecondStudent = `Hello, I am ${member1}`
console.log(introSecondStudent)




















class User {
  language = "English";
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greetUser() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  }
}

const newUser = new User("Alex", "Smith");

newUser.greetUser(); 


class ShoppingCart {
  cart = [];

  constructor(shopName, currency) {
    this.shopName = shopName;
    this.currency = currency;
  }

  /** Adds the item to the cart **/
  addToCart(item) {
    this.cart.push(item);
  }

  /** Removes the item from the cart **/
  removeFromCart(item) {
    const idToFind = item.id;
    // Find the index to remove
    const indexToRemove = this.cart.findIndex(
      (currentItem) => currentItem.id === idToFind
    );
    // If the index is -1 then it means no item was found, so
    //    we return null to break out of the function
    if (indexToRemove === -1) {
      return null;
    }
    // Filter the items and remove the item that matches our index
    const newCart = this.cart.filter((item, index) => index !== indexToRemove);
    // Set the cart to cart without the item by spreading out the array
    this.cart = [...newCart];
  }

  /** Calculates the total cost of items in the cart **/
  calculateTotalCost() {
    const totalCost = this.cart.reduce((total, item) => {
      total += item.price;
      return total;
    }, 0);
    return totalCost;
  }}

  const mosCorner = new ShoppingCart( "Mo's Corner", "NOK");
  console.warn("our shopw is", mosCorner);

  const redBull = { id: 1, title: "Red Bull", price: 25.0 };
  const bread = { id: 3, title: "bread", price: 50.0 };
  const cake = { id: 4, title: "Ccake", price: 200.0 };



const mosCornerCart = [];

function addToCart(shopCart, ...item){
  shopCart = [...shopCart, ...item] 
  shopCart.push(item);
}


addToCart(mosCornerCart, redBull);
addToCart(mosCornerCart, cake);
addToCart(mosCornerCart, bread);

console.warn("new cart has", mosCornerCart)

console.log(mosCornerCart)

const JuliasBakery = [...mosCornerCart, redBull]
console.log("julias bakery", JuliasBakery)


/**
 * we are going to make an array of numbers
 */
 const values = [100, 200, 300, 400, 500];
/**
 * here we are going to use the map function to add 1 to each element in the array
 */
 const newArray = values.map(function (element, index, array) {
   console.log(element, index, array);
   return element + 1;
  });
  console.log("newarray>>", newArray);


  const names = [
    { firstName: "Monde", lastName: "Sineke", isStudent: false },
    { firstName: "Alexander", lastName: "Bjerketvedt", isStudent : true },
    { firstName: "Ali", lastName: "Baba", isStudent: true},
    { firstName: "Sander", lastName: "Nordlending", isStudent: true },
  ];

  const combinedNames = names.map ((person) => {
    return {
      ...person,
     fullName: `${person.firstName} ${person.lastName}`};
  });
  console.log(combinedNames)

  const students = names.filter((person) => person.isStudent);
console.log("students", students);





const recipes = [
  { title: "Shish", isHealthy: false, difficulty: 8, price: 250 },
  { title: "Mousakka", isHealthy: true, difficulty: 9, price: 300 },
  { title: "Chicken", isHealthy: false, difficulty: 7, price : 200 },
  { title: "Fried Rice", isHealthy: true, difficulty: 6, price : 150 },
  { title: "Pancakes", isHealthy: false, difficulty: 5, price : 100 },
  { title: "Pizza", isHealthy: false, difficulty: 4, price : 180 },
  { title: "Salad", isHealthy: true, difficulty: 3, price : 120 },
  { title: "Burger", isHealthy: false, difficulty: 7, price : 300 },
  { title: "Pasta", isHealthy: true, difficulty: 5, price : 250 },
];

const filteredRecipes = recipes.filter(
  (recipes) => recipes.isHealthy && recipes.difficulty >=7
);
console.log("filteredRecipes", filteredRecipes);

/**
 * we are going to use the reduce function to calculate the total cost of all the recipes
 */
const costs = recipes.reduce((total, recipe) => {
  total += recipe.price;
  return total; 
},0); 
console.log("costs", costs);



/**
 * shopping cart where 
 */
const products = [
  { title: "Bread", inStock: true , quantity: 5 , discount: 2 , price: 25.0 },
  { title: "Milk" , inStock: true , quantity: 5 , discount: 2 , price: 20.0 },
  { title: "Eggs" , inStock: true , quantity: 5 , discount: 2 , price: 10.0 },
  { title: "Cheese" , inStock: true , quantity: 5 , discount: 2 , price: 40.0 },
  { title: "Yoghurt" , inStock: true , quantity: 5 , discount: 2 , price: 30.0 },
  { title: "Butter" , inStock: true , quantity: 5 , discount: 2 , price: 35.0 },
  { title: "Coke" , inStock: true , quantity: 5 , discount: 2 , price: 15.0 },
  { title: "Soap" , inStock: true , quantity: 5 , discount: 2 , price: 15.0 },
  { title: "Chips" , inStock: false , quantity: 5 , discount: 2 , price: 15.0 },
];

const fixedProducts = products.map((element) => {
  return {
    discount: 0,
    ...element,
  };
});
console.log('fixedProducts >>>', fixedProducts);

const totalCost = products.reduce(
  (total, currentProduct) => (total += currentProduct.price),
  0
);
console.log('Total Cost:', totalCost);

const totalCostWithDiscount = products.reduce((total, { discount = 0, price, inStock = false, quantity }) => {
    if (!inStock){
    return total;
    }
    if (!quantity || quantity === 0) { 
      return total;
    }
      total += (price - discount) * quantity;
      return total;

    },
  0
);


console.log('Total Cost:', totalCost);
console.log('Total Cost with discount:', totalCostWithDiscount);
console.log('You saved in total', totalCost - totalCostWithDiscount);





/*
*this is not in use......

const discountPercentage = 10; 
const discountAmount = totalCost * (discountPercentage / 100); 
const finalCost = totalCost - discountAmount;
console.log("finalCost after discount>>>>>>", finalCost);
*/






/**
 * this is the App component which is used to display the app
 * @returns {JSX.Element} this is the app component
 */
 function App () {
  return(
    <>
    <Header />
    <main>
      <h1>This is my array!</h1>
      <ul>
          {combinedNames.map((person, index) => (
            <li key={index}>{person.fullName}</li>
          ))}
        </ul>
    </main>
    </>
  )
}

export default App


