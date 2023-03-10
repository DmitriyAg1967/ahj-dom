export default class Board {
  constructor(size) {
    this.size = size;
  }

  start() {
    const boardBox = document.getElementById('board_box');
    for (let i = 0; i < this.size ** 2; i += 1) {
      const cell = document.createElement('div');
      cell.classList = 'cell';
      boardBox.appendChild(cell);
    }
    const cellList = document.getElementsByClassName('cell');
    let index;
    let lastIndex = 0;
    const max = this.size ** 2 - 1;
    setInterval(() => {
      index = Math.floor(Math.random() * (max + 1));
      if (index === lastIndex) {
        index += 1;
        if (index >= max) {
          index = 0;
        }
      }
      cellList[index].innerHTML = '<img src="goblin.png">';
      cellList[lastIndex].innerHTML = '';
      lastIndex = index;
    }, 900);
  }
}

const board = new Board(4);
board.start();
