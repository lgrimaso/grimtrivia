function correct(button) {
    button.classList.add("correct");
}

function wrong(button) {
    button.classList.add("wrong");
}

function reveal() {
    let today = new Date();
    const cards = document.querySelectorAll('div.quiz-cards');
    for (let i = 0; i < cards.length; i++){
        let item_date = new Date(cards[i].getAttribute("date"));

        if (item_date < today) {
            cards[i].style.display = 'flex';
        }
    }
}