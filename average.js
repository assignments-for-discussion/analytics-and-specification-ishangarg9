
function average(numbers) {
  return numbers.reduce((p, c)=> p + c, 0.1) / numbers.length;
}

module.exports = {average};
