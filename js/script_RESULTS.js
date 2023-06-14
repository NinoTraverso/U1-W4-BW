// localStorage.getItem(correctAnswers)

const wrong = 5; // Questo cambia il valore del cerchio blu in base al numero di risposte sbagliate.

function showResult(input) {
  if (input >= 5) {
    console.log(
      "Sei stato Bocciato. Non ti buttare giu, sono solo TANTI SOLDI!"
    );
  } else console.log("Hai superato il Test Sei Un Drago");
}
showResult(wrong);

//Questa funzione toglie la percentuale di circonferenza blue da sopra il cerchio viola (toglie il 10% della circonferenza del cerchio blu per ogni risposta sbagliata)

function circumference(result) {
  const circumferencePercentage = document.getElementById("progress");
  let wrong = result;
  const multiplyTenPercent = -87.964594300514210676954014731826; //numero lungo per via del pigreco (che e' un numero decimale infinito)
  const total = wrong * multiplyTenPercent;
  console.log(total);
  circumferencePercentage.style.strokeDashoffset = total;
}
circumference(wrong); // Mosta il numero di pixel tolti dalla circonferenza azzura

// Questa funzione cambia la percentuale nel secondo h2 dei div "Correct" e "Wrong" e mostra la frazione di risposte giuste e sbagliate. Questa funzione cicciottona e' basato sul concetto di risposte sbagliate, con un valore totale di 0 a 10 per le risposte sbagliate. Ad esempio, con venti domande, una risposta sbagliate deve avere un valore di 0.5 e non 1.

function showResultPercentage(input) {
  const totalPercentage = 100;
  const wrongPercentage = input * 10;
  const rightPercentage = totalPercentage - wrongPercentage;

  console.log("WRONG", wrongPercentage + " " + "RIGHT", rightPercentage);

  //QUI RICHIAMIAMO L'h3 "rightPercentage" DELLA SECONDA RIGA A SINISTRA PER INJETTARE UN h3 CON LA PERCENTUALE DI RISPOSTE GIUSTE

  const rightAnswerParent = document.getElementById("correctPercentage");

  const rightAnswer = document.createElement("h3");
  rightAnswer.textContent = rightPercentage + "%";
  rightAnswer.style.fontWeight = 700;
  rightAnswer.style.margin = "0px";
  rightAnswerParent.appendChild(rightAnswer);

  //QUI RICHIAMIAMO IL p "rightAnswers" DELLA TERZA RIGA A SINISTRA PER INJETTARE UN p CON LA FRAZIONE DI RISPOSTE GIUSTE SU TOTALE DELLE DOMANDE

  const rightsOverWrong = document.getElementById("rightAnswers");

  const rightsAndWrongs = document.createElement("p");
  rightsAndWrongs.textContent = [10 - wrong] + "/10";
  rightsAndWrongs.style.fontSize = "20px";
  rightsOverWrong.appendChild(rightsAndWrongs);

  //QUI RICHIAMIAMO L'h3 "wrongPercentage" DELLA SECONDA RIGA A DESTRA PER INJETTARE UN h3 CON LA PERCENTUALE DI RISPOSTE GIUSTE

  const wrongAnswerParent = document.getElementById("wrongPercentage");

  const wrongAnswer = document.createElement("h3");
  wrongAnswer.textContent = wrongPercentage + "%";
  wrongAnswer.style.fontWeight = 700;
  wrongAnswerParent.appendChild(wrongAnswer);

  //QUI RICHIAMIAMO IL p "wrongtAnswers" DELLA TERZA RIGA A DESTRA PER INJETTARE UN p CON LA FRAZIONE DI RISPOSTE SBAGLIATE SU TOTALE DELLE DOMANDE

  const wrongsOverRight = document.getElementById("wrongAnswers");

  const wrongAndRights = document.createElement("p");
  wrongAndRights.textContent = wrong + "/10";
  wrongAndRights.style.fontSize = "20px";
  wrongsOverRight.appendChild(wrongAndRights);
}
showResultPercentage(wrong);

const button = (document.getElementById("button").onclick = function () {
  window.location.href = "/feedback.html";
});

//QUESTA FUNZIONE MOSTRA IL TESTO DENTRO IL CERCHIO SE PASSI O NO L'ESAME

const addTextToSvg = function (input) {
  if (input >= 5) {
    const failedMessageParent = document.getElementById("svgCircle");

    const failedText = document.getElementById('passingMessage');
    failedMessageParent.removeChild(failedText)
  } else {
  const failedMessageParent = document.getElementById("svgCircle");
  const passingText = document.getElementById('failingMessage');
  failedMessageParent.removeChild(passingText)}
};

addTextToSvg(wrong);
/*
function resultPositiveNegative(percentualeTest) {
  const div = document.createElement("div");
  const paragrafo = document.createElement("p");

  if (percentualeTest >= 60) {
    paragrafo.innerText = "Hai superato il Test Sei Un Drago";
  } else {
    paragrafo.innerText = "Sei stato Bocciato Fai CACARE";
  }

  div.appendChild(paragrafo);
  document.body.appendChild(div);
}
*/
