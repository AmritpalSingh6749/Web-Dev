let secret = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hscore = 0;
let hasWon = 0;
//document.querySelector('.secret').textContent = secret;
pageReset();
document.querySelector('.check').addEventListener("click", check);
document.querySelector('.again').addEventListener('click', pageReset);
document.querySelector('.guess').addEventListener("keypress", function (event) {
    if (event.key == "Enter")
        check();
});
function check()
{
    let num = Number(document.querySelector('.guess').value);
    if (num < 1 || num > 20) {
        alert("Invalid Input!");
        return;
    }
    if (hasWon == 1)
    {
        alert("Game Over, Please restart.");
        pageReset();
        return;
    }
    if (num == secret)
    {
        congrats();
        return;
    }
    if (score == 0)
    {
        return;
    }
    score--;
    if (score == 0)
    {
        document.querySelector('.message').textContent = "Game Lost!";
        document.querySelector('.score').textContent = score;
        return;
    }
    if(num>secret)
        document.querySelector('.message').textContent = "Too High!";
    else
        document.querySelector('.message').textContent = "Too Low!";
    document.querySelector('.score').textContent = score;
}

function pageReset()
{
    score = 20;
    secret = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing!';
    document.querySelector('.score').textContent = score;
    document.querySelector('.body').style.backgroundColor = 'BLACK';
    document.querySelector('.body').style.color = 'WHEAT';
    document.querySelector('.sp').style.background = 'BLACK';
    document.querySelector('.sp').textContent = '?';
    document.querySelector('.guess').value = '';
    hasWon = 0;
}

function congrats() {
    document.querySelector('.message').textContent = 'Correct Answer!';
    document.querySelector('.body').style.background = '#04f835';
    document.querySelector('.sp').textContent = secret;
    document.querySelector('.sp').style.background = '#04f835';
    document.querySelector('.body').style.color = 'BLACK';
    if (score > hscore)
        hscore = score;
    document.querySelector('.hs').textContent = hscore;
    hasWon = 1;     
}