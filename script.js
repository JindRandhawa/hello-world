/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// creating an array of quote objects with properties
var quotes = [
  {
    quote: 'If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success.',
    source: 'James Cameron',
  },
  {
    quote: 'Your time is limited, so don’t waste it living someone else’s life',
    source: 'Steve Jobs',
    citation: 'Stanford University',
  },
  {
    quote: 'The important thing to you is not how many years in your life, but how much life in your years!',
    source: 'Edward J. Stieglitz',
    year: '1947'
  },
  {
    quote: 'When something is important enough, you do it even if the odds are not in your favor.',
    source: 'Elon Musk',
    citation: '60Minutes',
    year: '2012',
  },
  {
    quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
    source: 'Eleanor Roosevelt'
  },
  {
    quote: 'It is impossible to live without failing at something. Unless you have lived cautiously, you might not have failed at all, but in which case, you might have failed by default.',
    source: 'JK Rowling',
    citation: 'Harvard',
    year: '2008'
  }
];
console.log(quotes); //log out the array in console







/***
 * `getRandomQuote` function
***/
function getRandomQuote() 
{
  var lenghtOfQuotes = quotes.length;
  var randomNumber = Math.floor(Math.random() * lenghtOfQuotes); //generating a random number ranging from zero to index of last item in array
  var randomQuoteObject = quotes[randomNumber];
  return randomQuoteObject; // returning the quote at generated random number index
}



/***
 * `printQuote` function
***/
function printQuote() 
{
  let randomQuote = getRandomQuote();

  console.log(randomQuote);
  console.log(randomQuote.source);

  let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p>" + "<p class='source'>" + randomQuote.source;  //creating a HTML string using selected quote objest and its properties

  if (randomQuote.citation) // checking if selected quote has citation property
  {
    PtoHTML1 += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if (randomQuote.year) // checking if selected quote has year property
  {
    PtoHTML1 += "<span class='year'>" + randomQuote.year + "</span>";
  }

  PtoHTML1 += "</p>";
  document.getElementById('quote-box').innerHTML = PtoHTML1; //displaying string and properties
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);