
function average(numbers) {

  var n = numbers.length;
  if(n == 0) return NaN; // for empty array

  var sum = 0;
  for(let i=0; i < n; i++){
    if(isNaN(numbers[i])) {
      numbers.splice(i, 1);
      n = n - 1;
    }
    else{
      sum = sum + numbers[i];
    }
  }

  const avg = sum / n;

  //approximating average
  const apx = parseFloat(avg.toFixed(2));
  return apx;
}

module.exports = {average};
