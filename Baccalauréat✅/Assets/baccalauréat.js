let usr = prompt("Veuillez saisir votre moyenne.");

function sumGrades () {
    if (usr < 10) {
        alert("recalé");
    } else if (usr < 12 && usr > 10 ) {
        alert("reçu");
    } else {
        alert("reçu avec mention");
    }
}
sumGrades();