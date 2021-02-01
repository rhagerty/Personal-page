const WIDTH = 7;
const HEIGHT = 6;
const newGameBtn = document.querySelector("button");
let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  for (let y = 0; y < HEIGHT; y++) {
    board.push(Array.from({ length: WIDTH }));
  }
}

/** makeHtmlBoard: make HTML table and row of column tops. */
function makeHtmlBoard() {
  //  get "htmlBoard" variable from the item in HTML w/ID of "board"
  let htmlBoard = document.getElementById("board");
  newGameBtn.innerText = "RESET BOARD";

  // Creating top row to drop pieces and adding event listener for click
  let top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  top.addEventListener("click", handleClick);

  // Creating the table columns and id names by grid position and appending to gamne board
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  htmlBoard.append(top);

  // Creating the table rows and id names by grid position and appending to the game board
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  for (let y = HEIGHT - 1; y >= 0; y--) {
    if (!board[y][x]) {
      return y;
    }
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  let piece = document.createElement("div");
  piece.classList.add("piece");
  piece.classList.add(`p${currPlayer}`);

  spot = document.getElementById(`${y}-${x}`);
  spot.append(piece);
}

newGameBtn.addEventListener("click", function () {
  $("#board").empty();
  board = [];
  currPlayer = 1;
  
  $(".game-over").text("");
  document.querySelector("h2").innerText = "Player 1's Turn";
  makeBoard();
  makeHtmlBoard();
});

/** endGame: announce game end and update h2 */

function endGame(msg) {
  document.querySelector("h2").innerText = msg;
  let top = document.getElementById("column-top")
  top.removeEventListener("click", handleClick);
  newGameBtn.innerText = "PLAY AGAIN";
  $(".game-over").text("GAME OVER- Reset Board to Play Again");
  alert(msg);
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    setTimeout(function () {
      return endGame(`PLAYER ${currPlayer} WINS!`);
    }, 700);
  }

  // check if all cells in board are filled; if so call, call endGame
  if (y === null && x === null) {
    return endGame("GAME OVER- TIE!");
  }
  // switch players and update h2
  currPlayer = currPlayer === 1 ? 2 : 1;
  document.querySelector("h2").innerText = `PLAYER ${currPlayer}'s TURN`;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // // ckeck for 4 in a row (horizontal, vertical, diagonal right/left)
  // of the same color

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      const horiz = [
        [y, x],
        [y, x + 1],
        [y, x + 2],
        [y, x + 3],
      ];
      const vert = [
        [y, x],
        [y + 1, x],
        [y + 2, x],
        [y + 3, x],
      ];
      const diagDR = [
        [y, x],
        [y + 1, x + 1],
        [y + 2, x + 2],
        [y + 3, x + 3],
      ];
      const diagDL = [
        [y, x],
        [y + 1, x - 1],
        [y + 2, x - 2],
        [y + 3, x - 3],
      ];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        // if there is 4 in a row in any direction, we return a win
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
