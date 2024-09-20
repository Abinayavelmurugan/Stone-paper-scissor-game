
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    lose: 0,
    ties: 0
};
let result = '';
document.querySelector('.js-winner').innerHTML=`Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.ties}`;

function playgame(pick) {
    const com = compick();
    

    if (pick === 'paper') {
        if (com === 'scissors') {
            result = 'You lose';
        } else if (com === 'stone') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    } else if (pick === 'stone') {
        if (com === 'scissors') {
            result = 'You win';
        } else if (com === 'paper') {
            result = 'You lose';
        } else {
            result = 'Tie';
        }
    } else if (pick === 'scissors') {
        if (com === 'scissors') {
            result = 'Tie';
        } else if (com === 'stone') {
            result = 'You lose';
        } else {
            result = 'You win';
        }
    }

    if (result === 'You win') {
        score.wins += 1;
    } else if (result === 'You lose') {
        score.lose += 1;
    } else {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    alert(`You picked ${pick}. Computer picked ${com}. ${result}
Wins: ${score.wins}, Losses: ${score.lose}, Ties: ${score.ties}`);
updatescore();
document.querySelector('.winner').innerHTML=result;
updateHighScore();
}

function compick() {
    const random = Math.random();
    let com = '';
    if (random >= 0 && random < 1 / 3) {
        com = 'stone';
    } else if (random >= 1 / 3 && random < 2 / 3) {
        com = 'paper';
    } else {
        com = 'scissors';
    }
    return com;
}
function updatescore(){
     document.querySelector('.js-winner').innerHTML=`Wins: ${score.wins}, Loses: ${score.lose}, Ties: ${score.ties}`;

}

let highScore = localStorage.getItem('highScore') || 0;

function updateHighScore() {
    if (score.wins > highScore) {
        highScore = score.wins;
        localStorage.setItem('highScore', highScore);
        document.getElementById('high-score').textContent = highScore;
    }
}
function reset(){
    score = { wins: 0, lose: 0, ties: 0 };
    localStorage.setItem('score', JSON.stringify(score));
    updatescore();

    // Optionally reset high score if needed
    document.getElementById('high-score').textContent = highScore;
    alert("Scores have been reset!");
}

