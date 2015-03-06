var multSum = 0;
 
for (i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        multSum += i;
    }
};
 
console.log(multSum);
 
var result = document.getElementById("result");
 
result.innerHTML = multSum;