
function average(numbers) {

  var n = numbers.length;
  if(n == 0) return NaN; // for empty array

  for(let i=0; i < n; i++){
    if(isNaN(numbers[i])) {
      numbers.splice(i, 1);
      n = n - 1;
    }
  }

  const avg = numbers.reduce((p, c)=> p + c, 0) / n;

  //approximating average
  const apx = parseFloat(avg.toFixed(2));
  return apx;
}

module.exports = {average};
