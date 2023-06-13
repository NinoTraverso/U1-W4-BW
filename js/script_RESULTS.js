function resultPositiveNegative(percentualeTest) {
  const div = document.createElement("div");
  const paragrafo = document.createElement("p");

  if (percentualeTest > 50) {
    paragrafo.innerText = "Hai superato il Test Sei Un Drago";
  } else {
    paragrafo.innerText = "Sei stato Bocciato Fai CACARE";
  }

  div.appendChild(paragrafo);
  document.body.appendChild(div);
}
