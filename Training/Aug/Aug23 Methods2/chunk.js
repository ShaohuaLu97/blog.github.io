// const chunkArray = (arr, size) => {
//     var result = [];

//     for(i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, size + i))
//     }
//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2));

function test(n, arr) {
    return n > arr.length ? [] : arr.slice(n-1).map((a, b) => {
        return arr.slice(b, b+n)
    })
}

console.log(test(3, [1, 3, 5, 7]));