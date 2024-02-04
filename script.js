function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    // Ustawienie pozycji przycisku na absolutną
    noButton.style.position = "absolute";

    // Zmiana źródła obrazu na "gun.gif"
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    // Generowanie losowych współrzędnych w obrębie widocznego kontenera
    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    // Zastosowanie nowych współrzędnych do przycisku
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Aktualizacja treści tekstu i ukrycie komunikatu z imieniem
    document.getElementById("question").textContent =
      "Ten przycisk 'Nie' służy tylko do efektów wizualnych";
    document.getElementById("name").style.display = "none";

    // Opcjonalnie: Możesz również dodać opóźnienie czasowe, aby zresetować pozycję po kilku sekundach
  }

  if (response === "Yes") {
    // Usunięcie komunikatu z imieniem i przycisku "Nie"
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    // Aktualizacja treści tekstu, wyświetlenie komunikatu i zmiana źródła obrazu na "dance.gif"
    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "Cudnie! Do zobaczenia 14stego słodka😘😘";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    // Usunięcie przycisku "Tak"
    document.getElementById("yesButton").remove();
  }
}
