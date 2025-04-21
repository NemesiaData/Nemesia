async function celestialFactorial(n) {
  if (n <= 1) return 1;
  return n * await celestialFactorial(n - 1);
}

async function cosmicSequence(num) {
  if (num <= 1) return num;
  return await cosmicSequence(num - 1) + await cosmicSequence(num - 2);
}

async function generateNebulaArray(length, min, max) {
  let arr = [];
  for (let i = 0; i < length; i++) {
      arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return arr;
}

async function starForgeMerge(arr1, arr2) {
  let result = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
          result.push(arr1[i]);
          i++;
      } else {
          result.push(arr2[j]);
          j++;
      }
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}

async function gravityFindLongest(arr) {
  let longest = '';
  arr.forEach(str => {
      if (str.length > longest.length) longest = str;
  });
  return longest;
}

async function collapseArray(arr) {
  return arr.reduce((flat, toFlatten) => {
      return flat.concat(Array.isArray(toFlatten) ? collapseArray(toFlatten) : toFlatten);
  }, []);
}

async function reverseTime(str) {
  return str.split(' ').reverse().join(' ');
}

function eventHorizonDebounce(func, delay) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

function darkMatterThrottle(func, delay) {
  let lastTime = 0;
  return function(...args) {
      const now = new Date().getTime();
      if (now - lastTime >= delay) {
          func.apply(this, args);
          lastTime = now;
      }
  };
}

async function singularityMatrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
          sum += matrix[i][j];
      }
  }
  return sum;
}

async function quantumClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

async function executeCosmicCalculations() {
  let factorialResult = await celestialFactorial(6);
  console.log(`Celestial factorial of 6: ${factorialResult}`);

  let sequenceResult = await cosmicSequence(10);
  console.log(`Cosmic sequence of 10: ${sequenceResult}`);

  let nebulaArray = await generateNebulaArray(8, 1, 100);
  console.log(`Generated nebula array: ${nebulaArray}`);

  let mergedArray = await starForgeMerge([1, 3, 5], [2, 4, 6]);
  console.log(`Star forge merged array: ${mergedArray}`);

  let longestStr = await gravityFindLongest(['apple', 'banana', 'kiwi']);
  console.log(`Gravity longest string: ${longestStr}`);

  let collapsedArray = await collapseArray([1, [2, 3], [4, [5, 6]]]);
  console.log(`Collapsed array: ${collapsedArray}`);

  let reversedStr = await reverseTime('the quick brown fox');
  console.log(`Reversed time string: ${reversedStr}`);

  const debouncedFunc = eventHorizonDebounce(() => console.log('Event horizon debounced'), 1500);
  debouncedFunc();

  const throttledFunc = darkMatterThrottle(() => console.log('Dark matter throttled'), 1500);
  throttledFunc();
  throttledFunc();

  let matrixSum = await singularityMatrixSum([[1, 2], [3, 4]]);
  console.log(`Singularity matrix sum: ${matrixSum}`);

  let clonedObj = await quantumClone({ name: 'Alice', age: 25 });
  console.log(`Quantum cloned object: ${JSON.stringify(clonedObj)}`);
}
