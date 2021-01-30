// Your Code Here!
const map = [
  "WWWWWWWWWWWWWWWWWWWWW",
  "W     W       W     W",
  "W WWW WWW WWWWW WWW W",
  "W   W   W W       W W",
  "W W WWWWW WWWWW W W W",
  "W W       W   W W W W",
  "W WWW WWWWW WWWWW W W",
  "W W   W     W   W W W",
  "W W WWW W W W WWW W F",
  "S W   WWW W W W W WWW",
  "WWWWW W   W W W W W W",
  "W     W W W     W   W",
  "W WWWWW W WWWWW WWW W",
  "W       W     W     W",
  "WWWWWWWWWWWWWWWWWWWWW",
];

let brain = document.createElement("img")
brain.id = "brain"
brain.src = "/brain.png"

let zombie = document.createElement("img")
zombie.id = "player"
zombie.src = "/zombie.png"

let x = 0;
let y = 0
map.forEach(function (array) {
  let right = 0;
  let row = document.createElement("div")
  for (let entry of array) {
    y = String.fromCharCode(97 + right)
    let div = document.createElement("p")
    if (entry === "W") {
      div.textContent = " ";
      div.id = x + y
      div.className = "block wall"
      div.style.backgroundColor = "#000000";
    }
    if (entry === " ") {
      div.textContent = " ";
      div.id = x + y
      div.className = "block floor"
      div.style.backgroundColor = "#FFFFFF";
    }
    if (entry === "S") {
      div.className = "start"
      div.id = x + y
      div.style.backgroundColor = "#008000"
      div.appendChild(zombie)
    }
    if (entry === "F") {
      div.className = "finish"
      div.id = x + y
      div.style.backgroundColor = "#008000"
      div.appendChild(brain)
    }
    right++
    row.appendChild(div)
  }
  x++
  let drop = document.createElement("br")
  document.body.appendChild(row, drop)
})

x = 9
right = 0
document.addEventListener('keydown', function (e) {
  let div;
  if (e.code === "ArrowDown") {
    x++
    y = String.fromCharCode(97 + right)
    div = document.getElementById(x + y)
    if (div.className === "block wall") {
      x--
      div = document.getElementById(x + y)
    }
    div.appendChild(zombie)
  }
  if (e.code === "ArrowUp") {
    x--
    y = String.fromCharCode(97 + right)
    div = document.getElementById(x + y)
    if (div.className === "block wall") {
      x++
      div = document.getElementById(x + y)
    }
    div.appendChild(zombie)
  }
  if (e.code === "ArrowRight") {
    right++
    y = String.fromCharCode(97 + right)
    console.log(x + y)
    div = document.getElementById(x + y)
    if (div.className === "block wall") {
      right--
      y = String.fromCharCode(97 + right)
      div = document.getElementById(x + y)
    }
    div.appendChild(zombie)
  }
  if (e.code === "ArrowLeft") {
    right--
    y = String.fromCharCode(97 + right)
    div = document.getElementById(x + y)
    if (div === null) {
      right++
      y = String.fromCharCode(97 + right)
      div = document.getElementById(x + y)
    }
    if (div.className === "block wall") {
      right++
      y = String.fromCharCode(97 + right)
      div = document.getElementById(x + y)
    }
    div.appendChild(zombie)
  }
  if (div.className === "finish") {
    let body = document.getElementById("body")
    body.innerHTML = "<h1>GOOD JOB!!! But that was a friend of ours so now, just shoot the zombie</H1>"
    body.style.margin = "300px"
    let button = document.createElement("button")
    button.innerHTML = "BANG!!!"
    button.onclick = function () {
      window.location = "index.html"
    }
    document.body.appendChild(button)
  }

})
