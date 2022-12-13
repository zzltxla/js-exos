let usr = prompt("Ni oui ni non");
//VAR REGION ENDS HERE

for (let i = 0; i < usr.length; i++) {
    if (Boolean(usr.search(/^non$/) && usr.search(/^oui$/)) == false) {
        alert('perdu');
    } else {
        prompt("Ni oui ni non");
    }
}
