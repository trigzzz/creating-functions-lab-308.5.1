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

    //Sort the array by age.


    const people = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ];
      
      const sortedByAge = people.sort((a, b) => {
        const ageA = parseInt(a.age);
        const ageB = parseInt(b.age);
        
        return ageA - ageB;
      });
      
      console.log(sortedByAge);

      // Filter the array to remove entries with an age greater than 50.

      const people1 = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ];
      
      const filteredByAge = people1.filter(person => parseInt(person.age) <= 50);
      
      console.log(filteredByAge);
      
      //Map the array to change the “occupation” key to “job” and increment every age by 1.

      const people2 = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ];
      
      const mappedArray = people2.map(person => ({
        id: person.id,
        name: person.name,
        job: person.occupation, 
        age: String(parseInt(person.age) + 1) 
      }));
      
      console.log(mappedArray);
      

      // Use the reduce method to calculate the sum of the ages.

      const people3 = [
        { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
        { id: "48", name: "Barry", occupation: "Runner", age: "25" },
        { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
        { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
        { id: "7", name: "Bilbo", occupation: "None", age: "111" }
      ];
      
      const sumOfAges = people3.reduce((sum, person) => sum + parseInt(person.age), 0);
      
      // Calculate the average age
      const averageAge = sumOfAges / people.length;
      
      console.log("Sum of Ages:", sumOfAges);
      console.log("Average Age:", averageAge);
      
      
      // Part 3

      function incrementAgeInPlace(obj) {
        obj.age = obj.age ? obj.age + 1 : 0;
        obj.updated_at = new Date();
    }
    
    const person = { id: "42", name: "Bruce", occupation: "Knight" };
    incrementAgeInPlace(person);
    console.log(person);
    
    function incrementAgeWithCopyAndReturn(obj) {
        const copy = { ...obj, age: obj.age ? obj.age + 1 : 0, updated_at: new Date() };
        return copy;
    }
    
    const originalPerson = { id: "42", name: "Bruce", occupation: "Knight" };
    const updatedCopy = incrementAgeWithCopyAndReturn(originalPerson);
    
    console.log("Original:", originalPerson);
    console.log("Copy:", updatedCopy);
    