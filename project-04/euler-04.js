/*Ok, so it's asking for the largest palindrome
made from the product of two 3-digit numbers

Factors range from 100 x 100 to 999 x 999, 
so product will be 10000 to 998001

If possible, would make sense to start from largest
down, because then we could stop after finding the first 
palindrome that fits criteria.

(Otherwise might have to store results to array, sort, find largest...)

BUT this might be tricky because a given pal might not 
have two 3-digit factors. Might need to start at 997799
and test divisibility by 999 on down, checking to see, if
modulus === 0 && 100 <= otherFactor <= 999

First we'd need to define a palindrome... 
convert to string, then ask does first = last?
start with i = 0, go until i = 2 (for these bounds), i++
does currentPal[i] ===currentPal[currentPal.length - (i + 1)]
That'll do
[0] and [length - 1]
[1] and [length - 2]
[2] and [length - 3]
*/

var getlargestPalPdct = function(digits) {
	for (i=998001, i>=10000, i--) {
		//here we need to check if it's a palindrome
		//first, we convert i to a string
		var pal = i;
		var stringPal = pal.toString();
		//not sure about syntax here; palCheck should teturn true
		//if pal is a palindrome
		var palCheck = function() {
			//Here, we can substitute j < digits... or something?
			for (j=0, j<3, j++) {
				if (stringPal[j] === stringPal[stringPal.length - (j + 1)]) {
					return true;
				} 
				else {
					return false;
				}
			}
		}
		//check for divisibility
		var pdctCheck = function() {
			for (k=999, k>99, k--) {
				if (pal % k === 0 && 100 <= pal / k <= 999) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		//if pal is a palindrome
		if (palCheck(pal)) {
			//check for divisibility
			pdctCheck(pal);
			var answer1 = pal;
		}
	}
}


//This ties the button we made to a JS var button*/
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

  /*
  var largestPalPdct = getLargestPalPdct(inputNum);

  var answer1 = document.getElementById("answer1");
 
  answer1.innerHTML = largestPalPdct;
  */
 
  }