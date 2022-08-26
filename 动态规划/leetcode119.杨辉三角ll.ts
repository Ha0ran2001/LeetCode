function getRow(rowIndex: number): number[] {

  if (rowIndex === 0) return [1]
  let prevRow = [1]

  for (let i = 1; i <= rowIndex; i++) {
    const curRow = []
    for (let j = 0; j < i + 1; j++) {
      curRow.push((prevRow[j - 1] ?? 0) + (prevRow[j] ?? 0))
    }
    prevRow = curRow
  }

  return prevRow
};