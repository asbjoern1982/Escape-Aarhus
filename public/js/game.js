var w = 800;
var h = 480;

var cowImg;
var butcherImg;
var gameoverImg;
var escapedImg;
var cow;
var butchers;

function setup() {
  createCanvas(w, h);
  cowImg = loadImage('./img/cow.png');
  butcherImg = loadImage('./img/butcher.png');
  gameoverImg = loadImage('./img/gameover.png');
  escapedImg = loadImage('./img/escaped.png');
  cow = new Cow(cowImg);
  butchers = [new Butcher(butcherImg)];
}

function draw() {
  background(255);

  if (butchers.length == 0) {
    console.log('won');
    noLoop();
    image(escapedImg, 20, 20, w-40, h-40);
    return;
  }

  cow.update();
  cow.show();

  if (frameCount % 20 == 0 && frameCount < 1000) {
    butchers.push(new Butcher(butcherImg));
  }

  for (var i = butchers.length - 1; i >= 0; i--) {
    if (butchers[i].y <= height + 32) {
      butchers[i].update();
      butchers[i].show();
      if (butchers[i].catch(cow)) {
        noLoop();
        image(gameoverImg, 20, 20, w-40, h-40);
        return;
      }
    } else {
      butchers.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    cow.move(-1);
  }
  if (keyCode == RIGHT_ARROW) {
    cow.move(1);
  }
}
