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
  const suits = ['C', 'D', 'H', 'S'];
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

  const hand = [];
  while (hand.length < 5) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const value = values[Math.floor(Math.random() * values.length)];
    const card = value + suit;
    if (!hand.includes(card)) {
      hand.push(card);
    }
  }

  return hand;
}

function displayPokerHand(hand) {
  const cardDisplay = document.querySelector("#card-display");
  cardDisplay.innerHTML = "";

  hand.forEach((cardName) => {
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card");

    const [valueName, suitName] = cardName.split("");

    const img = document.createElement("img");
    img.src = `./cards/${suitName}${valueName}.svg`;
    img.alt = `${valueToString(valueName)} of ${suitToString(suitName)}`;

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
  let count = 0;

  for (let i = 0; i < 1326; i++) {
    const testHand = intToHand(i);
    if (compareHands(hand, testHand) === -1) {
      count++;
    }
  }

  return count;
}

function intToHand(intHand) {
  const hand = [];

  for (let i = 0; i < 5; i++) {
    let card = intHand % 13;
    intHand = Math.floor(intHand / 13);
    const suit = intHand % 4;
    intHand = Math.floor(intHand / 4);

    const suits = ['C', 'D', 'H', 'S'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K',
