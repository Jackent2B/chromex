function setup() {
    noCanvas();
    let r = floor(random(4)) + 1;
    let img = createImg('birds/' + r + '.jpg');
    img.size(windowWidth, windowHeight);
    img.position(0, 0);
  }