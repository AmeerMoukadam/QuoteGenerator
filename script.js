
/*** 
 * this is my quotes array
***/
var quotes = [
{quote: "Be the change that you wish to see in the world.", source: "Mahatma Gandhi"},
{quote: "No one can make you feel inferior without your consent.", source: "Eleanor Roosevelt", citation: "speech", year: 1940},
{quote: "If you tell the truth, you don't have to remember anything.", source: "Mark Twain"},
{quote: "Be yourself; everyone else is already taken.", source: "Oscar Wilde"},
{quote: "You only live once, but if you do it right, once is enough.", source: "Mae West"},
{quote: "I don't want to be interesting, I want to be good.", source: "Ludwig Mies van der Rohe"}
];


/***
 * this is my function that pulls a random quote from my array.
***/

function getRandomQuote() {
  var randomNum = Math.floor(Math.random() * quotes.length);
  var anotherVariable1 = quotes[randomNum];
  return anotherVariable1;
}


/***
 * this function prints the quote with html.
***/
function printQuote() {
  var quoteStringer = '';
  var anotherVariable = getRandomQuote();
   quoteStringer = '<p class = "quote">' + anotherVariable.quote + '</p>';
   quoteStringer += '<p class = "source">' + anotherVariable.source +',';
  
   if (anotherVariable.year) {
     quoteStringer += `<span class = "year"> ${anotherVariable.year} </span>`;
   }
 
  if (anotherVariable.tag) {
     quoteStringer += `<span class = "tag"> ${anotherVariable.tag} </span>`;
  }
  if (anotherVariable.citation) {
     quoteStringer += `<span class = "citation"> ${anotherVariable.citation} </span>`;
     
  }   document.getElementById("quote-box").innerHTML = quoteStringer; }
 
  

  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE OF CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
