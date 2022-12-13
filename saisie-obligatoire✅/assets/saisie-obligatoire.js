let number = prompt("Please enter a number :");
//VAR REGION ENDS HERE 

function obligatory() {
    if (number == false || number === undefined || number === "" || number === null|| number === NaN) { //if no number, retry
        alert("Please retry :"); 
        setTimeout (() => {         //RELOAD FUNCTION
            window.location.reload();
        }, 5000);
        } else {
        document.write(number);  //writes the number in the HTML 
    }
}

obligatory();