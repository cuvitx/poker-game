document.addEventListener('DOMContentLoaded', () => {
    const submitAnswerButton = document.getElementById('submit-answer');
    const userAnswerInput = document.getElementById('user-answer');
    const result = document.getElementById('result');
    const cardDisplay = document.querySelector('.card-display');

    // Générer et afficher une main de poker
    function generatePokerHand() {
        const hand = []; // Un tableau pour stocker les cartes de la main
        for (let i = 0; i < 5; i++) {
            const card = generateRandomCard(); // Fonction pour générer une carte aléatoire
            hand.push(cardToString(card));
            const cardElement = document.createElement('div');
            cardElement.classList.add('card');
            cardElement.textContent = cardToString(card);
            cardDisplay.appendChild(cardElement);
        }
        return hand;
    }

    // Fonction pour générer une carte aléatoire
    function generateRandomCard() {
        const ranks = '23456789TJQKA';
        const suits = 'cdhs';
        return {
            rank: ranks[Math.floor(Math.random() * ranks.length)],
            suit: suits[Math.floor(Math.random() * suits.length)]
        };
    }

    // Fonction pour convertir une carte en chaîne de caractères
    function cardToString(card) {
        return card.rank + card.suit;
    }

    // Calculer le nombre de mains qui battent la main donnée
    function calculateHandsBeaten(hand) {
        const handEvaluator = new PokerEvaluator();
        const handRank = handEvaluator.getHandRank(hand);
        const totalHands = 2598960; // Nombre total de mains de poker (combinaisons de 5 cartes parmi 52)
        const handsBeaten = totalHands - handRank;
        return handsBeaten;
    }

    // Vérifier la réponse de l'utilisateur
    function checkAnswer() {
        const userAnswer = parseInt(userAnswerInput.value);
        if (isNaN(userAnswer)) {
            result.textContent = "Veuillez saisir un nombre.";
            return;
        }

        const correctAnswer = calculateHandsBeaten(pokerHand);

if (userAnswer === correctAnswer) {
    result.textContent = "Félicitations ! Votre réponse est correcte.";
} else {
    result.textContent = `Désolé, la réponse correcte est ${correctAnswer}.`;
}

// Efface l'entrée de l'utilisateur et réinitialise la main affichée
userAnswerInput.value = "";
cardDisplay.innerHTML = "";
pokerHand = generatePokerHand();
}

// Générer et afficher une main de poker initiale
let pokerHand = generatePokerHand();

// Ajouter un gestionnaire d'événement pour le bouton de soumission de réponse
submitAnswerButton.addEventListener('click', checkAnswer);
});

