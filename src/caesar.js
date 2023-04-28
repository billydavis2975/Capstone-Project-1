// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    if (shift === undefined || shift === 0 || shift > 25 || shift < -25){ //making sure all constraints are met
      return false
    }
    if (encode === false){ //flipping shift if encode  is false
      shift = -shift
    }


    const inputLower = input.toLowerCase(); //ensuring all letters are lowercase when they enter the loop. 
    const minValue = 97; // a
    const maxValue = 122; // z 
    let result = [];
  
   
    for (let i = 0; i < inputLower.length; i++) {  //looping through to chane letters into numbers in order to apply shift value
      let oldCharCode = inputLower.charCodeAt(i); 
      let newCharCode = oldCharCode + shift;
      if(oldCharCode >= minValue && oldCharCode <= maxValue ){ //this case is for letters
        if(newCharCode < minValue) {
          newCharCode += 26; // brings number back into range if it was below (less than "a")
        }
        if(newCharCode > maxValue) {
          newCharCode -= 26; // brings number back into range if it was above (more than "z")
        }
      } else { //non letters, ignore shift.
        newCharCode -= shift;
      }
      let finalSentence = String.fromCharCode(newCharCode); //returning numbers to letter form
      result.push(finalSentence); // adding them all together into an array.
    }
  
    return result.join(""); //joining characeters into sentence from array. 
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

