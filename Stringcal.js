class StringCalculator {
  add(input) {
    if (!input) return 0;

    if (input.startsWith("//")) {
      const delimiterEndIndex = input.indexOf("\n");
      const delimiterPart = input.substring(2, delimiterEndIndex);

      let delimiters = [",", "\n"];
      if (delimiterPart.startsWith("[")) {
        delimiters = this.extractDelimiters(delimiterPart);
      } else {
        delimiters = [delimiterPart];
      }

      input = input.substring(delimiterEndIndex + 1);
      return this.calculateSum(this.splitByDelimiters(input, delimiters));
    }

    return this.calculateSum(this.splitByDelimiters(input, [",", "\n"]));
  }

  extractDelimiters(delimiterPart) {
    const delimiters = [];
    const delimiterRegex = /\[(.*?)\]/g;
    let match;

    while ((match = delimiterRegex.exec(delimiterPart)) !== null) {
      delimiters.push(match[1]);
    }

    return delimiters;
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
      const num = parseInt(numbers[i], 10);
      if (isNaN(num)) continue;
      if (num < 0) {
        negatives.push(num);
      } else if (num <= 1000) {
        sum += num;
      }
    }

    if (negatives.length > 0) {
      throw new Error(`negative numbers not allowed ${negatives.join(", ")}`);
    }

    return sum;
  }
}

module.exports = StringCalculator;
