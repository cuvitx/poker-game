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
  hand.forEach(card => {
    const cardImage = document.createElement('img');
    const cardSuit = card.charAt(1).toUpperCase();
    const cardValue = card.charAt(0).toUpperCase();
    const suitName = suitToString(cardSuit);
    const valueName = valueToString(cardValue);
    cardImage.src = `cards/${valueName}_of_${suitName}.svg`;
    cardImage.alt = `${valueName} of ${suitName}`;
    cardImage.classList.add('card');
    cardDisplay.appendChild(cardImage);
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
