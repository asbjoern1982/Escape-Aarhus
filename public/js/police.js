function Police(img) {
  this.h = 32;
  this.w = 32;
  this.y = -this.h;
  this.x = width * Math.random();
  this.velocity = Math.random() * 4 - 2;
  this.d = 32; // distance to cow

  this.catch = function(cow) {
    return cow.y + this.d > this.y &&
           cow.y - this.d < this.y + this.h &&
           cow.x + this.d > this.x &&
           cow.x - this.d < this.x + this.w
  }

  this.show = function() {
    image(img, this.x, this.y);
  }

  this.update = function() {
    this.y += 2;
    this.x += this.velocity;
  }
}
