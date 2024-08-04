class StringCalculator {
  add(numbers) {
    if (numbers === "") return 0;

    if (!isNaN(numbers) && numbers.trim() !== "") {
      return parseInt(numbers, 10);
    }

    const pieces = numbers.split(",");
    let sum = 0;

    for (let i = 0; i < pieces.length; i++) {
      sum += parseInt(pieces[i], 10);
    }
    return sum;
  }
}

module.exports = StringCalculator;
