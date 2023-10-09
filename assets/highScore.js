const initialsToStore = document.getElementById('initialsScore');
const scoreToStore = document.getElementById('score');

document.querySelector('#postScoreBtn').addEventListener('click',()=> {localStorage.setItem(initialsToStore.value, scoreToStore.value);
document.getElementById('info').append("Score added🏆");    
})