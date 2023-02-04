let cookies = document.getElementById("cookies");
let clicker = document.getElementById("clicker");

let producerCardOne = document.getElementById("producerCard1");
let producerCardTwo = document.getElementById("producerCard2");
let producerCardThree = document.getElementById("producerCard3");

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

let cost1p = document.getElementById("producer-one-cost");
let cost2p = document.getElementById("producer-two-cost");
let cost3p = document.getElementById("producer-three-cost");

let numberOwnedP1 = document.getElementById("number-owned-one");
let numberOwnedP2 = document.getElementById("number-owned-two");
let numberOwnedP3 = document.getElementById("number-owned-three");

let cookiesPerSecP1 = document.getElementById("cookies-per-sec-one");
let cookiesPerSecP2 = document.getElementById("cookies-per-sec-two");
let cookiesPerSecP3 = document.getElementById("cookies-per-sec-three");

clicker.addEventListener("click", incrementCookies);
button1.addEventListener("click", adjustIncremenet1);
button2.addEventListener("click", adjustIncremenet2);
button3.addEventListener("click", adjustIncremenet3);

let resource = 0;
let incremenetBy = 0;

let cost1 = 10;
let cost2 = 50;
let cost3 = 100;

let produceRate1 = 0;
let produceRate2 = 0;
let produceRate3 = 0;

let numberOwned1 = 0;
let numberOwned2 = 0;
let numberOwned3 = 0;

let interval = setInterval(incrementCookiesOverTime, 1000);

function incrementCookies() {
  resource++;
  cookies.innerHTML = `Battle Power: ${resource}`;
}

function incrementCookiesOverTime() {
  resource += incremenetBy;
  cookies.innerHTML = `Battle Power: ${resource}`;

  if (resource >= 8) {
    producerCardOne.style.display = "flex";
  }

  if (resource >= 40) {
    producerCardTwo.style.display = "flex";
  }

  if (resource >= 90) {
    producerCardThree.style.display = "flex";
  }
}

function adjustIncremenet1() {
  if (resource >= cost1) {
    resource -= cost1;
    cookies.innerHTML = `Battle Power: ${resource}`;

    cost1 *= 2;
    cost1p.innerHTML = `Cost: ${cost1} BP`;
    numberOwned1 += 1;
    numberOwnedP1.innerHTML = `Number Owned: ${numberOwned1}`;
    incremenetBy += 1;
    produceRate1 += 1;
    cookiesPerSecP1.innerHTML = `BP per sec: ${produceRate1}`;
  }
}

function adjustIncremenet2() {
  if (resource >= cost2) {
    resource -= cost2;
    cookies.innerHTML = `Battle Power: ${resource}`;

    cost2 *= 2;
    cost2p.innerHTML = `Cost: ${cost2} BP`;
    numberOwned2 += 1;
    numberOwnedP2.innerHTML = `Number Owned: ${numberOwned2}`;
    incremenetBy += 10;
    produceRate2 += 10;
    cookiesPerSecP2.innerHTML = `BP per sec: ${produceRate2}`;
  }
}

function adjustIncremenet3() {
  if (resource >= cost3) {
    resource -= cost3;
    cookies.innerHTML = `Battle Power: ${resource}`;

    cost3 *= 2;
    cost3p.innerHTML = `Cost: ${cost3} BP`;
    numberOwned3 += 1;
    numberOwnedP3.innerHTML = `Number Owned: ${numberOwned3}`;
    incremenetBy += 25;
    produceRate3 += 25;
    cookiesPerSecP3.innerHTML = `BP per sec: ${produceRate3}`;
  }
}
