
function average(numbers) {

  if(numbers.length == 0) return NaN; // for empty array

  for(let i=0; i < numbers.length; i++){
    if(numbers[i] == NaN) {
      numbers.splice(i, 1);
    }
  }

  return numbers.reduce((p, c)=> p + c, 0.01) / numbers.length;
}

module.exports = {average};
