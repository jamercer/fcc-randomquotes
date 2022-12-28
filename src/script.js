let paperElement;
let quoteElement;
let authorElement;
let twitterBtn;
let facebookBtn;
let tumblrBtn;
let animLock = false
const animLockTime = 600;
let quotesLibrary;

window.onload = () => {
  // store elements
  paperElement = document.querySelector("#paper");
  quoteElement = document.querySelector("#text");
  authorElement = document.querySelector("#author")
  twitterBtn = document.querySelector('#tweet-quote');
  facebookBtn = document.querySelector('#facebook-quote');
  tumblrBtn = document.querySelector('#tumblr-quote');

  fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then((r) => r.json())
    .then((r) => {
      quotesLibrary = r;
    })
    .then(() => {
      loadNewQuote();
    });
}

animLockTimeout = () => {
  animLock = true
  setTimeout(() => {
    animLock = false
  }, animLockTime);
}

loadNewQuote = () => {
  let index = Math.floor((quotesLibrary.quotes.length) * Math.random())
  quoteElement.innerText = quotesLibrary.quotes[index].quote
  authorElement.innerText = quotesLibrary.quotes[index].author
  // twitterBtn.attr('href','')
  // tumblrBtn.attr('href','')
  paperElement.className = "paper_feeded";
  animLockTimeout()
}

eject = () => {
  if (animLock) return;
  paperElement.className = "paper_ejected";
  animLockTimeout()
}

newQuote = () => {
  if (animLock) return
  if (paperElement.className === "paper_ejected") {
    loadNewQuote();
  } else {
    eject();
    setTimeout(() => {
      loadNewQuote();
    }, animLockTime);
  }
}

