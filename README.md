# Random_Quote_Generator

Full Stack Javascript Treehouse Techdegree Project #1 - Random Quote Generator

Project Requirements:

==========

## Create an array of JavaScript objects to hold the data for your quotes. Name the array `quotes`. The `quotes` array should be accessible in the global scope.
Each quote object in the quotes array should have the following properties:
-   [ ] A `quote` property which contains a string: the text of the quote to display on the page.
-   [ ] A `source` property which contains a string identifying the creator of the quote.
-   [ ] An optional `citation` property which contains a string identifying the publication the quote appears in.
-   [ ] An optional `year` property which contains a number identifying the date of the quote.

## Create a function named `getRandomQuote` which:
-   [ ] selects a random quote object from the quotes array
-   [ ] returns the randomly selected quote objects

## Create a function named `printQuote` which follows these rules:
-   [ ] `printQuote` calls the `getRandomQuote` function and stores the returned quote object in a variable.
-   [ ] `printQuote` constructs a string using the different properties of the quote object using the following HTML template:


```
<p class="quote"> [quote here] </p>
<p class="source"> [source here]
  <span class="citation"> [citation here] </span>
  <span class="year"> [year here] </span>
</p>
```

# Extra Credit

-   [ ] Add more properties to the quote object. For example, a tags property could include a list of "tags" like -- "humor", "business", "politics" -- to categorize each quote.
-   [ ] Randomly change the background color of the page, when the quote changes
-   [ ] Don't display a random quote more than once until ALL quotes from the array have been displayed.
-   [ ] Refresh the quote after a set amount of time. For example, every 30 seconds, make a new quote appear. (You can use the setInterval() or setTimeout() method to do this -- see the links in the Project Resources listing.)
