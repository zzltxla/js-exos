let ran = Math.floor(Math.random() * 100);
let usr = document.querySelector("input");
let button = document.querySelector("button");
let counter = 7;
//VAR REGION ENDS HERE



function whatNb() {
    if ((usr.value).match(/[a-zA-Z]/) || usr.value === '') {
        alert("Please enter a valid number");
    }
    if (counter > 1) {
        counter--;
        if ((usr.value).match(/[0-9]/)) {
            console.log(ran);
            if ((usr.value).includes(ran)) {
                alert("You won !");
                return whatNb;
            } 
            if (usr.value !== ran) {
                if (usr.value < ran) {
                    alert("It's a bigger number, retry :");
                } 
                if (usr.value > ran) {
                    alert("It's a smaller number, retry :");
                }
            }
        }
        console.log(usr.value);
        alert("You have " + counter + " tries left !");
    } else if (counter === 0 && usr.value !== ran) {
        alert("You lost the number was " + ran + " !");
    }
}

button.addEventListener('click', whatNb);






/*function retry() {      //usr retries, bigger or smaller
    alert("Réessayez :");
    function bigSmall() {
        if (usr < ran) {
            let attempts = prompt("Plus grand :");  //ran is bigger
            try  {   //IF usr matchran, win
                (!notTrue)
                setTimeout (winner(), 100);   
            } catch  {
                (notTrue)
                retry(attempts);
            }
        } else if (usr > ran) { //ran is smaller
            let attempts = prompt("Plus petit :");
            try  { //IF usr match ran, win
                (!notTrue);
            } catch {
                (notTrue);
                retry(attempts);
            } finally {
                winner();
            }
        }
    }
    bigSmall();
}


function guessNb() {
    while (counter > 0) {
        alert('Il vous reste ' + counter + ' essais !');
        if (usr === '' || usr.match(/[a-zA-Z]/)) {
            setTimeout (function() {
                alert("Veuillez entrer un nombre valide !");
                location.reload();
            }, 100);
        } else if (usr.match(/[0-9]/)) {
            console.log(ran);
            if (!notTrue) {  //IF usr match ran, win
                setTimeout (winner(), 100); 
            } else if (notTrue) {       //IF usr didn't find the nb, retry
                retry();
            }
        }
        counter--; 
    }
} if (counter === 0 && notTrue) {
        alert("Perdu ! La réponse était " + ran + " !");     //IF user lost
}

guessNb(); */