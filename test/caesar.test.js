// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");


describe("caesar", () => {
    it("should return false if shift is 0", () => {
      const message = "testing message";
      const shift = 0;
      const actual = caesar(message, shift);
      expect(actual).to.be.false;
    });

    it("should return false if shift is greater than 25", () => {
        const message = "testing message";
        const shift = 26;
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
      });

     
       
      it("should ignore capital letters", () => {
        const message = "TeStInG";
        const shift = 7;
        const actual = caesar(message, shift);
        const expected = "alzapun"

        expect(actual).to.equal(expected);
      });
      
      it("should handle shifts that go past the end of the alphabet", () => {
        const message = "zippy";
        const shift = 7;
        const actual = caesar(message, shift);
        const expected = "gpwwf";

        expect(actual).to.equal(expected);
      });

      it("should maintain spaces and other nonalphabetic symbols after encoding", () => {
        const message = "369 damn you're fine";
        const shift = 7;
        const actual = caesar(message, shift);
        const expected = "369 khtu fvb'yl mpul";

        expect(actual).to.equal(expected);
      });

      it("should maintain spaces and other nonalphabetic symbols after decoding", () => {
        const message = "369 khtu fvb'yl mpul";
        const shift = 7;
        const actual = caesar(message, shift, false);
        const expected = "369 damn you're fine";

        expect(actual).to.equal(expected);
      })
  });