// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if alphabet isn't exactly 26 characters long", () =>{
        const message = "taco tuesday";
        const alphabet = "tiny";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });

    it("should translate the phrase based on the alphabet given to the function", () => {
        const message = "gordita crunch";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet);
        const expected = "ugkrozq ekxfei"
        
        expect(actual).to.equal(expected);
    });

    it("should return false if there is any duplicate characters in the given alphabet", () => {
        const message = "who cares";
        const alphabet = "qwertyuiopasdfghjklzxcvbnq";
        const actual = substitution(message, alphabet);

        expect(actual).to.be.false;
    });

    it("should maintain spaces in the message when encoding", () => {
        const message = "this is a test";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet);
        const expected = "ziol ol q ztlz";

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message when decoding", () => {
        const message = "ziol ol q ztlz";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet, false);
        const expected = "this is a test";

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "This is a Test";
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const actual = substitution(message, alphabet);
        const expected = "ziol ol q ztlz";

        expect(actual).to.equal(expected);
    });
});