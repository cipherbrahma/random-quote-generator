const quotes = [
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "Two things are infinite: the universe and human stupidity. – Albert Einstein",
    "So many books, so little time. – Frank Zappa",
    "A room without books is like a body without a soul. – Cicero",
    "In the middle of every difficulty lies opportunity. – Einstein"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }  