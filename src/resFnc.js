export function calcwinner(square) {
  const winningSqr = [
    [0, 3, 6],
    [0, 1, 2],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < winningSqr.length; i++) {
    const [a, b, c] = winningSqr[i];
    if (square[a] && square[a] === square[b] && square[a] === square[c]) {
      return square[a];
    }
  }
  return null;
}
