let randomnum = Math.round(Math.random()*100+1);
const userinput = document.getElementById('userinput');
const submit = document.getElementById('btn');
const Previous_Guess = document.getElementById('pregusse');
const Guess_Remaining = document.getElementById('remaining');
const loworhigh = document.getElementById('loworhigh');
const result = document.getElementById('result');

let btn = document.createElement('button');
btn.style.backgroundColor ='black';
btn.style.color ='white';
btn.style.borderRadius ='15px';
btn.style.padding =' 10px';
btn.style.marginTop =' 10px';
btn.style.position = 'fixed';
    console.log(btn);;
let arr =[];
let playing = true;
let no_of_guess = 1;

if(playing){
    submit.addEventListener('click', (e) =>{
        e.preventDefault();
        let guess = parseInt(userinput.value);
        isvalid(guess);
    })
}

function isvalid(guess){
    if(guess<1||guess>100||isNaN(guess)){
        alert(`Please enter valid number`);
    }else{
        arr.push(guess);
        if(no_of_guess>10){
            displayguess(guess);
            displaymassage('Game Over!');
            endgame();
        }else{
            displayguess(guess);
            checkguess(guess);
        }
    }
}


function checkguess(guess){
    if(guess==randomnum){
        displaymassage(`Your Guess is Right`);
        endgame();
    }else if(guess>randomnum){
        displaymassage(`Your Guess is Tooo High`);
    }else if(guess<randomnum){
        displaymassage(`Your Guess is Tooo Low`);
    }
}

function displayguess(guess) {
    userinput.value ='';
    Previous_Guess.innerHTML += `  ${guess}, `;
    no_of_guess++;
    let value = ` ${ 11-no_of_guess}`;
    Guess_Remaining.innerHTML = value;
    if(Guess_Remaining.innerHTML<0){
        Guess_Remaining.innerHTML = `  Not remaning present.`;
    }
}

function displaymassage(massage) {
    loworhigh.innerHTML = massage;
}

function endgame() {
    userinput.value = '';
    userinput.setAttribute('disabled','');
    btn.innerHTML = `<span id="newgame">Start New Game</span>`;
    result.appendChild(btn);
    playing = false;
    newgame();
}

function newgame() {
    let button = document.getElementById('newgame');
    button.addEventListener('click',(e) =>{
        let randomnum = Math.round(Math.random()*100+1);
         userinput.removeAttribute('disabled');
        no_of_guess =1;
        arr =[];
        Previous_Guess.innerHTML ='';
        Guess_Remaining.innerHTML = `${11-no_of_guess}`;
        loworhigh.innerHTML = '';
        result.removeChild(btn);
        playing = true;

    })
}