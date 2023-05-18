import { chunkData } from "../utils";

describe("List utils", () => {
  it("Should divide array in given chunksizes", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = chunkData(2, array);
    expect(result).toHaveLength(5);
  });
});
