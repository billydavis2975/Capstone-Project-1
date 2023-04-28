// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if(!alphabet){
      return false;
    }
    const alphaL = alphabet.length;
    if (alphaL !== 26 ){ //defining parameters of alphabet input
      return false;
    }
    const repeatTest = alphabet.split('').sort().join(''); //testing for repeat char. sorting characters to put identicals next to each other. 
    for(let z = 0; z < repeatTest.length -1; z++){ // -1 ensures we don't compare final char to undefined. 
      if(repeatTest[z] === repeatTest[ z + 1 ]){ //repeat chars should be ext to eachother post sort, thus the test should kick out any repeats. 
        return false;
      }
    }
    

    let inputLower = input.toLowerCase(); //leters will enter the loop in lowercase
    let result = "";
    const ogAlphabet = "abcdefghijklmnopqrstuvwxyz"; //baseline alphabet
    if(encode === true){
    for(let i = 0; i < inputLower.length; i++){ // created loop 
      if (ogAlphabet.includes(inputLower[i])) { // checking if the input is a letter
        const index = ogAlphabet.indexOf(inputLower[i]); //creates index as variable, will match sub alpha to og alpha
        result += alphabet[index]; //adding the letter to the string 
      } else {  //non letters
        result += inputLower[i]; //adds original char that is not a letter. 
      }
    }
    } else if(encode !== true){ //decoding
      for(let i = 0; i < inputLower.length; i++){ // created loop 
      if (alphabet.includes(inputLower[i])) { // checking if the input matches sub alphabet
        const index = alphabet.indexOf(inputLower[i]); //creates index as variable, will match sub alpha to og alpha
        result += ogAlphabet[index]; //adding the letter to the string 
      } else {  //non alphabet defined
        result += inputLower[i]; //adds original char that is not defined. 
      }
    }
    }
    return result;
  }

 
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
