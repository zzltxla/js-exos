let usr = prompt("Pierre, Feuille, Ciseaux !");
let probArr = ["Pierre", "Feuille", "Ciseaux"];
let ran = probArr[Math.floor(Math.random()*probArr.length)];    //to generate an option randomly
let firstChar = usr.charAt(0);
let upperChar = firstChar.toUpperCase();
let newUsr = upperCase();
//VAR REGION ENDS HERE



function upperCase () {
    firstChar === firstChar.toLocaleLowerCase();
    return upperChar += usr.substring(1);
}
function chiffoumi() {
    for (let i = 0; i < probArr.length; i++) {
        if (newUsr === probArr[i]) {
            alert(ran);
        }
        else if (ran == probArr[0] && newUsr == probArr[1] || ran == probArr[1] && newUsr == probArr[2] || ran == probArr[2] && newUsr == probArr[0]) {
            setTimeout(function () {        //if user wins
                alert("Gagné !");
                location.reload();
            }, 100); 
        }
        else if (ran == probArr[1] && newUsr == probArr[0] || ran == probArr[2] && newUsr == probArr[1] || ran == probArr[0] && newUsr == probArr[2]) {
            setTimeout(function () {        //if user loses
                alert("Perdu !");
                location.reload();
            }, 100); 
        }
        else if (ran == probArr[0] && newUsr == probArr[0] || ran == probArr[1] && newUsr == probArr[1] | ran == probArr[2] && newUsr == probArr[2]) {
            setTimeout(function () {        //if it's a tie
                alert("Match nul !");
                location.reload();
            }, 100); 
        } else {
            alert("Réessayez !");       //if it's not one of the options
        }
    }
};

chiffoumi();