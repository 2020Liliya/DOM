const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

// Get Random Quote from Free API
const getRandomQuote = () => {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const random = Math.floor(Math.random() * data.length);
      if (data[random].author) {
        quote.innerText = `"${data[random].text}"`;
        person.innerText = data[random].author;
      } else {
        getRandomQuote();
      }
    })
}

window.addEventListener('load', getRandomQuote);
btn.addEventListener('click', getRandomQuote);