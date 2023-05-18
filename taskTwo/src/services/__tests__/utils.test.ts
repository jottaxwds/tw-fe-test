import { httpGet } from "../utils";

describe("httpGet utils", () => {
  it("Should call `fetch` with given params", async () => {
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve({ data: 100 }) })
        ) as jest.Mock
      );
    await httpGet("/", {});
    expect(fetchSpy).toHaveBeenCalled();
    expect(fetchSpy).toHaveBeenCalledWith("/", {});
    fetchSpy.mockRestore();
  });
});
