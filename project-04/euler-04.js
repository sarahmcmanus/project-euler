var maxFactor = function(digits) {
  return Math.pow(10, digits) - 1;
}

var minFactor = function(digits) {
  return Math.pow(10, (digits - 1));
}
  
var maxPdct = function(digits) {
  return Math.pow(maxFactor(digits), 2);
}
  
var minPdct = function(digits) {
  return Math.pow(minFactor(digits), 2);
}
  

//Here digits is the max digits of products
var palCheck = function(number, digits) {
  var stringPal = number.toString();
  
  var sameDigit = function(j) {
    if (stringPal[j] === stringPal[stringPal.length - (j + 1)]) {
      return true;
    }
    else {
      return false;
    }
  }
  
  j = 0;
  
  while (j < digits) {
    if (sameDigit(j) === false) {
      return false;
    }
    else if (sameDigit(j) && j < (digits - 1)) {
      j++;
    }
    else {
      return true;
    }
  }
}

//alert("Is it a palindrome? " + palCheck(998899,3));
var factors = [];

var pdctCheck = function(number,digits) {
  var maxFactor = function(digits) {
  	return Math.pow(10, digits) - 1;
	}

	var minFactor = function(digits) {
  	return Math.pow(10, (digits - 1));
	}
  
  var k = maxFactor(digits);
    
  while (k >= minFactor(digits)) {
    if ((number % k === 0) && (number / k <= maxFactor(digits))) {
      factors.push(k, (number / k)); 
      return true;
    }
    else if (number % k !== 0 && k > minFactor(digits)) {
      k--;
    }
    else {
      return false;
    }
  }
}
  

//alert("Are there two 3-digit products? " + pdctCheck((789*899.5),3))

var getLargestPalPdct = function(digits) {
  var number = maxPdct(digits);
  
  while (number >= minPdct(digits)) {
    if (palCheck(number, digits) && pdctCheck(number, digits)) {
      return number;
    }
    else {
      number--;
    }
  }
}


//alert(minPdct(3));

//alert("The largest palindrome product is " + getLargestPalPdct(3) + " and the factors are " + factors[0] + " and " + factors[1])

//PROBLEM: Infinite loop if digits = 4
//alert(getLargestPalPdct(4));

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

  var largestPalPdct = getLargestPalPdct(inputNum);

  var answer1 = document.getElementById("answer1");
 
  answer1.innerHTML = largestPalPdct;
 
  var answer2 = document.getElementById("answer2");
 
  answer2.innerHTML = factors[factors.length - 2] + " and " + factors[factors.length -1];
}