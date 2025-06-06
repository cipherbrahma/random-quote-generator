const quotes = [
    "Class lo unnapudu evadana cheptadu. Exam lo rasevade topper avtadu. – Ravindra Narayan",
    "Manam Bagunapudu lekalu mataladi. Kasthalo unapudu viluvalu matladakudadu. – Viraj Anand",
    "Knowledge is Divine ante Wine entha tagithe antha manchidi. – Shivram Babai",
    "Athiga aasapade magaadu... athiga aavesapade aadadhi sukhapadinatu charithra lo ledu. – Narasimha",
    "In the middle of every difficulty lies opportunity. – Einstein"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }  