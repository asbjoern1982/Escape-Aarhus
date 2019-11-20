var w = 600;
var h = 480;

var roadImg;
var cowImg;
var butcherImg;
var policeImg;
var gameoverImg;
var escapedImg;

var road;
var cow;
var enemies;

function setup() {
  createCanvas(w, h);

  roadImg = loadImage('./img/road.png');
  cowImg = loadImage('./img/cow.png');
  butcherImg = loadImage('./img/butcher.png');
  policeImg = loadImage('./img/police.png');
  gameoverImg = loadImage('./img/caught.png');
  escapedImg = loadImage('./img/escaped.png');

  road = new Road(roadImg);
  cow = new Cow(cowImg);
  enemies = [new Butcher(butcherImg)];
}

function draw() {
  road.update();
  road.show();

  if (enemies.length == 0) {
    noLoop();
    image(escapedImg, width/2 - 200, height/2-125);
    return;
  }

  cow.update();
  cow.show();

  if (frameCount % 30 == 0 && frameCount < 1000) {
    if (Math.random() < 0.5) {
      enemies.push(new Butcher(butcherImg));
    } else {
      enemies.push(new Police(policeImg));  
    }
  }

  for (var i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].y <= height + 32) {
      enemies[i].update();
      enemies[i].show();
      if (enemies[i].catch(cow)) {
        noLoop();
        image(gameoverImg, width/2 - 200, height/2-125);
        return;
      }
    } else {
      enemies.splice(i, 1);
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
