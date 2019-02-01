
var scores, roundscore, activeplayer;    
init();

 document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    
 //getting a random number
    var dice = Math.floor(Math.random()*6) + 1 ;
 //displaying image
    var DiceDom = document.querySelector('.dice');
    DiceDom.style.display = 'block';
    DiceDom.src = 'dice-' +dice +'.png';
    

if(dice!==1)
    {
       //adding value in roundscore
        roundscore += dice;
        document.querySelector("#current-" +activeplayer).textContent = roundscore;
    }
else 
    {
        
    nextplayer();
        
    }
        
    });


 document.querySelector('.btn-hold').addEventListener('click',function(){
     
     
     scores[activeplayer] += roundscore;
     
     document.querySelector('#score-' +activeplayer).textContent = scores[activeplayer];
     document.querySelector('.dice').style.display = 'none';
     
     if(scores[autoplayer] => 10]){
         
         document.querySelector('#name-' +activeplayer).textContent = "WINNER!!!"
     }
     
     nextplayer();
     
 }) ; 


document.querySelector('.btn-new').addEventListener('click',init);

function nextplayer()
{
    
    
     activeplayer === 0 ? activeplayer = 1 : activeplayer = 0;
        roundscore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        //
};



function init()
{

scores = [0,0];
roundscore = 0;
activeplayer = 0;

    document.querySelector('.dice').style.display = 'none';
//dice = Math.floor(Math.random()*6) + 1 ;

//document.querySelector("#current-" +activeplayer).textContent = dice;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'PLAYER 1';
document.getElementById('name-1').textContent = 'Player 2';    
   

}
