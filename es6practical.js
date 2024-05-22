

// 1.  Data Manipulation with Destructuring:

// You have an object representing a product with properties like name, price, category, and stock. Write functions using destructuring to:

// Extract the name and price properties and display them in a product listing.
// Create a new object with only the category and stock properties.
// Update the stock property of the original object by subtracting a purchased quantity.

const product = {
    name : "Doe", 
    price : 40, 
    category : "new",
    stock : 65

}
const productlist = () => {
    const { name, price} = product;
    console.log(`Product name: ${name}`);
    console.log(`Price: ${price}`);
    

}

const extractList = () => {
    const { category, stock} = product;
    console.log(`Product name: ${category}`);
    console.log(`Price: ${stock}`);
    

}
const updateList = (purchasedAmount) => {
  return  product.stock -= purchasedAmount
}
productlist()
extractList()
console.log(updateList(40))

// 2.  Efficient Iteration with for...of loop:
 


// Imagine you have an array of student objects with properties like name and grades. Write functions using the for...of loop to:

// Calculate the average grade of all students in the array.
// Find the student with the highest grade.
// Print the names of all students who got an A (assuming grades are stored as letters).
// 3.  Arrow functions and Concise Coding:

// You're working on a shopping cart application.  Rewrite the following functions using arrow functions for cleaner code:

// A function that takes a product object and returns its total price including a 18% VAT.
// A function that checks if a product is in stock (stock > 0).
// A function that takes two numbers and returns their product (multiplication).
// 4.  Working with Maps and Sets:

// You're building a recommendation system.  Simulate this using Sets and Maps:

// Create a Set to store unique user IDs who viewed a particular product.
// Create a Map where the key is a product ID and the value is a Set of user IDs who viewed that product.
// Write functions to add a user view to the system and recommend products to a user based on their previously viewed items (find products viewed by similar users).
// 5.  Using Template Literals for Readable Strings:

// You're working on a blog post.  Rewrite the following code using template literals for better readability:

// Create a string that displays a product name, price, and a short description.
// Create a welcome message for a user, including their name and the current date.
// Bonus Challenge:

// Combine these concepts to build a small, interactive program.  For example, create a command-line application for managing a to-do list using ES6 features like arrow functions, template literals, and arrays with methods like map, filter, etc.