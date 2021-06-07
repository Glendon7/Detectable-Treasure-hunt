class Cell {
  constructor(i, j) {
    this.i = i;
    this.j = j;
    this.walls = [true, true, true, true];
    this.visited = false;
  }
  checkNeighbours(grid) {
    this.neighbours = [];
    this.top = grid[index(this.i, this.j - 1)];
    this.right = grid[index(this.i + 1, this.j)];
    this.bottom = grid[index(this.i, this.j + 1)];
    this.left = grid[index(this.i - 1, this.j)];

    if (this.top && !this.top.visited) {
      this.neighbours.push(this.top);
    }

    if (this.right && !this.right.visited) {
      this.neighbours.push(this.right);
    }

    if (this.bottom && !this.bottom.visited) {
      this.neighbours.push(this.bottom);
    }

    if (this.left && !this.left.visited) {
      this.neighbours.push(this.left);
    }
    if (this.neighbours.length > 0) {
      this.r = floor(random(0, this.neighbours.length));
      return this.neighbours[this.r];
    } else {
      return undefined;
    }
  }
  
  show() {
    this.x = this.i * n;
    this.y = this.j * n;

    stroke(255);
    if (this.walls[0]) {
      line(this.x, this.y, this.x + n, this.y);
    }
    if (this.walls[1]) {
      line(this.x + n, this.y, this.x + n, this.y + n);
    }
    if (this.walls[2]) {
      line(this.x + n, this.y + n, this.x, this.y + n);
    }
    if (this.walls[3]) {
      line(this.x, this.y + n, this.x, this.y);
    }
    /*
    if (this.visited) {
      noStroke();
      noFill();
      //fill(255, 0, 255, 100);
      rect(this.x, this.y, n, n);
    }
    */
  }
}