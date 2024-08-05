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
      return inputs;
    }

    const currentDelimiter = delimiters[0];
    const remainingDelimiters = delimiters.slice(1);

    let splitResults = [];
    for (let i = 0; i < inputs.length; i++) {
      splitResults = splitResults.concat(inputs[i].split(currentDelimiter));
    }
    return this.splitRecursively(splitResults, remainingDelimiters);
  }

  calculateSum(numbers) {
    let sum = 0;
    let negatives = [];

    for (let i = 0; i < numbers.length; i++) {
      let num = parseInt(numbers[i] || 0);
      if (num < 0) {
        negatives.push(num);
      }

      sum += num;
    }

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    return sum;
  }
}

module.exports = StringCalculator;
