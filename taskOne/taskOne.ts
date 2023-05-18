const generateCellWhiteSpacings = (num: number) => ' '.repeat(num);

const divideArrayIntoChunks = (data: number[], chunkSize: number) => {
    const result: number[][] = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      const chunk = data.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

const generateRowDelimiter = (cellLength: number, columns: number) => {
    const cellContent = `+${'-'.repeat(cellLength)}`;
    const output = `${cellContent.repeat(columns)}+`;
    return output;
}

const printTableHeading = (cellSize: number, numberOfCells: number) => {
    console.log(generateRowDelimiter(cellSize, numberOfCells));
}

const printTableRow = (content: number[], cellSize: number) => {
    let line = '';
    for(let i = 0; i < content.length; i++) {
        let numberLength = `${content[i]}`.length;
        line = `${line}|${generateCellWhiteSpacings(cellSize - numberLength)}${content[i]}`;
    }
    line = `${line}|`;
    console.log(line);
    console.log(generateRowDelimiter(cellSize, content.length));
}

// Q: Should we export this as the 'shared member' from this file?
export const generateTableFromArray = (A: number[], K: number) => {
    const maxCellLength = `${[...A].sort((a, b) => b - a)[0]}`.length;
    const chunks = divideArrayIntoChunks(A, K);
    printTableHeading(maxCellLength, K);
    chunks.forEach((chunk: number[]) => {
        printTableRow(chunk, maxCellLength);
    });
}