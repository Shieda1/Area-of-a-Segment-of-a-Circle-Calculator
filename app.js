// https://calculator.swiftutors.com/area-of-a-segment-of-a-circle-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const areaofaSegmentofaCircleRadio = document.getElementById('areaofaSegmentofaCircleRadio');
const radiusoftheCircleRadio = document.getElementById('radiusoftheCircleRadio');
const centralAngleRadio = document.getElementById('centralAngleRadio');

let areaofaSegmentofaCircle;
const PI = Math.PI;
let radiusoftheCircle = v1;
let centralAngle = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

areaofaSegmentofaCircleRadio.addEventListener('click', function() {
  variable1.textContent = '(R) Radius of the Circle';
  variable2.textContent = '(C) Central Angle (degrees)';
  radiusoftheCircle = v1;
  centralAngle = v2;
  result.textContent = '';
});

radiusoftheCircleRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of a Segment of a Circle';
  variable2.textContent = '(C) Central Angle (degrees)';
  areaofaSegmentofaCircle = v1;
  centralAngle = v2;
  result.textContent = '';
});

centralAngleRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of a Segment of a Circle';
  variable2.textContent = '(R) Radius of the Circle';
  areaofaSegmentofaCircle = v1;
  radiusoftheCircle = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(areaofaSegmentofaCircleRadio.checked)
    result.textContent = `Area of a Segment of a Circle = ${computeAreaofaSegmentofaCircle().toFixed(2)}`;

  else if(radiusoftheCircleRadio.checked)
    result.textContent = `Radius of the Circle = ${computeRadiusoftheCircle().toFixed(2)}`;

  else if(centralAngleRadio.checked)
    result.textContent = `Central Angle = ${computeCentralAngle().toFixed(2)} degrees`;
})

// calculation

function computeAreaofaSegmentofaCircle() {
  return (Math.pow(Number(radiusoftheCircle.value), 2) / 2) * ((PI / 180) * Number(centralAngle.value) - Math.sin(Number(centralAngle.value)));
}

function computeRadiusoftheCircle() {
  return Math.sqrt((Number(areaofaSegmentofaCircle.value) * 2) / ((PI / 180) * Number(centralAngle.value) - Math.sin(Number(centralAngle.value))));
}

function computeCentralAngle() {
  return Number(decliningBalanceDepreciation.value) / Number(depreciationRate.value);
}