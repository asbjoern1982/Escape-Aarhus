function Butcher(img) {
  this.h = 32;
  this.w = 32;
  this.y = -this.h;
  this.x = width * Math.random();
  this.velocity = Math.random() * 4 - 2;

  this.catch = function(cow) {
    return cow.y + 16 > this.y &&
           cow.y - 16 < this.y + this.h &&
           cow.x + 16 > this.x &&
           cow.x - 16 < this.x + this.w
  }

  this.show = function() {
    //fill(255, 0, 0);
    //rect(this.x, this.y, this.h, this.w);
    image(img, this.x, this.y);
  }

  this.update = function() {
    this.y += 2;
    this.x += this.velocity;
  }
}
