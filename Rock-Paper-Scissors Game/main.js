
userChoice();

function userChoice( )
{   
    let userChoice = prompt('Enter your choice: rock, paper, or scissors',);

    let userScore = 0;
    let computerScore = 0;

    
    let computerChoice = Math.floor(Math.random() * 3);
    let choices = ['rock', 'paper', 'scissors'];

    if (userChoice == choices[computerChoice])
    {
        //document.getElementById('result').innerHTML = "It's a tie!";
        //document.getElementById('result').style.color = "blue";
        console.log('It is a tie!');
    }
    else if (userChoice == 'rock' && choices[computerChoice] == 'scissors')
    {
       // document.getElementById('result').innerHTML = "You win!";
       // document.getElementById('result').style.color = "green";
       // document.getElementById('result-modal-content').style.border = "2px solid green";
        console.log('You win!');
        userScore++;
    }
    else if (userChoice == 'scissors' && choices[computerChoice] == 'paper')
    {
        //document.getElementById('result').innerHTML = "You win!";
        //document.getElementById('result').style.color = "green";
        //document.getElementById('result-modal-content').style.border = "2px solid green";
        console.log('You win!');
        userScore++;
    }
    else if (userChoice == 'paper' && choices[computerChoice] == 'rock')
    {
        //document.getElementById('result').innerHTML = "You win!";
        //document.getElementById('result').style.color = "green";
       // document.getElementById('result-modal-content').style.border = "2px solid green";
        console.log('You win!');
        userScore++;
    }
    else
    {
        //document.getElementById('result').innerHTML = "You lose!";
        //document.getElementById('result').style.color = "red";
        //document.getElementById('result-modal').style.border = "2px solid red";
        console.log('You lose!');
        computerScore++;

    }
    //document.getElementById('score').innerHTML = userScore + " - " + computerScore;
    console.log(userScore + " - " + computerScore);
} 