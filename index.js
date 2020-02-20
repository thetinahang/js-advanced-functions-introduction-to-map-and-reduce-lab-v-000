// Your code here
function mapToNegativize(sourceArray) {
  return sourceArray.map(num => num * -1);
};

function mapToNoChange(sourceArray) {
  return sourceArray;
};

function mapToDouble(sourceArray) {
  return sourceArray.map(num => num * 2);
};

function mapToSquare(sourceArray) {
  return sourceArray.map(num => num ** 2);
};

function reduceToTotal(sourceArray, index) {
  let value = 0;
  if (index) {
    value = index;
  }
  for (const e of sourceArray) {
    value = value + e;
  }
  return value;
};

function reduceToAllTrue(sourceArray) {
  return sourceArray.reduce(function(total, value) {
    if (total && value) {
      return true;
    } else {
      return false;
    }})
};

function reduceToAnyTrue(sourceArray) {
  return sourceArray.reduce(function(total, value) {
    if (total || value) {
      return true;
    } else {
      return false;
    }
  })
};
