const guess_Number = document.querySelector('.guess');
const again_btn = document.querySelector('.again');
const number_show = document.querySelector('.number');
const chcek_btn = document.querySelector('.check');
const normal_score = document.querySelector('.score');
const high_score = document.querySelector('.highscore');
const message = document.querySelector('.message');

const randomNumber = function() {
    const number = Math.floor(Math.random() * 20 + 1);
    return number;
}

const correct_Guess = function(randomNumber) {
    message.innerHTML = `🎆 Correct Number!`;
    high_score.innerHTML = `${randomNumber}`;
    number_show.innerHTML = `${randomNumber}`;
    document.body.style.backgroundColor = 'green';
    return randomNumber;
}

const checkNumber = function() {
    const random_number = randomNumber();
    let value = guess_Number.value;
    const normal = +normal_score.innerHTML;
    console.log(normal);
    if(normal<=1){
        againBtn();
    }
    console.log(value);
    console.log(random_number);
    if(random_number == value){
        correct_Guess(random_number);
    }
    else if(random_number != value){
     normal_score.innerHTML -= 1;
     value = '';
    }
    return random_number;
}

const againBtn = function() {
    const value = high_score.innerHTML;
    message.innerHTML = `Start guessing...`;
    normal_score.innerHTML = 20;
    high_score.innerHTML  = value;
    number_show.innerHTML = `?`;
    document.body.style.backgroundColor = 'black';
    guess_Number.value = '';
}

chcek_btn.addEventListener('click',checkNumber);
again_btn.addEventListener('click',againBtn);



