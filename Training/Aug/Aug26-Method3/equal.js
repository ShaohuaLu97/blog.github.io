const x = {
    a: [1, {e:2}],
    b: [3],
    c: 'test'
};

const y = {
    a: [1, {e:2}],
    b: [3],
    c: 'test'
};

// const y = {
//     a: [1, {e:2}],
//     b: [3],
//     c: 'test',
//     d: 'yep'
// };

const compareObjects = (x, y) => {
    if(JSON.stringify(x) === JSON.stringify(y)){
        console.log('Equal')
    } else{
        console.log('Different')
    }
}

(compareObjects(x, y));