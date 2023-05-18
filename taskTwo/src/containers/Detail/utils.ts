export function getYouTubeIdFromUrl(url: string) {
  const youtubeVideoRegexp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/;
  const match = url.match(youtubeVideoRegexp);
  return match ? match[1] : "";
}
