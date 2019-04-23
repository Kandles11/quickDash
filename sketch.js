function setup() {
  createCanvas(400,400);
  input = createInput();
  input.position(20,65);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(press);

  testButton = createButton('show cookie');
  testButton.position(20,100);
  testButton.mousePressed(test);

  clearButton = createButton('clear cookie');
  clearButton.position(120,100);
  clearButton.mousePressed(clearCookie);
}

function draw() {
  background(51);
  fill(255);
  text('1. enter data into field',20,150);
  text('2. click submit',20,170);
  text('3. click show cookie to display the cokkie',20,190);
  text('4. clear the cookie with clear cookie button',20,210);
}

function press() {
  document.cookie = input.value();
}

function test() {
  alert(document.cookie);
}

function clearCookie() {
  document.cookie = "please enter a value"
}
