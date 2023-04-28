// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("translate letters i and j to 42 when encoding", () => {
        const message = "playoff jimmy";
        const actual = polybius(message);
        const expected = "53131145431212 4242232345"

        expect(actual).to.equal(expected);
    });

    it("translate letters i and j to 42 when decoding", () => {
        const message = "53131145431212 4242232345";
        const actual = polybius(message, false);
        const expected = "playoff (i/j)(i/j)mmy"

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const message = "ChEcK";
        const actual = polybius(message);
        const expected = "3132513152";

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message when encoding", () => {
        const message = "taco tuesday";
        const actual = polybius(message);
        const expected = "44113143 44545134411145";

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in the message when decoding", () => {
        const message = "44113143 44545134411145";
        const actual = polybius(message, false);
        const expected = "taco tuesday"

        expect(actual).to.equal(expected);
    });
});