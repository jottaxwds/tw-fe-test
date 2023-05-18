import { getYouTubeIdFromUrl } from "../utils";

describe("Detail container utils -> getYouTubeIdFromUrl", () => {
  it("Should return id from valid youtube video urls", () => {
    const ytId = "12345";
    const url1 = `https://www.youtube.com/watch?v=${ytId}`;
    const url2 = `https://youtu.be/${ytId}`;
    const url3 = `http://www.youtube.com/watch?v=${ytId}`;
    const url4 = `http://youtu.be/${ytId}`;
    const id1 = getYouTubeIdFromUrl(url1);
    const id2 = getYouTubeIdFromUrl(url2);
    const id3 = getYouTubeIdFromUrl(url3);
    const id4 = getYouTubeIdFromUrl(url4);
    expect(id1).toEqual(ytId);
    expect(id2).toEqual(ytId);
    expect(id3).toEqual(ytId);
    expect(id4).toEqual(ytId);
  });
  it("Should return empty string if given URL is not a valid youtube video url", () => {
    const url1 = `https://www.netflix.com/watch?v=1234`;
    const id1 = getYouTubeIdFromUrl(url1);
    expect(id1).toEqual("");
  });
});
