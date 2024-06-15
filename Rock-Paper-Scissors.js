

let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties:  0
};
//Alternative of ||(OR operator)

/* if(!score){
score = {
  Wins: 0,      //Another way to Slove with If-Else
  Losses: 0,
  Ties :  0
};
}; */

updateScore();

function playerMove(playerPick){

let computerMove =  pickComputerMove(); //For Scissor 


let result = '';

  if (playerPick === 'Rock') {
    if(computerMove === 'Rock'){
  result = '<div class="tie-color">Tie</div>';
  } else if (computerMove === 'Paper'){
  result ='<div class="youLose-color">You Lose</div>';
  }else if (computerMove === 'Scissor'){
  result = '<div class="youWin-color">You Win</div>';
  }

  } 
  
  else if (playerPick === 'Paper') {
    if(computerMove === 'Rock') {
  result = '<div class="youWin-color">You Win</div>';

  }else if (computerMove === 'Paper'){
  result = '<div class="tie-color">Tie</div>';


  }else if (computerMove === 'Scissor'){
  result = '<div class="youLose-color">You Lose</div>';

  }
}
  

else if (playerPick === 'Scissor') {
    if(computerMove === 'Rock'  ){
  result  = '<div class="youLose-color">You Lose</div>';

  }else if (computerMove === 'Paper'){
  result ='<div class="youWin-color">You Win</div>';


  }else if (computerMove === 'Scissor'){
  result = '<div class="tie-color">Tie</div>';

  }
}

  if( result === '<div class="youWin-color">You Win</div>'  ){

    score.Wins += 1

   }else if( result === '<div class="youLose-color">You Lose</div>'){

    score.Losses += 1

   }else if (  result === '<div class="tie-color">Tie</div>'){

    score.Ties += 1
     
   }

   localStorage.setItem('score', JSON.stringify(score));

   updateScore();
   console.log(result);
   document.getElementById('kire1').innerHTML = result;

   document.querySelector('.js-moves').innerHTML = `<div class="result-popout1">You</div> <img src="Images/${playerPick}-icon.png" class="move-icon1">
<img src="Images/${computerMove}-icon.png" class="move-icon1"><div class="result-popout2">Computer</div>`;


/* alert(`You Picked ${playerPick}, Computer Picked ${computerMove}. ${result}
Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}
`); */


}

function updateScore () {
document.querySelector('.js-updateScore').innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`

}

function pickComputerMove(){     // Function i created for every Rock Paper Scissor computers Move

const randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1 / 3 ) 
{  
  
     // as this variable in a { } means in a scope and obviously we cannot use this in another section that why we used the   [return ; ] so that we dont face any NameComplexity,I can use the same variable name in another section. 
     console.log('Rock');
 return 'Rock';

}
else if  (randomNumber >= 1 / 3 && randomNumber < 2/ 3)
{
  console.log('Paper');
 return 'Paper';
}
else if (randomNumber >= 2 / 3 && randomNumber < 1) 
{

  console.log('Scissor')   
 return 'Scissor';
} 

 //returned the variable so that i can use again.
}
function removeButton() {
  document.getElementById("kire").innerHTML = "";
  document.getElementById("kire1").innerHTML = "";
}