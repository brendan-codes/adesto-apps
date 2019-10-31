const mongoose = require('mongoose');


let productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "Product names must be 3 or more characters."]
    },
    quantity: {
        type: Number,
        required: [true, "Must have a quantity"],
        min: [0, "Minimum quantity must be 0 or greater"],
    },
    price: {
        type: Number,
        required: [true, "Must have a price"],
        min: [0, "Minimum price must be 0 or greater"],
    }
}, {timestamps: true})


// For a red belt:
// CRUD operations all working
// Able to create new products
// All products are displayed upon visiting the website
// User may choose a product to see its details
// Able to edit each product
// Edit form is pre-populated with the product's existing data
// Able to delete each product
// Routing
// Root route redirects to '/products' to display all the products
// Route ‘products/new’ displays the form to create a new product
// Successful creation and cancel redirect to the root route
// Route ‘/products/:id’ displays the details of a particular product and the delete button
// Route ‘/products/:id/edit’ displays the pre-populated form to edit a product
// Successful edit redirects to the root route
// Backend validations
// All products must have a name, quantity, and price
// All product names must be at least 3 characters
// Product quantities and prices must be numbers greater than or equal to 0
// Error messages inform the user if the product is not meeting requirements on create and edit
// Error messages are custom-written (not the mongoose default messages)
// HTML and CSS reflect the wireframe to at least 75% accuracy

mongoose.model('Product', productSchema);