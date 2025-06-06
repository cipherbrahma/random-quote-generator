const quotes = [
    "Class lo unnapudu evadana cheptadu. Exam lo rasevade topper avtadu. – Ravindra Narayan",
    "Manam Bagunapudu lekalu mataladi. Kasthalo unapudu viluvalu matladakudadu. – Viraj Anand",
    "Knowledge is Divine ante Wine entha tagithe antha manchidi. – Shivram Babai",
    "Athiga aasapade magaadu... athiga aavesapade aadadhi sukhapadinatu charithra lo ledu. – Narasimha",
    "Telisindi Gorantha. Teliyalsindhi Kondantha. – Baba",
    "Rechakotku Nannu Rechagotku. – Godavari bullodu",
    "Thine varaku istharaku antaru Thinesaka engilaku antaru inthe mowa – Vanki",
    "Aadapilla ni aadapilla enduk antaro telusa? Aadapilla Eedapilla kadu kabati – Sharmila",
    "Idly pindi tho dosa eyochu kani, Dosa pindi toh idly matram cheyalemu – Batasari",
    "Perugannam lo peruguntundi kani, Pulihora lo puli undadu mowa – Anveshi",
    "Gaalo vimanam samudram lo padutundemo kani, submarine matram epudu gaalo egaraledu – Salaar",
    "Manam mokkaki neelu matrame poyal mowa, puvvu matram ashinchakudadu – Thandel Shankar",
    "Punjochi pettani dengthe etluntado telsa, nen ochi kodthe atle untadi – Punju",
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  }  