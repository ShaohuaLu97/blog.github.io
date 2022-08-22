const x = {
    name: 'Josh',
    gender: 'Male',
    age: 32,
    married: true,
    favSport: 'tennis',
    education: 'master'
};
const y = {
    name: 'Tim',
    gender: 'Male',
    age: 32,
    married: false,
    favFood: 'pasta'
};

const compareObjects = (x = {}, y = {}) => {
   const commonKey = Object.keys(x).filter(key => {
      if(y.hasOwnProperty(key)){
         return true;
      };
      return false;
   });
   return commonKey;
};
console.log(compareObjects(x, y));