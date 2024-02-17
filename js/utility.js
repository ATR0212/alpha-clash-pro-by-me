function hideElement(elementId){
    const catchId = document.getElementById(elementId);
    catchId.classList.add('hidden');
}

function showElement(elementId){
    const catchId = document.getElementById(elementId);
    catchId.classList.remove('hidden');
}

function continueGame(){
    const mainAlphabet = getRandomElphabet();

    const showingAlphabet = document.getElementById('screen-alphabet');
    showingAlphabet.innerText = mainAlphabet;

    addBgColor(mainAlphabet);
}


function catchTheKeyUp(event){
    const playerPressed = event.key;

    const catchId = document.getElementById('screen-alphabet');
    const runningAlphabet = catchId.innerText;
    const toLowerCase = runningAlphabet.toLowerCase();

    if(playerPressed === toLowerCase){
        console.log('you got a point');

        const currentScoreId = document.getElementById('current-score');
        const currentScoreText = currentScoreId.innerText;
        const currentScore = parseInt(currentScoreText);

        const newScore = currentScore + 1;
        currentScoreId.innerText = newScore;

        removeColor(playerPressed);
        continueGame();
    }
    else{
        // console.log('clicl the right button')
        const currentLifeId = document.getElementById('current-life');
        const currentLifeText = currentLifeId.innerText;
        const currentLife = parseInt(currentLifeText);
        
        const newLife = currentLife - 1;
        currentLifeId.innerText = newLife;
    }
}

document.addEventListener('keyup', catchTheKeyUp);



function play(){
    hideElement('start-game');
    showElement('playing-field');
    continueGame();
}