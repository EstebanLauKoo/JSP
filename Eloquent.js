// "var" can be accessed outside of the loop "let" allows you to declare variables that are limited in scope

function callFunction() {
    for (var line = "#"; line.length < 7; line += "#")
        console.log(line);

    console.log(line); // this is outside of the scope because used "let", change for loop 1st condition to var instead of let

}

callFunction();

function run() {
    var foo = "Foo";
    let bar = "Bar";

    console.log(foo, bar);

    {
        let baz = "Bazz";
        console.log(baz);
    }

    //console.log(baz); // ReferenceError

}

run();

function fizzBuzz(number) {
    for (var i = 1; i < number; i++ ) {
        console.log(i);
        if (i % 3 === 0 || i % 5 === 0) {
            console.log("FizzBuzz")
        }
    }
}

function fizzBuzzPremade(number) {
    for (let i = 1; i < number; i++) {
        var string = "";
        if (i % 3 === 0) {
            string += "Fizz"
        }
        if (i % 5 === 0) {
            string += "Buzz"
        }
        else {
            string += i
        }
        console.log(string)
    }
}

//fizzBuzz(100);
fizzBuzzPremade(10); // This function builds the string by putting conditions on what gets put in based on the modulus. it will also spit out the number if it doesn't fit the conditions still releases a string each time
