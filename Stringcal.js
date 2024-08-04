class StringCalculator {
  add(expression) {
    if (!expression) return 0;
    var pieces = expression.split(/[\n,]+/);
    var sum = 0;
    for (var i = 0; i < pieces.length; i++) {
      sum += parseInt(pieces[i] || 0);
    }
    return sum;
  }
}

module.exports = StringCalculator;
