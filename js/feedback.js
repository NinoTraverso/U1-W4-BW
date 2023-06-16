let myForm = document.querySelector(".feedback-form");
myForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

let emptyDiv = document.querySelector(".empty-div");

let h2EmptyDiv = document.createElement("h2");
h2EmptyDiv.innerText = "Grazie per il tuo feedback  🤗";

let h3EmptyDiv = document.createElement("h3");
h3EmptyDiv.innerText = "Il benchmark è terminato";

let pEmptyDiv = document.createElement("a");
pEmptyDiv.innerHTML =
  "<a href=https://epicode.com/it/>Visita la nostra pagina!!</a>";
pEmptyDiv.classList.add("pFirst");

let p2EmptyDiv = document.createElement("a");
p2EmptyDiv.innerHTML = "<a href=https://www.google.it/>Torna su google!!</a>";

emptyDiv.appendChild(h2EmptyDiv);
emptyDiv.appendChild(h3EmptyDiv);
emptyDiv.appendChild(pEmptyDiv);
emptyDiv.appendChild(p2EmptyDiv);

const finalclick = function () {
  let feedback = document.querySelector(".feedback-title");
  let starF = document.querySelector(".star-feedback");
  let final = document.querySelector(".final");

  let myInput = document.querySelector("input");
  let feedbackButton = document.querySelector(".button-feedback");
  feedbackButton.addEventListener("click", function (e) {
    if (myInput.value.trim().length > 0) {
      emptyDiv.classList.remove("empty-div"), emptyDiv.classList.add("alert");
      myInput.value = " ";
      feedback.classList.add("empty-class");
      starF.classList.add("empty-class");
      final.classList.add("empty-class");
    }
  });
};
let myStar = document.querySelectorAll(".active_stars");
const myUltimateFunction = function () {
  for (star of myStar) {
    star.addEventListener("click", function (e) {
      if (e.target.classList.contains("active_stars")) {
        let clicked = false;
        for (let star of myStar) {
          star.classList[clicked ? "remove" : "add"]("sel");
          if (star === e.target) {
            clicked = true;
          }
        }
      }
    });
  }
};
myUltimateFunction();

finalclick();


