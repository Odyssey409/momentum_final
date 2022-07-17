const quotes = [
  {
    quote:
      '"I never came upon any of my discoveries through the process of rational thinking."',
    author: "-Albert Einstein-",
  },

  {
    quote:
      '"He who pursues fame at the risk of losing his self is not a scholar."',
    author: "-Chuang-tzu-",
  },

  {
    quote:
      '"True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment."',
    author: "-William Penn-",
  },
  {
    quote:
      "\"If time flies when you're having fun, it hits the afterburners when you don't think you're having enough.\"",
    author: "-Jef Mallett-",
  },
  {
    quote:
      '"Courage is of no value unless accompanied by justice; yet if all men became just, there would be no need for courage."',
    author: "-Agesilaus the Second-",
  },
  {
    quote: '"The summer night is like a perfection of thought."',
    author: "-Wallace Stevens-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
