// create array of quotes
var quotes = [
    {
        quote: "Imagination is more important than knowledge.", source: "Albert Einstein, ", citation: "Cosmic Religion, ", year: 1931, tags: "inspiration"
    },
    {
        quote: "The act of observing disturbs the observed.", source: "Cecil Adams, ", citation: "on Heisenberg's Uncertainty Principle, ", year: 1982, tags: "facts"
    },
    {
        quote: "The first time is the best for everything. After that, you know too much and nothing's ever quite the same.", source: "Michael Caine, ", citation: "Jaws: The Revenge, ", year: 1987, tags: "inspiration"
    },
    {
        quote: "Of all the gin joints in all the towns in all the world, she walks into mine.", source: "Humphrey Bogart, ", citation: "Casablanca, ", year: 1942, tags: "humor"
    },
    {
        quote: "When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.", source: "Henry Ford", tags: "inspiration"
    },
    {
        quote: "The two most important days in your life are the day you were born and the day you find out why.", source: "Mark Twain", tags: "facts"
    },
    {
        quote: "Whether you think you can, or think you can't, you're right.", source: "Henry Ford", tags: "inspiration"
    }
];

// NOTE:  Commas were added as needed to the source and citations, and the styles.css file was edited to remove the commas before citation and year (I commented them out). This eliminated the issue of commas still appearing in cases where citation and/or year were undefined in a quote object.  

var usedQuotes = [];                                        // define array to store those index values from the quotes array which have been used

function getRandomQuote() {
    var x = Math.floor(Math.random() * quotes.length);      // get randomly generated number between 0 and length of quotes array
    if (usedQuotes.includes(x)) {                           // check if the randomly generated x has already been used (and is thus stored in the usedQuotes array)
        getRandomQuote();                                   // if x has already been used, execute getRandomQuote() again to try another x
    } 
    else {
        usedQuotes.push(x);                                 // add x to usedQuotes array since it is new (and hasn't been used previously)
        if (usedQuotes.length === quotes.length) {          // check to see if all quotes have now been used (thus usedQuotes array length = quotes array length)
            console.log(usedQuotes);                        // write out to the console the full usedQuotes array before clearing it
            console.log(quotes[x]);
            usedQuotes = [];                                // clear usedQuotes array since it's full and all quotes have now been used only once
        } else {
            console.log(usedQuotes);                        // if not all quotes have yet been used, log out to the console the current usedQuotes array
            console.log(quotes[x]);
        }
    }
    return quotes[x];                                       // return the object located at index x of the quotes array
}

function printQuote() {
    var selectedQuote = getRandomQuote();                   // set selectedQuote variable to the returned object from the getRandomQuote function

    if (!selectedQuote.citation) {                          // if citation is undefined, make it blank ("") ** SEE NOTE ABOVE REGARDING COMMAS **
        selectedQuote.citation = "";
    }
    if (!selectedQuote.year) {                              // if year is undefined, make it blank ("")  ** SEE NOTE ABOVE REGARDING COMMAS **
        selectedQuote.year = "";
    }

    // define variable "output" as the HTML to go into the quote-box div
    var output = '<p class="quote">' + selectedQuote.quote + '</p><p class="source">' + selectedQuote.source + '<span class="citation">' + selectedQuote.citation + '</span><span class="year">' + selectedQuote.year + '</span></p>';


    document.getElementById('quote-box').innerHTML = output;  // update the quote-box element's inner HTML with the "output" contents
    applyColor();                                             // call (execute) the applyColor function at the same time as printQuote is executed (see applyColor definition below)
}

var colors = ["#e81919", "#4ca64c", "#3232d6", "red", "blue", "purple"];               // create array of colors to be used as rotating body background colors

function randomColor() {                                      // define function for randomly choosing one of the background colors
    var c = Math.floor(Math.random() * colors.length);
    return colors[c];
}

function applyColor() {                                       // define function to apply the randomly chosen color to use as the new body background color
    var newColor = randomColor();
    document.body.style.backgroundColor = newColor;
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);  // resetTimer() calls printQuote()
// event listener to respond to "Show another quote" button clicks                  // I am attempting to reset the timer on click of button
// when user clicks anywhere on the button, the "printQuote" function is called     // but cannot seem to get it to work after many tries
//document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//var timer = window.setInterval(printQuote, 4000);

//function restartTimer() {
//    return timer;
//}

//function resetTimer() {
//    window.clearInterval(timer);
//    window.setInterval(printQuote, 4000);
//    printQuote();
//}