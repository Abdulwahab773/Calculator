function btnCal(char) {
  let cal = document.getElementById("calculate");
  let lastchar = cal.value.slice(-1);
  if (
    (lastchar === "+" ||
      lastchar === "-" ||
      lastchar === "*" ||
      lastchar === "/") &&
    (char === "+" || char === "-" || char === "*" || char === "/")
  ) {
    cal.value = cal.value.slice(0, -1) + char;
} else if (char === "=") {
    calculate.value = eval(cal.value);
} else if (char === "CE") {
    cal.value = cal.value.slice(0, -1);
} else if (char === "C") {
    cal.value = char.slice(0, -1);
} else {
    cal.value += char;
}
}