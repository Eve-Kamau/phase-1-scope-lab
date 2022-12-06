//Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';
console.log(customerName);

//Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName(){
return customerName = customerName.toUpperCase();}

//Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
var bestCustomer;
function setBestCustomer() {
  var bestCustomer = 'not bob';
  return bestCustomer;
    }
    setBestCustomer();

//See the consequences of declaring a variable in global scope;
//Write a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer(){
    var setBestCustomer = 'maybe bob';
    console.log(setBestCustomer);
}overwriteBestCustomer();

//Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; 
//Be sure to assign it some initial value. 
//Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant -
//Notice what JavaScript does when you try to change the constant.

const leastFavoriteCustomer = 'kate';

function changeLeastFavoriteCustomer() {
var leastFavoriteCustomer = 'rose';
console.log(leastFavoriteCustomer);
}
changeLeastFavoriteCustomer();







/*Fix the Scope
    declare customerName to be bob in global scope
      1) returns the customerName
    upperCaseCustomerName()
      2) modifies the customerName variable
    setBestCustomer()
      3) setBestCustomer
    overwriteBestCustomer()
      4) overwrites the best customer
    changeLeastFavoriteCustomer()
      5) unsuccessfully tries to reassign the least favorite customer*/


/*function upperCaseCustomerName(){
    var upperName = customerName.toUpperCase();
    console.log(upperName);
  }
upperCaseCustomerName();

function setBestCustomer() {
    var customerName = 'not bob';
    console.log(customerName);
}
setBestCustomer();*/




/*function setBestCustomer() {
    var bestCustomer = customerName;
    console.log(bestCustomer);
    }
    setBestCustomer();*/



/*function setBestCustomer() {
    var customerName = bestCustomer;
    return customerName;
    }
    setBestCustomer();*/