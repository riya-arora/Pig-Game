/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores,roundScore,activePlayer,gamePlay,prev_dice,winning_score;
prev_dice=-1;
init();
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+ dice +'</em>';

//document.querySelector('.btn-new').addEventListener('click',init)

document.querySelector('.btn-roll').addEventListener('click',function()
{
	if(gamePlay)
	{
		//console.log(winning_score);
	var dice=Math.floor(Math.random()*6)+1;
	var x=document.querySelector('.dice');
	x.style.display='block';
	x.src='dice-'+ dice + '.png';
	
	if( dice === prev_dice)
	{
		roundScore=0;
		scores[activePlayer]=0;
		document.getElementById('current-'+ activePlayer).textContent='0';
		document.getElementById('score-'+ activePlayer).textContent=scores[activePlayer];
		nextPlayer();
	}
	else if(dice!=1)
	{
		roundScore=roundScore+dice;
		document.querySelector('#current-'+ activePlayer).textContent = roundScore;
	}
	else
	{
		//next player
		nextPlayer();
	}
	prev_dice=dice;
	}
	
	

})
document.querySelector('.btn-new').addEventListener('click',init);
document.querySelector('.btn-hold').addEventListener('click',function()
{
	

	if(gamePlay)
	{
		scores[activePlayer]=scores[activePlayer]+roundScore;
		document.getElementById('score-'+ activePlayer).textContent=scores[activePlayer];
		var winning_score=document.querySelector('.winn-score').value;
		//console.log(winning_score);
		if(!winning_score)
		{
			winning_score=100;
		}
		console.log(winning_score)
		if(scores[activePlayer]>winning_score)
	{
		document.getElementById('name-'+activePlayer).textContent='WINNER';
		document.querySelector('.dice').style.display='none';
		document.querySelector('.player-'+ activePlayer +'-panel').classList.remove('active');
		document.querySelector('.player-'+ activePlayer +'-panel').classList.add('winner');
		gamePlay=false;
	}
		//newgame();
	
	else
	{
		nextPlayer();
	}
	}
	//var x;
	
})

function init()
{
scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlay=true;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.querySelector('.dice').style.display='none';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='player 2';

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');


//
}
function nextPlayer()
{
	roundScore=0;
		document.querySelector('#current-0').textContent = '0';
		document.querySelector('#current-1').textContent = '0';
		//var prev_active =activePlayer;
		activePlayer === 0 ? activePlayer =1: activePlayer=0;
		document.querySelector('.player-0-panel').classList.toggle('active');
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.dice').style.display='none';
		prev_dice=-1;
}