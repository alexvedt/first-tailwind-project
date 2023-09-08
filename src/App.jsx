import './App.css'
import Header from "./components/header"



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




















/**
 * this is the App component which is used to display the app
 * @returns {JSX.Element} this is the app component
 */
function App () {
  return(
    <>
    <Header />
    </>
  )
}

export default App



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
  const cookies = { id: 2, title: "Coockies", price: 20.0 };
  const bread = { id: 3, title: "bread", price: 50.0 };
  const cake = { id: 4, title: "Ccake", price: 200.0 };
  const milk = { id: 5, title: "milk", price: 10.0 };



const mosCornerCart = [];

function addToCart(shopCart, item){
  shopCart.push(item);
}


addToCart(mosCornerCart, redBull,cookies, bread, cake, milk);
console.warn("new cart has", mosCornerCart)

console.log(mosCornerCart)

const JuliasBakery = [...mosCornerCart, redBull]
console.log("julias bakery", JuliasBakery)