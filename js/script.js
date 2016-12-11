// create array of quotes
var quotes = [
    {
        quote: "Imagination is more important than knowledge.", source: "Albert Einstein", citation: "Cosmic Religion", year: 1931, tags: "inspiration"
    },
    {
        quote: "The act of observing disturbs the observed.", source: "Cecil Adams", citation: "on Heisenberg's Uncertainty Principle", year: 1982, tags: "facts"
    },
    {
        quote: "The first time is the best for everything. After that, you know too much and nothing's ever quite the same.", source: "Michael Caine", citation: "Jaws: The Revenge", year: 1987, tags: "inspiration"
    },
    {
        quote: "Of all the gin joints in all the towns in all the world, she walks into mine.", source: "Humphrey Bogart", citation: "Casablanca", year: 1942, tags: "humor"
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
 

var usedQuotes = [];                                        // define array to store those index values from the quotes array which have been used

function getRandomQuote() {
    var x;                                                  // declare variable x to represent the current index of the quotes array
    
    do {
        x = Math.floor(Math.random() * quotes.length);      // assign x a random number between 0 and length of quotes array - 1 ...
    }
    
    while (usedQuotes.includes(x));                         // ... if usedQuotes array already has current assignment of x, assign x a new value again
    
    // Once a new value of x is selected which hasn't been used already:
    
        usedQuotes.push(x);                                 // add x to usedQuotes array since it is new (and hasn't been used previously)
        console.log(usedQuotes);                            // log out to the console the usedQuotes array
        console.log(quotes[x]);                             // also log out to the console the quote object at position x in the quotes array
        if (usedQuotes.length === quotes.length) {          // check to see if all quotes have now been used (thus usedQuotes array length = quotes array length)
            usedQuotes = [];                                // clear usedQuotes array since it's full and all quotes have now been used only once
        } 
    //}
    return quotes[x];                                       // return the object located at index x of the quotes array
}

function printQuote() {
    var selectedQuote = getRandomQuote();                   // set selectedQuote variable to the returned object from the getRandomQuote function

    // Define variable "output" as the HTML to go into the quote-box div
    
    var output = '<p class="quote">' + selectedQuote.quote + '</p>';
    output += '<p class="source">' + selectedQuote.source;              // append output with source
    
    if (selectedQuote.citation) {                           
        output += '<span class="citation">' + selectedQuote.citation + '</span>';   // conditional check to see if there's a citation on current quote
    }
    
    if (selectedQuote.year) {
        output += '<span class="year">' + selectedQuote.year + '</span>';           // conditional check to see if there's a year on current quote
    }
    
    output += '</p>';                                                               // end the output with closing paragraph tag
    
    document.getElementById('quote-box').innerHTML = output;  // update the quote-box element's inner HTML with the "output" contents
    applyColor();                                             // call (execute) the applyColor function at the same time as printQuote is executed (see applyColor definition below)
    restartTimer();                                           // call restartTimer so that the quote will refresh automatically after predefined seconds
    cancelInitialTimer();                                     // cancel the initial timer if first refresh was done by button click
    }
    
var colors = ["#e81919", "#4ca64c", "#3232d6", "red", "blue", "purple"];           // create array of colors to be used as rotating body background colors

function randomColor() {                                      // define function for randomly choosing one of the background colors
    var c = Math.floor(Math.random() * colors.length);
    return colors[c];
}

function applyColor() {                                       // define function to apply the randomly chosen color to use as the new body background color
    var newColor = randomColor();
    document.body.style.backgroundColor = newColor;
}

    // ------ set up timers to (a) automatically refresh the quote after 8 seconds and (b) reset 8-second timer on click of button ------------
    
var timer;  // declare variable called timer

function restartTimer() {
    timer = setTimeout(printQuote, 8000);   // define function to run printQuote every 8 seconds (note that restartTimer is called by printQuote, above)
}

function restartTimerWithClick () {         // define function to clear the already-running timer when button is clicked
    clearTimeout(timer);
}

var initialTimer;
function initialTimer() {
    initialTimer = setTimeout(printQuote, 8000);
}

initialTimer();

function cancelInitialTimer() {
    clearTimeout(initialTimer);
}

//setTimeout(printQuote, 8000);  // set one-time initial 8-second timer

document.getElementById('loadQuote').addEventListener("click", restartTimerWithClick, false);   // cancel the already pending refresh timer
document.getElementById('loadQuote').addEventListener("click", printQuote, false);  // add event listener to respond to "Show another quote" button clicks