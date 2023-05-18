export async function httpGet<T>(
  request: RequestInfo,
  options: RequestInit
): Promise<T> {
  const response = await fetch(request, options);
  const body = await response.json();
  return body;
}
