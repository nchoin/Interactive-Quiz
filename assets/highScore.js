const initialsToStore = document.getElementById('initialsScore');
const scoreToStore = document.getElementById('score');

function clearLabels(){
    initialsToStore.textContent = '';
    scoreToStore.textContent = '';
}

document.querySelector('#postScoreBtn').addEventListener('click',()=> {localStorage.setItem(initialsToStore.value, scoreToStore.value);
    document.getElementById('info').append("Score added🏆");  
})
setTimeout(function(){
    location.reload();
}, 10000);