export const chunkData = (chunkSize: number, data: any[]) => {
  const result = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return result;
};
