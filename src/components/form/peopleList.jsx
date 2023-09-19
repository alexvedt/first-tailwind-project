
import { faker } from '@faker-js/faker';
import { useState } from 'react';

faker.seed(1)


const makeProfile = () => {
    return {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
    }; 
};

    const makeProfiles = () => {
        return faker.helpers.multiple(makeProfile, { count: 10} )
    };


const InitialProfiles = makeProfiles()




export default function PeopleList() {
    const [profiles, setProfiles ] = useState(InitialProfiles);
    const [inputSearchValue, setInputSearchValue] = useState("")

function handleOnSubmit(event) {
    event.preventDefault();
    console.log("form submitted", event)
    const searchTerm = event.currentTarget.elements.search.value; 
    console.log(searchTerm, "searchTerm")


setProfiles(prevProfiles => {
    return prevProfiles.filter((person) => { 
        return person.firstName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
})
});
}



    return (
        <div className="card-body w-96">
            <section className='mb-2'>
                <form onSubmit={handleOnSubmit}
                className="flex flex-col gap-4"> 
                <label htmlFor="search" className='text-sm'>
                    search
                </label>

                    <input
                    type="search"
                    id= "search"
                    name = "search"
                    className="input input-bordered input-primary w-full max-w-xs"
                    value={inputSearchValue}
                    onChange={(event) => {
                        setInputSearchValue(event.currentTarget.value);
                    }}
                    
                    placeholder="search" />
                    <input type = "submit" className="btn btn-success cursor-pointer" />¨¨
                    <button type="reset" className="btn btn-error cursor-pointer"
                    onClick={() => setProfiles(InitialProfiles)}></button>
                    </form>
            </section>
            {profiles.map(({ id, firstName }) => {
            return (
                <h2 className="w-full p2 m2 border-solid card-title justify-center" key={id}>
                    {firstName}
                </h2>
                );
        })}
        </div>
    

        ) 
}



/**
* some function is used to check if some elements in an array meets a certain condition
 */


const values = ["Alex", "Sander", "Ali", "Monde", "Håkon", ];

console.log(values, "values");
const didMatchCondition = values.some ((value) => value.includes("Alex"));

console.log("USING SOME()didMatchCondition" ,(didMatchCondition));



const modules = [
    { name: "Introduction to Programming", isComplete: false },
    { name: "HTML", isComplete: false },
    { name: "CSS", isComplete: false },
    { name: "JavaScript", isComplete: false },
  ];
  
  const isSomeCoursesFinished = modules.some((currentModule, index) => {
    console.log("index", index);
    return currentModule.isComplete === true;
  });
  
  console.log("USING SOME()",isSomeCoursesFinished);

/**
 * every function is used to check if every element in an array meets a certain condition
 * just use every instead of some in the code above
*/



const recipe = {
    ingredient_0: "Egg",
    ingredient_1: "Milk",
    ingredient_2: "Flour",
  };
 
  /**
   * for in loop is used to loop through the keys of an object
   */
for (const item in recipe) {  
    console.log("using FOR IN LOOP", "key", recipe,"value", [item]);
  }



/**
 * Object.keys() is used to get the keys of an object as an array
 */
const keysArray = Object.keys(recipe);
console.log("USING keysArray",keysArray,);



/**
* here we use object.keys and map to loop through the keys of the recipe object
 */
Object.keys(recipe).map(item => {
    console.log("using map", item);
});


Object.entries(recipe).forEach(([key, value]) => {
    console.log("FOR EACH", "key", key, "value", value);
});



/**
 * hesh lesson so its repition
 */

/**
 * q1 convert all the elements to their squares */

const numbers = [1, 2, 3, 4]

const squareNumbers = numbers.map(num => num * num);
console.log("Squarenumbers>>>", squareNumbers)


/**
 * q2 map on the array, want to add hello before each item in console log
 */
const names = ["Alex", "Hesh", "Johnny"]

const modifiedNames = names.map(name => `Hello ${name}`);
console.log("modifiedNames>>>", modifiedNames)


const tShirts =  ["t-shirt 1", "t-shirt 2", "t-shirt 3", "t-shirt 4"]

const smileyTshirts = tShirts.map(tShirt => `${tShirt} 💹`);
console.log(smileyTshirts)


let employee = {
    empname: "Alex",
    department: "IT",
    details: function() {
        return this.empname + " works in " + this.department;
    }
}; 
console.log(employee.details());


/**
 * q5 - imagine a school, the school has a digital system to track books
 * in its library each book in the system as attributes
 * like title author and a method do display its availability status 
 */
/**
 * title: how i met ur mom
 * author: hesham el masry
 * a boolean to check for availability
 * you need to check if the title is availableor not the title is the name of the book
 * 
 */

const prestigeAcademy = [
    {
        title: "how i met ur mom",
        author: "hesham el masry", 
        isAvailable: true,
        availability: function() {
            return this.isAvailable ? "available" : "not available";
        }
    },
]
console.log(prestigeAcademy[0].availability());

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const filterednumbers = numbers1.filter (num => num > 2);
console.log("filterednumbers>>>>", filterednumbers);


const fedStudents = [
    {
        name: "Alex",
        score: 100,
    },
    {
        name: "Hesh",
        score: 69,
    },
    {
        name: "Ali",
        score: 1,
    },
    {
        name: "Monde",
        score: 80,
    },
];

const passedStudents = fedStudents.filter (student => student.score >= 80);
console.log("passedstudents>>>>", passedStudents)

const failedStudents = fedStudents.filter (student => student.score < 10);
console.log("This student failed AS FUCK", failedStudents)


const mixedArray = [10, null, "hello", undefined, 42, null, "world"];

const filterArray = mixedArray.filter(value => (!value != null));
console.log("did we remove shit",filterArray)

const products = [
    {
        name: "laptop", price: 1000, inStock: true
    },
    {
        name: "mouse", price: 50, inStock: true
    },
    {
        name: "screen", price: 500, inStock: false
    },
    {
        name: "chair", price: 2, inStock: true
    },
];

const isProductInStock = products.filter(({ inStock, price }) => inStock && price < 200);

console.log("isProductInStock????", isProductInStock)

const arrays =  [[1,2,3], [4,5], [6,7,8,9]]

const fullArray = arrays.reduce((acc, currentArray) => {
    return acc.concat(currentArray)
},[])
console.log(fullArray)