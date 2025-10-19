

let btn =document.getElementById("btn")


let correctPassword = "1234";


btn.onclick = function () {   // Onclick------
  let userInput = prompt("Enter Password:");
  while (userInput !== correctPassword) {
    userInput = prompt("❌ Incorrect Password! re-enter password:");
  }

  console.log("✅ login Successed!");

}


const btn1 = document.getElementById("btn1");  // Dubble click-----addEventLisener

btn1.addEventListener("dblclick", () => {
  alert("Button clicked!");
});


let mouseover = document.getElementById("mouseover")   // mouseover---

mouseover.onmouseover = function () {
  mouseover.style.backgroundColor = "aqua";
}

mouseover.onmouseout = function () {
  mouseover.style.backgroundColor = "aquamarine";
}


const search = document.getElementById("search"); 

search.onkeydown = function(even){  // Keydown-----
  if (even.key === "Enter") {
    alert("you are pressing enter")
  }
}

search.onkeyup = function (even) {  // Keyup----
  if (even.key === "Shift") {
    alert("you are pressing Shift");
  }
};



const form = document.getElementById("myForm");  // submit----

form.onsubmit = function (hh) {
  hh.preventDefault();
  alert("submitted")
}

const change = document.getElementById("change");  // change----

  change.addEventListener("change", function () {
    alert("changed ");
  });


const input = document.getElementById("input");  // Input---

input.oninput = function () {
  alert("input granted");
}


document.getElementById("infoBtn").addEventListener("click", (e) => {  // Event object---
  console.log("Event Type:", e.type);
  console.log("Target Element:", e.target);
  console.log("Mouse X:", e.clientX, "Mouse Y:", e.clientY);
});


let infoBtn = document.getElementById("infoBtn2");
infoBtn.onkeydown = function (l) {
  console.log("Event Type:", l.type);
  
}



const container = document.getElementById("btnContainer");  //handeling multiple button dynamicaly---

container.onclick = function (w) {
  if (w.target.tagName === "BUTTON") {
    alert(`you clicked: ${w.target.innerText}`)
  }
}



// Create fragment---
let kkr = document.getElementById("kkr")
let fragment = document.createDocumentFragment();
let ul = document.getElementById("ul");
ul.style.listStyleType="lower-roman"

kkr.onclick = function () {
  for (let i = 1; i <= 20; i++) {
    let list = document.createElement("li");
    list.innerText = (`5 x ${i} = ${5*i}`);
    fragment.appendChild(list);
  }
  ul.append(fragment);
}