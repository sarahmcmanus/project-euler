var primeFactorize = function(input){
  var primeFactorsArray = [];
  var remain = input;
  var i = 2;
  while (i <= remain) {
    if (remain % i === 0) {
      primeFactorsArray.push(i);
      remain = remain / i;
    } else {
      i++;
    }
  }
  return primeFactorsArray;
};
 
var listOfPrimeFactors = primeFactorize(600851475143);
    
var greatestPrimeFactor = listOfPrimeFactors[listOfPrimeFactors.length - 1];
 
 
/*alert("The prime factors are " + listOfPrimeFactors + "; the GPF is " + greatestPrimeFactor);
*/

/*This ties the button we made to a JS var button*/
var button = document.getElementById("button");

//This says, when the button is clicked do the function handleSubmit
//addEventListener expects a function that takes one argument, 
//and that argument is the event
button.addEventListener("click", handleSubmit);

//This is the function with just one arg which is event
function handleSubmit (e) {
  var userInput = document.getElementById("input");
  //This takes the stuff from form (userInput.value) and turns it into an Int
  var inputNum = parseInt(userInput.value);

  if (isNaN(inputNum)) {
    alert("Error: Please input a number");
    return;
  } 
  // if there's no period, indexOf returns -1, so if it is not equal
  // to -1, then there is a period
  else if (userInput.value.indexOf(".") !== -1 ) {
    alert("Error: Please input a positive integer... \nI don't know how to handle decimals yet");
    return;
  }
  else if (userInput.value.indexOf("-") !== -1) {
    alert("Error: Please input a positive integer... \nI don't know how to handle negative numbers yet");
    return;
  }

  var listOfPrimeFactors = primeFactorize(inputNum);

  var answer1 = document.getElementById("answer1");
 
  answer1.innerHTML = listOfPrimeFactors;
 
  var answer2 = document.getElementById("answer2");
 
  answer2.innerHTML = listOfPrimeFactors[listOfPrimeFactors.length - 1];
}