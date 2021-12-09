
function average(numbers) {
  const sum =  numbers.reduce((p, c)=> p + c, 0);
  const avg = (sum / numbers.length) || 0;
  return avg; 
}

module.exports = {average};
