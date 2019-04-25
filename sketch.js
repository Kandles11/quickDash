let apiKey = 'key=5527428e3c00437db9b132303192003'
let api = 'https://api.apixu.com/v1/current.json?'
var query = '0'

let userLocation = '0'

var refreshButton;

function preload() {
  roboto = loadFont('assets/Roboto-Bold.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

    refreshButton = createButton('click me');
    refreshButton.position(100,100);
    refreshButton.mousePressed(weatherAsk);
}

function weatherAsk() {
  console.log(query);
  var url = api + apiKey + '&q=' + query
  console.log(url);
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data
  console.log(weather);
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

  textFont(roboto);
  textSize(60);
  text(hrFix + ":" + mnFix + ":" + scFix, 100,100);
}


function successCallback (position) {
    console.log(position.coords.latitude); // 43.2132209
    console.log(position.coords.longitude); // 27.9571503
    userLocation = position.coords.latitude + '%20' + position.coords.longitude
    console.log(userLocation);
    query = userLocation;
}

function errorCallback (error) {
    console.log(error.message);
}

if (navigator.geolocation) {
  console.log('geo supported')
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
}
