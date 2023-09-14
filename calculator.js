function display(val) {
  let x = (document.getElementById("result").value += val);
  return val;
}
debugger;
function solve() {
  let x = document.getElementById("result").value;

  let y = eval(x);

  document.getElementById("result").value = y;

  return y;
}
function clearScreen() {
  document.getElementById("result").value = "";
}
