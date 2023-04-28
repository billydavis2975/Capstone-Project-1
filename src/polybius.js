// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let square = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };

    let result = "";
    let almostDone = "";
    const inputLower = input.toLowerCase(); //getting letters to lowercase
    const letters = Object.keys(square);
    const numbers = Object.values(square);

    if (encode === true) {
      //going from letters to numbers
      for (let i = 0; i < inputLower.length; i++) {
        //looping through the input
        let letterIndex = letters.indexOf(inputLower[i]);
        if (letters.includes(inputLower[i])) {
          result += numbers[letterIndex];
        }
        if (inputLower[i] === " ") {
          result += inputLower[i];
        }
      }
    } else {
      //letters to numbers

      let newArray = [];
      for (let b = 0; b < input.length; b += 2) {
        if (input[b] === " ") {
          newArray.push(input[b]);
          b -= 1 
        } else {
        newArray.push(input.slice(b, b + 2));}
      }
      for (let z = 0; z < newArray.length; z++) {
        if (newArray[z] === " ") {
          almostDone += newArray[z];
        } else {
          let numberIndex = numbers.indexOf(parseInt(newArray[z]));

          if (numberIndex === 8) {
            almostDone += "(i/j)";
          } else {
            if(letters[numberIndex] === undefined){
              return false;
            }
            almostDone += letters[numberIndex];
          }
        }
        result = almostDone;
      }
    }
    return result;
  }


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
