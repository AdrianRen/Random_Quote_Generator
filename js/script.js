// save the div#quote-box to a variable
let outputDiv = document.getElementById('quote-box');
// Create an array of JavaScript objects to hold the data for my quotes.
// Name the array quotes. The quotes array should be accessible in the global scope
let quotes = [{
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
        source: "Marilyn Monroe",
        year: "1953"
    },
    {
        quote: "There is said to be hope for a sick man, as long as there is life.",
        source: "Cicero",
        citation: "Epistulae ad Atticum (Letters to Atticus) Book IX, Letter X, section 3",
    },
    {
        quote: "What you do not wish for yourself, do not do to others.",
        source: "Confucius",
        citation: "Analects XV.24",
        year: "744"
    }
];
// Create a function named getRandomQuote
// selects a random quote object from the quotes array
// returns the randomly selected quote object
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
// Create a function named printQuote
const printQuote = () => {
    // printQuote calls the getRandomQuote function and stores the returned quote object in a variable
    let quotation = getRandomQuote();
    // printQuote constructs a string containing the different properties of the quote object
    let html = `<p class="quote"> ${quotation.quote} </p>`;
    html += `<p class="source"> ${quotation.source}`;
    quotation.citation && (html += `<span class="citation"> ${quotation.citation} </span>`);
    quotation.year && (html += `<span class="year"> ${quotation.year} </span>`);
    html += `</p>`;
    outputDiv.innerHTML = html;
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let loadBtn = document.getElementById('loadQuote');
loadBtn.addEventListener("click", printQuote, false);
