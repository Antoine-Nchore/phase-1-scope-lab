// Declare a variable in global scope called customerName using the var keyword.
var customerName;

// Write a function that accesses the global customerName variable and uppercases it.
function upperCaseCustomerName() {
  if (customerName) {
    customerName = customerName.toUpperCase();
  }
}

// Write a function that declares a variable called bestCustomer in global scope and assigns it to 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob'; // This creates a global variable bestCustomer.
}

// Write a function that changes the bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'still not bob'; // This modifies the existing global variable bestCustomer.
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'someone';

// Write a function that attempts to change the constant leastFavoriteCustomer.
function changeLeastFavoriteCustomer() {
  // This will result in an error because you cannot change the value of a constant.
  leastFavoriteCustomer = 'new person'; // This will throw an error.
}
