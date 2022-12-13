let usr = prompt("Veuillez saisir un mois (entre 1 et 12) : ");
//VAR REGION ENDS HERE 

function numberOfDays() {
    if (usr !== NaN && usr > 0 && usr <= 12) {
        if (Boolean(usr.search(/['1']/ || /['3']/ || /['5']/ || /['7']/ || /['8']/ || /['10']/ || /['12']/))) {
        //30days in the month
            setTimeout(function () {
                alert("30 jours");
                location.reload();
            }, 200); 
        } else if (Boolean(usr.search(/['2']/ || /['4']/ || /['6']/ || /['9']/ ||/ ['11']/))) {
        //31days in the month
            setTimeout(function () {
                alert("31 jours");
                location.reload();
            }, 200);
        } 
    } else {
        alert('Recommencez !');
    }
}
numberOfDays();