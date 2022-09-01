let date1 = new Date("sep-09-2022");
let date2 = new Date("sep-05-2022");

const getDays = (date1, date2) => {
  let gapInMilliSecond = date1.getTime() - date2.getTime();
  let convertMilliSecondIntoDays = Math.ceil(gapInMilliSecond / (1000 * 60 * 60 * 24));
  return convertMilliSecondIntoDays;
};
console.log(getDays(date1, date2));
