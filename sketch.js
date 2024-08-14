function setup() {
  createCanvas(400, 400); //cria um retangulo de x de largura por y de altura
  background("DarkOrange"); //acrescenta uma cor de fundo
}

function draw() {
  stroke("red");
  fill("green");

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 40, 60); //cria um retângulo
  }
}
