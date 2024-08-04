class StringCalculator {
  add(expression) {
    if (!expression) return 0;

    if (expression.startsWith("//")) {
      const delimiterEndIndex = expression.indexOf("\n");
      const customDelimiter = expression.substring(2, delimiterEndIndex);

      expression = expression.substring(delimiterEndIndex + 1);

      return this.calculateSum(
        this.getPieces(expression, [customDelimiter, ",", "\n"])
      );
    }

    return this.calculateSum(this.getPieces(expression, [",", "\n"]));
  }

  getPieces(expression, delimiters) {
    return this.getSubpieces([expression], delimiters);
  }

  getSubpieces(far, delimiters) {
    if (delimiters.length === 0) {
      return far.flatMap((piece) => piece.split(delimiters[0]));
    }

    const delimiter = delimiters.pop();
    let subpieces = [];
    for (let i = 0; i < far.length; i++) {
      subpieces = subpieces.concat(far[i].split(delimiter));
    }
    return this.getSubpieces(subpieces, delimiters);
  }

  calculateSum(pieces) {
    let sum = 0;
    for (let i = 0; i < pieces.length; i++) {
      sum += parseInt(pieces[i] || 0);
    }
    return sum;
  }
}

module.exports = StringCalculator;
