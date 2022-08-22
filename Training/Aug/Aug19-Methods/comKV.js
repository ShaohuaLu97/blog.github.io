const x = {
    name: 'Josh',
    gender: 'Male',
    age: 32,
    married: true
};
const y = {
    name: 'Tim',
    gender: 'Male',
    age: 32,
    married: false
};

const compareObjects = (x = {}, y = {}) => {
   const commonValueKey = Object.keys(x).filter(key => {
      if(x[key] === y[key] && y.hasOwnProperty(key)){
         return true;
      };
      return false;
   });
   return commonValueKey;
};
console.log(compareObjects(x, y));