function bubblesort(arr) {
    var i, j;
    for(i = 0; i < arr.length; i ++) {
        for(j = 0; j < (arr.length - i - 1); j ++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
 console.log(arr);
}

var arr = [7, 6, 1, 3, 5, 6];

bubblesort(arr);