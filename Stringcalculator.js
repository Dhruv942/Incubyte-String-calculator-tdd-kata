function add(numbers) {
  if (numbers === "") return 0;

  const { delimiter, numbersList } = parseInput(numbers);
  const nums = numbersList.split(delimiter).map(Number);
  checkForNegativeNumbers(nums);

  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= 1000) {
      sum += nums[i];
    }
  }

  return sum;
}

function parseInput(numbers) {
  if (numbers.startsWith("//")) {
    const delimiter = getDelimiter(numbers);
    const numbersList = numbers.slice(numbers.indexOf("\n") + 1);
    return { delimiter: new RegExp(delimiter, "g"), numbersList };
  }
  return { delimiter: /,|\n/, numbersList: numbers };
}

function getDelimiter(numbers) {
  const delimiter = numbers.slice(2, numbers.indexOf("\n"));
  return delimiter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function checkForNegativeNumbers(nums) {
  const negatives = nums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }
}

module.exports = { add };
