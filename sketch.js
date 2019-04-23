function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let hr = hour();  //gets computer hour
  let hrFix = ((hr + 11) % 12 + 1); //makes hour 12 hour time
  let sc = second(); //gets computer seconds
  let mn = minute(); //gets computer minute
  let scFix = second(); //set fixed seconds to normal setting
  let mnFix = minute(); //set fixed mintues to normal setting

  background(255,255,242);

  if (sc < 10 ) {
 scFix = ('0' + sc);
}

if (mn < 10) {
  mnFix = ('0' + mn)
}


  text(hrFix + ":" + mnFix + ":" + scFix, 100,100);
}
