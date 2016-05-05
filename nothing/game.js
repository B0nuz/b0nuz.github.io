var score = 0;
var bAmmount = 0;
var dogAmmount = 0;
var shrekAmmount = 0;
var redpillAmmount = 0;
var aps = 0;


function displayScore()
{
	aps = bAmmount + (dogAmmount * 2) + (shrekAmmount * 4) + (redpillAmmount * 6);
	document.getElementById('score').innerHTML = score +' agatek';
	document.getElementById('apsDisplay').innerHTML = aps + ' agatek na sekunde';
}
function addScore()
{
	score += 1000;
	displayScore();
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
	var price = 15 * (bAmmount * bAmmount + 1);
	var futurePrice = 15 * ((bAmmount+1) * (bAmmount+1) + 1);
	var bAmmountDisplay = document.getElementById('bAmmount');
	var bPrice = document.getElementById('bPrice');
	if( score >= price )
	{
		score -= price;
		if(bAmmount==0)
		{
			playground.innerHTML += '<img src="img/1b.gif" alt="/b/" class="optionGif" style="pointer-events: none;">';
		}
		bAmmount++;
		bAmmountDisplay.innerHTML = bAmmount;
		bPrice.innerHTML = futurePrice + ' agatek';
		displayScore();
	}
}

function buy2()
{
	var playground = document.getElementById('playground');
	var price = 100 * (dogAmmount * dogAmmount + 1);
	var futurePrice = 100 * ((dogAmmount+1) * (dogAmmount+1) + 1);
	var dogAmmountDisplay = document.getElementById('dogAmmount');
	var bPrice = document.getElementById('dogPrice');
	if( score >= price )
	{
		score -= price;
		if(dogAmmount==0)
		{
			playground.innerHTML += '<img src="img/2b.gif" alt="Doge" class="optionGif" style="pointer-events: none;">';
		}
		dogAmmount++;
		dogAmmountDisplay.innerHTML = dogAmmount;
		dogPrice.innerHTML = futurePrice + ' agatek';
		displayScore();
	}
}

function buy3()
{
	var playground = document.getElementById('playground');
	var price = 1000 * (shrekAmmount * shrekAmmount + 1);
	var futurePrice = 1000 * ((shrekAmmount+1) * (shrekAmmount+1) + 1);
	var shrekAmmountDisplay = document.getElementById('shrekAmmount');
	var bPrice = document.getElementById('shrekPrice');
	if( score >= price )
	{
		score -= price;
		if(shrekAmmount==0)
		{
			playground.innerHTML += '<img src="img/3b.gif" alt="Shruk" class="optionGif" style="pointer-events: none;">';
		}
		shrekAmmount++;
		shrekAmmountDisplay.innerHTML = shrekAmmount;
		shrekPrice.innerHTML = futurePrice + ' agatek';
		displayScore();
	}
}

function buy4()
{
	var playground = document.getElementById('playground');
	var price = 3000 * (redpillAmmount * redpillAmmount + 1);
	var futurePrice = 3000 * ((redpillAmmount+1) * (redpillAmmount+1) + 1);
	var redpillAmmountDisplay = document.getElementById('redpillAmmount');
	var bPrice = document.getElementById('shrekPrice');
	if( score >= price )
	{
		score -= price;
		if(redpillAmmount==0)
		{
			playground.innerHTML += '<img src="img/4b.gif" alt="Redpill" class="optionGif" style="pointer-events: none;">';
		}
		redpillAmmount++;
		redpillAmmountDisplay.innerHTML = redpillAmmount;
		redpillPrice.innerHTML = futurePrice + ' agatek';
		displayScore();
	}
}





window.setInterval(function(){
  score += bAmmount;
  score += dogAmmount * 2; 
  score += shrekAmmount * 4;
  score += redpillAmmount * 6;
  displayScore();
}, 1000);

