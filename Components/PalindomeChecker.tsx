import React, { useState } from 'react';

export const PalindomeChecker = () => {
  const [input, setInput] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(false);

  function isArrayLengthEven (arrLength: number) {
    if (arrLength % 2 === 0){
      return true;
    }
      return false;
  }

  const isItAPalindrome = (): void => {
      let arrToCheck = input.split('');
      let numOfChecks;

      const isArrayEven = isArrayLengthEven(arrToCheck.length);

      if (isArrayEven) {
        numOfChecks = arrToCheck.length/2;
      } else (
        // There's got to be a smarter way to do this that reads easier
        numOfChecks = (((arrToCheck.length - 1) / 2) + 1)
      )

      for (let i = 0; numOfChecks; i++) {
        let firstLetter = arrToCheck[i];
        let lastLetter = arrToCheck[arrToCheck.length - (i + 1)]

        if (firstLetter !== lastLetter) {
          setIsPalindrome(false);
          return;
        }

        setIsPalindrome(true);
        return;
      }
  }

  return (
    <div>
      <h2>
        {isPalindrome ? 'Yes, it is a Palindrome!' : "No, it's not a Palindrome."}
      </h2>
      <input
        type="text"
        placeholder="Enter a phrase"
        onChange={(e) => setInput(e.target.value.toLowerCase())}
      />
      <button onClick={isItAPalindrome}>Run Check</button>
    </div>
  );
};
