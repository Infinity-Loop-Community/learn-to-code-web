import {describe, expect, it} from "vitest";
import {indexToChar} from "@/utils/stringUtils"

describe("stringUtils", () => {

  describe("indexToChar", () => {
    it('should throw an error when negative', () => {
      expect(() =>  indexToChar(-1)).toThrow("index must be >= 0 but was -1")
    });

    it('should throw an error when bigger than z', () => {
      expect(() =>  indexToChar(26)).toThrow("index must be <= 25 but was 26")
    });

    it('should translate to smaller letters', () => {
      const a = indexToChar(0)
      const z = indexToChar(25)

      expect(a).toBe("a")
      expect(z).toBe("z")
    });
  })
})