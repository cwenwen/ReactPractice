export default function calcWinner(squares) {
  let white = [],
      black = [];
  
  for (let i = 0; i < squares.length; i++) {
    switch (squares[i]) {
      case 'piece-white':
        white.push(i);
        break;
      case 'piece-black':
        black.push(i);
        break; 
    }
  }
  
  if (white.length < 5 && black.length < 5) return null;

  for (let i = 0; i < white.length; i++) {
    if (white.indexOf(white[i] + 1) > 0 && 
        white.indexOf(white[i] + 2) > 0 && 
        white.indexOf(white[i] + 3) > 0 &&
        white.indexOf(white[i] + 4) > 0) {
      return 'white';
    } else if (white.indexOf(white[i] + 19 * 1) > 0 &&
               white.indexOf(white[i] + 19 * 2) > 0 && 
               white.indexOf(white[i] + 19 * 3) > 0 &&
               white.indexOf(white[i] + 19 * 4) > 0) {
      return 'white';
    } else if (white.indexOf(white[i] + 20 * 1) > 0 &&
               white.indexOf(white[i] + 20 * 2) > 0 &&
               white.indexOf(white[i] + 20 * 3) > 0 &&
               white.indexOf(white[i] + 20 * 4) > 0) {
      return 'white';
    } else if (white.indexOf(white[i] + 18 * 1) > 0 &&
               white.indexOf(white[i] + 18 * 2) > 0 &&
               white.indexOf(white[i] + 18 * 3) > 0 &&
               white.indexOf(white[i] + 18 * 4) > 0) {
      return 'white';
    }
  }

  for (let i = 0; i < black.length; i++) {
    if (black.indexOf(black[i] + 1) > 0 && 
        black.indexOf(black[i] + 2) > 0 && 
        black.indexOf(black[i] + 3) > 0 &&
        black.indexOf(black[i] + 4) > 0) {
      return 'black';
    } else if (black.indexOf(black[i] + 19 * 1) > 0 &&
               black.indexOf(black[i] + 19 * 2) > 0 && 
               black.indexOf(black[i] + 19 * 3) > 0 &&
               black.indexOf(black[i] + 19 * 4) > 0) {
      return 'black';
    } else if (black.indexOf(black[i] + 20 * 1) > 0 &&
               black.indexOf(black[i] + 20 * 2) > 0 &&
               black.indexOf(black[i] + 20 * 3) > 0 &&
               black.indexOf(black[i] + 20 * 4) > 0) {
      return 'black';
    } else if (black.indexOf(black[i] + 18 * 1) > 0 &&
               black.indexOf(black[i] + 18 * 2) > 0 &&
               black.indexOf(black[i] + 18 * 3) > 0 &&
               black.indexOf(black[i] + 18 * 4) > 0) {
      return 'black';
    }
  }

  return null;
}