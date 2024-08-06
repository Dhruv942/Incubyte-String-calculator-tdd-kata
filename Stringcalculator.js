function add(numbers) {
  if (numbers.startsWith("//")) {
    return handleCustomDelimiters(numbers);
  }

  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  return calculateSum(numbers, [",", "\n"]);
}

function handleCustomDelimiters(numbers) {
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
  return calculateSum(numsString, delimiters);
}

function calculateSum(numbers, delimiters) {
  const nums = splitNumbers(numbers, delimiters).map(Number);
  validateNumbers(nums);
  let sum = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= 1000) {
      sum += nums[i];
    }
  }
  return sum;
}

function splitNumbers(numbers, delimiters) {
  const escapedDelimiters = delimiters.map((delimiter) =>
    delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  );
  const splitRegex = new RegExp(escapedDelimiters.join("|"));
  return numbers.split(splitRegex);
}

function validateNumbers(nums) {
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }
}

module.exports = { add };
