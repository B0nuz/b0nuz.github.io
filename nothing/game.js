var score = 0;
var bAmmount = 0;
var apc = 1;


function displayScore()
{
	document.getElementById('score').innerHTML = score +' agatek';
	document.getElementById('apcDisplay').innerHTML = apc + ' apc';
}

var isAgatkaFlipped;

function agatkaClick()
{
	var agatka = document.getElementById('imgatka');
	if (isAgatkaFlipped == 1)
	{
		agatka.style.transform = 'scale(1, 1)';
		isAgatkaFlipped = 0;
	}
	else
	{
		agatka.style.transform = 'scale(-1, 1)';
		isAgatkaFlipped = 1;
	}
	score++;

	displayScore();
}

function buy1()
{
	var playground = document.getElementById('playground');
	var price = 15 * (bAmmount * bAmmount * bAmmount + 1);
	var futurePrice = 15 * ((bAmmount+1) * (bAmmount+1) * (bAmmount+1) + 1);
	var bAmmountDisplay = document.getElementById('bAmmount');
	var bPrice = document.getElementById('bPrice');
	if( score >= price )
	{
		score -= price;
		if(bAmmount==0)
		{
			playground.innerHTML += '<img src="img/1b.gif" alt="/b/" style="pointer-events: none;">';
		}
		bAmmount++;
		bAmmountDisplay.innerHTML = bAmmount;
		bPrice.innerHTML = futurePrice + ' agatek';
		displayScore();
	}
}





window.setInterval(function(){
  score += bAmmount;
  displayScore();
}, 5000);

