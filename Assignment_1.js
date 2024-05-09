document.addEventListener('DOMContentLoaded', function () {

    function validateConcern() {
        var concern = document.getElementById('Concern').value;
        if (/[^a-zA-Z0-9\s]/.test(concern)) {
            alert('no special characters allowed !!!!!!!!!!');
            return false;
        }
        return true;
    }


    function handleSubmit(event) {
        event.preventDefault(); 
        
        if (validateConcern()) {
            window.location.href = 'success.html'; 
        }
    }

    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleSubmit);


});


document.addEventListener('DOMContentLoaded', function () {
    var gameForm = document.getElementById('game-form');
    var userBox = document.getElementById('userBox');
    var computerBox = document.getElementById('computerBox');
    var userSelectionSpan = document.getElementById('userSelection');
    var computerSelectionSpan = document.getElementById('computerSelection');

    gameForm.addEventListener('submit', function (event) {
        event.preventDefault();

        
        var userChoice = document.getElementById('userChoice').value;
        userSelectionSpan.textContent = userChoice;

        
        var choices = ['rock', 'paper', 'scissors', 'spock'];
        var computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerSelectionSpan.textContent = computerChoice;

       
        var result = determineWinner(userChoice, computerChoice);

        
        if (result === 'win') {
            alert('You Win!');
            document.body.style.backgroundColor = '#2ecc71'; 
        } else if (result === 'lose') {
            alert('You Lose!');
            document.body.style.backgroundColor = '#e74c3c'; 
        } else {
            alert('Tie!');
            document.body.style.backgroundColor = '#3498db'; 
        }
    });

    function determineWinner(user, computer) {
        if ((user === 'rock' && computer === 'scissors') ||
            (user === 'paper' && computer === 'rock') ||
            (user === 'scissors' && computer === 'paper')) {
            return 'win';
        } else if ((user === 'rock' && computer === 'paper') ||
                   (user === 'paper' && computer === 'scissors') ||
                   (user === 'scissors' && computer === 'rock')) {
            return 'lose';
        } else if((computer === 'spock')){
            return 'lose';
        }
        else {
            return 'tie';
        }
    }
});

