let number;

for (number = 0; number <= 100; number++){
    console.log(number);
    if (number % 3 == 0) {
        console.log("fizz");
    } 
    else if (number % 5 == 0) {
        console.log("buzz");
    }
    else if (number % 5 == 0 && number % 3 == 0) {
        console.log("fizzbuzz");
    }
}

