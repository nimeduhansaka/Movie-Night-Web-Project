
const mainCard = document.getElementById('mainCard');
const hiddenCards = document.querySelectorAll('.card-item.hidden-card');
const cardInfo = document.getElementById('cardInfo');
const cardTitle = document.getElementById('cardTitle');
const cardYear = document.getElementById('cardYear');
const cardPlot = document.getElementById('cardPlot');
const tryAgainBtn = document.getElementById('retry-container');
let attempts = 0;

const cardData = [
    { title: "Blitz", year: 2024, plot: "The stories of a group of Londoners during the German bombing campaign of the British capital during World War II." },
    { title: "A Quiet Place: Day One", year: 2024, plot: "A young woman named Sam finds herself trapped in New York City during the early stages of an invasion by alien creatures with ultra-sensitive hearing." },
    { title: "Monkey Man", year: 2024, plot: "An anonymous young man unleashes a campaign of vengeance against the corrupt leaders who murdered his mother and continue to systematically victimize the poor and powerless." },
    { title: "Bougainvillea", year: 2024, plot: "A family entangled in a police investigation surrounding the mysterious disappearance of tourists in Kerala." },
    { title: "Officer Black Belt", year: 2024, plot: "A talented martial artist who can't walk past a person in need unites with a probation officer to fight and prevent crime as a martial arts officer." },
    { title: "Uprising", year: 2024, plot: "In the Joseon Dynasty, two friends who grew up together, one the master and one the servant, reunite post-war as enemies on opposing sides." },
    { title: "13 Hours: The Secret Soldiers of Benghazi", year: 2016, plot: "During an attack on a U.S. compound in Libya, a security team struggles to make sense out of the chaos." }
];

function revealRandomCard() {
    if (attempts < 2) {
        attempts++;
        const randomIndex = Math.floor(Math.random() * hiddenCards.length);
        const selectedCard = hiddenCards[randomIndex];

        mainCard.style.display = 'none';
        hiddenCards.forEach(card => card.classList.add('hidden-card'));
        selectedCard.classList.remove('hidden-card');
        selectedCard.classList.add('reveal-animation');

        // Display card info
        cardTitle.textContent = cardData[randomIndex].title;
        cardYear.textContent = `Year: ${cardData[randomIndex].year}`;
        cardPlot.textContent = cardData[randomIndex].plot;
        cardInfo.classList.remove('hidden-card');

        // Hide "Try here" text after first attempt
        if (attempts === 1) {
            mainCard.querySelector('.click-hint').style.display = 'none';
        }

        // Hide "Try again" button after second attempt
        if (attempts === 2) {
            tryAgainBtn.style.display = 'none';
        }
    }
}

mainCard.addEventListener('click', revealRandomCard);
tryAgainBtn.addEventListener('click', revealRandomCard);
