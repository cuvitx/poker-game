document.addEventListener('DOMContentLoaded', () => {
  const cardDisplay = document.getElementById('card-display');
  const userInputForm = document.getElementById('user-input-form');
  const userInput = document.getElementById('user-input');
  const result = document.getElementById('result');

  const pokerHand = generatePokerHand();
  displayPokerHand(pokerHand);

  userInputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const userAnswer = parseInt(userInput.value, 10);
    const correctAnswer = calculateHandsBeaten(pokerHand);

    if (userAnswer === correctAnswer) {
      result.textContent = 'Bravo ! Vous avez trouvé la bonne réponse !';
    } else {
      result.textContent = `Dommage... La bonne réponse était ${correctAnswer}.`;
    }
  });
});

function generatePokerHand() {
  // Votre fonction pour générer une main de poker
}

function displayPokerHand(hand) {
  const cardDisplay = document.querySelector("#card-display");
  cardDisplay.innerHTML = "";

  hand.forEach((cardName) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const [suitName, valueName] = cardName.split("-");

    const img = document.createElement("img");
    img.src = "./cards/" + suitName + "-" + valueName + ".svg";
    img.alt = `${valueName} of ${suitName}`;

    cardContainer.appendChild(img);
    cardDisplay.appendChild(cardContainer);
  });
}

function suitToString(suit) {
  switch (suit) {
    case 'C':
      return 'clubs';
    case 'D':
      return 'diamonds';
    case 'H':
      return 'hearts';
    case 'S':
      return 'spades';
    default:
      return '';
  }
}

function valueToString(value) {
  switch (value) {
    case 'A':
      return 'ace';
    case 'K':
      return 'king';
    case 'Q':
      return 'queen';
    case 'J':
      return 'jack';
    default:
      return value;
  }
}

function calculateHandsBeaten(hand) {
  // Votre fonction pour calculer le nombre de mains battues
}
