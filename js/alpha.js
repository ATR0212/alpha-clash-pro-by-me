function getRandomElphabet(){
    const allElphabet = 'abcdefghijklmnopqrstuvwxyz';
    const ToElphabet = allElphabet.split('');

    // random number
    const randomNumber = Math.random()*25;
    const toNumber = Math.round(randomNumber);
    // console.log(toNumber);

    const alphabet = ToElphabet[toNumber];
    return alphabet;
}


function addBgColor(elementId){
    const catchId = document.getElementById(elementId);
    catchId.classList.add('bg-orange-400');
}

function removeColor(elementId){
    const getId = document.getElementById(elementId);
    getId.classList.remove('bg-orange-400');
}