class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;
    if (!isNaN(numbers)) return parseInt(numbers, 10);
  }
}

module.exports = StringCalculator;
