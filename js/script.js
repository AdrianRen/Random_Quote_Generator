// save the div#quote-box to a variable
let outputDiv = document.getElementById('quote-box');

// Create a function named getRandomQuote
// selects a random quote object from the quotes array
// returns the randomly selected quote object
const getRandomQuote = () => {
  // Get the random index from object quotes
  let indexOfQuotes = Math.floor(Math.random() * quotes.length);
  // Delect the random quote from array of JS objects, quotes, and store it in a variable
  let randomQuote = quotes.splice(indexOfQuotes,1)[0];
  // Store the random quotes in the new array called usedQuotes;
  usedQuotes.push(randomQuote);
  // When quotes got empty, get values from usedQuotes, and empty usedQutes.
  if (quotes.length === 0) {
    quotes = usedQuotes;
    usedQuotes = [];
  }
  return randomQuote;
}

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
    // Change the background color and button randomly
    document.body.style.backgroundColor = getRandomColor();
    // save #loadQuote to button, and make the color synced between background and button.
    const button = document.getElementById('loadQuote');
    button.style.backgroundColor = document.body.style.backgroundColor;
}
// Refresh the quotation every 10 seconds
setInterval(printQuote, 10000);
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
let loadBtn = document.getElementById('loadQuote');
loadBtn.addEventListener("click", printQuote, false);
