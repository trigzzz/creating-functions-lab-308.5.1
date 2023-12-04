// Part 1: Thinking Functionally

// Take an array of numbers and return the sum.Take an array of numbers and return the sum.
    function calculateSum(myNums) {
        let sum = 0;
      
        for (let i = 0; i < myNums.length; i++) {
          sum += myNums[i];
        }
      
        return sum;
      }
    
    
    const myArray = [1, 2, 3, 4, 5];
    const result = calculateSum(myArray);
    console.log(result);

    // Take an array of numbers and return the average.

    function averageOfNumbers(numbers) {
        if (numbers.length === 0) {
            return 0; 
        }
    
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        return sum / numbers.length;
    }
    
    
    const numbers = [1, 2, 3, 4, 5];
    const resultAverage = averageOfNumbers(numbers);
    console.log(resultAverage); 
    

    // Take an array of strings and return the longest string.

    function longestString(strings) {
        if (strings.length === 0) {
            return null; 
        }
    
        return strings.reduce((longest, current) => (current.length > longest.length ? current : longest), strings[0]);
    }
    
    const strings = ['say', 'hello', 'in', 'the', 'morning'];
    const resultLongestString = longestString(strings);
    console.log(resultLongestString); 
    
    // Take an array of strings, and a number and return an array of the strings that are longer than the given number.
    
    function stringsLongerThan(arr, length) {
        return arr.filter(str => str.length > length);
    }
    
    const inputArray = ['im', 'loving', 'java', 'script', 'woohoo!'];
    const minLength = 4;
    
    const resultArray = stringsLongerThan(inputArray, minLength);
    console.log(resultArray);

    //Take a number, n, and print every number between 1 and n without using loops. Use recursion.

    function printNumbersRecursive(n) {
        if (n > 0) {
            printNumbersRecursive(n - 1);
            console.log(n);
        }
    }
    
    const n = 8;
    printNumbersRecursive(n);
    
    




    //Part 2: Thinking Methodically

