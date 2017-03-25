// save the div#quote-box to a variable
let outputDiv = document.getElementById('quote-box');
// Create an array of JavaScript objects to hold the data for my quotes.
// Name the array quotes. The quotes array should be accessible in the global scope
let quotes = [{
        quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        source: "Albert Einstein"
    },
    {
        quote: "Action is eloquence.",
        source: "William Shakespeare"
    },
    {
        quote: "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
        source: "Margaret Mead"
    },

    {
        quote: "Be great in act, as you have been in thought.",
        source: "William Shakespeare",
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
    },
    {
        quote: "If A is success in life, then A equals x plus y plus z. Work is x; y is play; and z is keeping your mouth shut.",
        source: "Albert Einstein",
        citation: "Observer",
        year: "15 Jan 1950",
        tags:"Success"
    },
    {
        quote: "Complaining is good for you as long as you're not complaining to the person you're complaining about.",
        source: "Lynn Johnston",
        citation: "For Better or For Worse",
        year: "1992",
        tags:"Atitude"
    },
    {
        quote: "To want to be what one can be is purpose in life.",
        source: "Cynthia Ozick",
        citation: "O Magazine",
        year: "Sep 2002",
        tags:"Dreams"
    },
    {
        quote: "Friends were like clothes: fine while they lasted but eventually they wore thin or you grew out of them.",
        source: "David Nicholls",
        citation: "One Day",
        year: "2010",
        tags:"Friendship"
    },
    {
        quote: "I can believe anything, provided that it is quite incredible.",
        source: "Oscar Wilde",
        citation: "The Picture of Dorian Gray",
        year: "1891",
        tags:"Belief"
    },
    {
        quote: "Nobody cleared a path for themselves by giving up.",
        source: "Alacia Bessette",
        citation: "Simply from Scratch",
        year: "2010",
        tags:"Failure"
    },
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
    let html = `<p class="quote"> ${quotation.quote} </p>
                <p class="source"> ${quotation.source}`;
    quotation.citation && (html += `<span class="citation"> ${quotation.citation} </span>`);
    quotation.year && (html += `<span class="year"> ${quotation.year} </span>`);
    html += `</p>`;
    quotation.tags && (html += `<span class="tags"> Quotation by subject: ${quotation.tags} </span>`);
    outputDiv.innerHTML = html;
    // Change the background color randomly
    document.body.style.backgroundColor = getRandomColor();
}
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let loadBtn = document.getElementById('loadQuote');
loadBtn.addEventListener("click", printQuote, false);
