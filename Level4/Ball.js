class Ball {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move(k) {
    if (k == 0) {
      if (this.y > 10) {
        this.y = this.y - 20;
      }
    } else if (k == 1) {
      if (this.x < 390) {
        this.x = this.x + 20;
      }
    } else if (k == 2) {
      if (this.y < 390) {
        this.y = this.y + 20;
      }
    } else if (k == 3) {
      if (this.x > 10) {
        this.x = this.x - 20;
      }
    }
  }

  show() {
    noStroke();
    fill(255, 255, 0);
    ellipse(this.x, this.y, this.r);
  }
}