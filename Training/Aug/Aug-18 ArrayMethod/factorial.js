// function factorial(n){
//     if(n == 0 || n == 1){
//         return 1;
//     }else{
//         return n * factorial(n-1);
//     }
// }

// console.log(factorial(5))

function factorial(num) {
    var arr = [], result;

    for (var i = 1; i <= num; i++) {
        arr.push(i);
    }

    //call back function
    result = arr.reduce(function (preV, currV) {
        return preV * currV;
    }, 1);

    console.log(result);
}
factorial(6);