function seven() {
  document.getElementById("display").value += "7";
}
function eight() {
  document.getElementById("display").value += "8";
}
function nine() {
  document.getElementById("display").value += "9";
}
function clearDisplay() {
  document.getElementById("display").value = "";
}
function four() {
  document.getElementById("display").value += "4";
}
function five() {
  document.getElementById("display").value += "5";
}
function six() {
  document.getElementById("display").value += "6";
}
function multi() {
  document.getElementById("display").value += "*";
}
function one() {
  document.getElementById("display").value += "1";
}

function two() {
  document.getElementById("display").value += "2";
}
function three() {
  document.getElementById("display").value += "3";
}
function substraction() {
  document.getElementById("display").value += "-";
}

function del() {
  let display = document.getElementById("display");
  display.value = display.value.slice(0, -1); //* how this slice is working;;?
}

function zero() {
  document.getElementById("display").value += "0";
}
function plus() {
  document.getElementById("display").value += "+";
}
function calc() {
  let v = document.getElementById("display").value;
  let res = eval(v);
  document.getElementById("display").value = res;
}
