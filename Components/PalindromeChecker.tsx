import React, { useEffect, useState } from 'react';

export const PalindomeChecker = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState('');

  const isItAPalindrome = (): void => {
      let arrToCheck = input.split('');
      setResults('');

      for (let i = 0; Math.ceil(arrToCheck.length/2); i++) {
        let firstLetter = arrToCheck[i];
        let lastLetter = arrToCheck[arrToCheck.length - (i + 1)]

        if (firstLetter !== lastLetter) {
          setResults("No, it's not a palindrome.")
          break;
        }

        if (i === Math.floor(arrToCheck.length/2)) {
          setResults("Yes! It's a palindrome.")
          return;
        }
      }
  }

  useEffect(() => {
    if (results) {
      setResults('');
    }
  }, [input]);


  return (
    <div>
      <h2>
        {results}
      </h2>
      <input
        type="text"
        placeholder="Enter a word"
        onChange={e => setInput(e.target.value.toLowerCase())}
      />
      <button onClick={isItAPalindrome}>Run Check</button>
    </div>
  );
};
