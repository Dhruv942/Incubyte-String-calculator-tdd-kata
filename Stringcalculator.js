function add(numbers) {
  if (numbers.startsWith("//")) {
    let delimiterEndIndex = numbers.indexOf("\n");
    let delimiter = numbers.slice(2, delimiterEndIndex);
    if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
      delimiter = delimiter.slice(1, -1);
    }
    numbers = numbers.slice(delimiterEndIndex + 1);
    const nums = numbers
      .split(
        new RegExp(`${delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")}`)
      )
      .map(Number);
    const negatives = [];
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        negatives.push(nums[i]);
      }
      if (nums[i] > 1000) {
        nums[i] = 0;
      }
    }
    if (negatives.length > 0) {
      throw new Error("negative numbers not allowed: " + negatives.join(", "));
    }
    return nums.reduce((sum, num) => sum + num, 0);
  }

  if (numbers === "") return 0;
  if (!isNaN(numbers)) return parseInt(numbers, 10);

  const nums = numbers.split(/,|\n/).map(Number);
  const negatives = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negatives.push(nums[i]);
    }
    if (nums[i] > 1000) {
      nums[i] = 0;
    }
  }
  if (negatives.length > 0) {
    throw new Error("negative numbers not allowed: " + negatives.join(", "));
  }

  return nums.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
