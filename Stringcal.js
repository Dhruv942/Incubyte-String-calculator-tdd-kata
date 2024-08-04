class StringCalculator {
  add(input) {
    if (!input) return 0;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const customDelimiter = input.substring(2, delimiterEndIndex);

      input = input.substring(delimiterEndIndex + 1);

      return this.calculateSum(
        this.splitByDelimiters(input, [customDelimiter, ",", "\n"])
      );
    }

    return this.calculateSum(this.splitByDelimiters(input, [",", "\n"]));
  }

  splitByDelimiters(input, delimiters) {
    return this.splitRecursively([input], delimiters);
  }

  splitRecursively(inputs, delimiters) {
    if (delimiters.length === 0) {
      return inputs.flatMap((input) => input.split(delimiters[0]));
    }

    const currentDelimiter = delimiters.pop();
    let splitResults = [];
    for (let i = 0; i < inputs.length; i++) {
      splitResults = splitResults.concat(inputs[i].split(currentDelimiter));
    }
    return this.splitRecursively(splitResults, delimiters);
  }

  calculateSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += parseInt(numbers[i] || 0);
    }
    return total;
  }
}

module.exports = StringCalculator;
