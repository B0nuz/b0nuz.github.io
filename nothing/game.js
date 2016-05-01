var score = 0;
function displayScore()
{
	document.getElementById('score').innerHTML = score +' agatek';
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

	score += 1;
	displayScore();
}