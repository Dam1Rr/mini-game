function checkAnswer(answer) {
    if (answer === 'Да') {
        document.getElementById('result').innerText = ' я и не сомневался )) ';
    } else {
        document.getElementById('result').innerText = 'Неверный выбор! Ты все равно тупой. :)';
        moveNoButton();
    }
}

function moveNoButton() {
    var button = document.getElementById('noButton');
    var maxX = window.innerWidth - button.clientWidth;
    var maxY = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);

    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
