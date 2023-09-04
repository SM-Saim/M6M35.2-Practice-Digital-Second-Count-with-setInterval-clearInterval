let globe;
let n = 0;

function startButton() {
  globe = setInterval(() => {
    n = ++n;
    console.log(n);
    const res = document.getElementById("zero");
    res.innerText = n;
  }, 1000);
}

function stopButton() {
  clearInterval(globe);
}

function resetButton() {
  n = 0;
  const res = document.getElementById("zero");
  res.innerText = n;
}
