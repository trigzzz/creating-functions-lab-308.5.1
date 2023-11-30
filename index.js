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

    




    //Part 2: Thinking Methodically

