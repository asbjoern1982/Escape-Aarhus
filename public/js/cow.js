function Cow(img) {
  this.y = height *0.8;
  this.x = width/2;

  this.velocity = 0;

  this.show = function() {
    image(img, this.x - 32, this.y - 32);
  }

  // move the cow left or right
  this.move = function(direction) {
    this.velocity += direction;
  }

  this.update = function() {
    // apply velocity, limit to screen
    this.x += this.velocity;
    if (this.x < 0) {this.x = 0; this.velocity = 0;}
    if (this.x > width) {this.x = width; this.velocity = 0;}

    // apply drag
    this.velocity *= 0.99;
    if (-0.1 < this.velocity && this.velocity < 0.1) {
      this.velocity = 0;
    }
  }
}
