function Road(img) {
  this.x = 0;
  this.y1 = 0;
  this.y2 = 0 - height;
  this.speed = 2;

  this.show = function() {
    image(img, 0, this.y1);
    image(img, 0, this.y2);
  }

  this.update = function() {
    this.y1 += this.speed;
    this.y2 += this.speed;

    if (this.y1 > height) this.y1 = 0 - height;
    if (this.y2 > height) this.y2 = 0 - height;
  }
}
