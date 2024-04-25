function correct(button) {
    button.classList.add("correct");
    var end = Date.now() + 500;

    // go Buckeyes!
    var colors = ['#007910', '#ffffff'];
    
    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });
    
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
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