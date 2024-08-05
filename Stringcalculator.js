function add(numbers) {
  if (numbers.startsWith("//")) {
    const { delimiters, numsString } = parseDelimiters(numbers);
    return calculateSum(numsString, delimiters);
  }

  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  return calculateSum(numbers, [",", "\n"]);
}

function parseDelimiters(numbers) {
  const delimiterEndIndex = numbers.indexOf("\n");
  const delimiterPart = numbers.slice(2, delimiterEndIndex);

  const delimiters = [];
  const delimiterRegex = /\[(.*?)\]/g;
  let match;
  while ((match = delimiterRegex.exec(delimiterPart)) !== null) {
    delimiters.push(match[1]);
  }

  if (delimiters.length === 0) {
    delimiters.push(delimiterPart);
  }

  const numsString = numbers.slice(delimiterEndIndex + 1);
  return { delimiters, numsString };
}

function calculateSum(numsString, delimiters) {
  const escapedDelimiters = delimiters.map((delimiter) =>
    delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );
  const splitRegex = new RegExp(escapedDelimiters.join("|"));
  const nums = numsString.split(splitRegex).map(Number);

  const negatives = [];
  let sum = 0;

  for (var i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num < 0) {
      negatives.push(num);
    } else if (num <= 1000) {
      sum += num;
    }
  }

  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }

  return sum;
}

module.exports = { add };
