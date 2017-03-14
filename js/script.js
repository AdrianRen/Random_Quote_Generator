let randomQuote;
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Create an array of JavaScript objects to hold the data for my quotes.
// Name the array quotes. The quotes array should be accessible in the global scope
let quotes = [
    {
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein"
    },
    {
        quote: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
        source: "Elie Wiesel"
    },
    {
        quote: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
        source: "Margaret Mead"
    },

    {
        quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        source: "Marilyn Monroe"
    },
];

// Create a function named getRandomQuote which:
    // selects a random quote object from the quotes array
    // returns the randomly selected quote object
function getRandomQuote() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return randomQuote;
}

// Create a function named printQuote which follows these rules:
    // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    // printQuote constructs a string containing the different properties of the quote object using the following HTML template:
function printQuote() {

}
console.log(getRandomQuote());
console.log(Math.floor(Math.random() * quotes.length));
