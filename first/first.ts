function getPermutations(arr: number[], length: number): number[][] {
  if (length === 1) return arr.map(num => [num]);

  return arr.flatMap((num, index) =>
    getPermutations(arr.filter((_, i) => i !== index), length - 1)
      .map(permutation => [num, ...permutation])
    );
  }

function findMaxProductPair(): [number, number] {
  const digits = [1, 3, 5, 7, 9];
  let maxProduct = 0;
  let resultPair: [number, number] = [0, 0];

  
  const twoDigitCombinations = getPermutations(digits, 2).map(([a, b]) => a * 10 + b);
  const threeDigitCombinations = getPermutations(digits, 3).map(([a, b, c]) => a * 100 + b * 10 + c);

  for (const twoDigit of twoDigitCombinations) {
    for (const threeDigit of threeDigitCombinations) {
      const usedDigits = new Set([...twoDigit.toString(), ...threeDigit.toString()].map(Number));

      if (usedDigits.size === 5) {
        const product = twoDigit * threeDigit;

        if (product > maxProduct) {
          maxProduct = product;
          resultPair = [twoDigit, threeDigit];
        }
      }
    }
  }

  return resultPair;
}

const [num1, num2] = findMaxProductPair();

console.log(`result: ${num1}, ${num2}`);

