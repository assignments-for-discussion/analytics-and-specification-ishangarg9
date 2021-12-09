
function average(numbers) {

  if(numbers.length == 0) return NaN; // for empty array

  for(let i=0; i < numbers.length; i++){
    if(isNaN(numbers[i])) {
      numbers.splice(i, 1);
    }
  }

  const avg = numbers.reduce((p, c)=> p + c, 0) / numbers.length;

  //approximating average
  const apx = parseFloat(avg.toFixed(2));
  return apx;
}

module.exports = {average};
