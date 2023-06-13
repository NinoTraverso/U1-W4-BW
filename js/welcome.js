function controllaCheckbox() {
    let checkbox = document.getElementById("myCheckbox");
    
    if (checkbox.checked) {
      window.location.href = "question.html";
    } else {
      
      alert("Devi spuntare la checkbox per proseguire.");
    }
  }
  