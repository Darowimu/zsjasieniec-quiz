// let person = prompt("Jak się nazywasz?", "Anonim");

const quizData = [
    {
      question: "W którym roku budynki po dawnej Cukrowni zostały przeznaczone na Szkołę Rolniczą w Jasieńcu?",
      options: ["1947", "1944", "1945", "1946"],
      answer: "1945"
    },
  {
      question: "W latach 2005-2008 funkcję dyrektora Zespołu Szkół Ponadgimnazjalnych w Jasieńcu pełnił/(a):",
      options: ["Otylia Świątkowska", "Krzysztof Cąderek", "Dorota Nowak-Michałowska", "Jacek Stolarski"],
      answer: "Krzysztof Cąderek"
    },
   {
      question: "Kim był Wincenty Witos?",
      options: ["Premierem", "Posłem","Wójtem" ,"Wszystkie odpowiedzi są poprawne"],
      answer: "Wszystkie odpowiedzi są poprawne"
    },
  {
      question: "W 1995 Podczas Jubileuszu 50-lecia istnienia Szkół Rolniczych w Jasieńcu nadano szkole imię...",
      options: ["Józefa Piłsudskiego", "Witolda Pileckiego", "Jana Karskiego", "Wincentego Witosa"],
      answer: "Wincentego Witosa"
    },
  {
      question: "W 2000 roku rozpoczęto budowę nowoczesnej, pełnowymiarowej Sali gimnastycznej, która została oddana do użytku w ...",
      options: ["2002 roku", "2001 roku", "2000 roku", "2003 roku"],
      answer: "2002 roku"
    },
  {
      question: "W latach 2001- 2005 pod dyrekcją Wandy Bartczak nie funkcjonowały:",
      options: ["Zasadnicza Szkoła Mechanizacji Rolnictwa", "Technikum Żywienia", "Technikum Ekonomiczne", "Liceum Rolnicze"],
      answer: "Technikum Ekonomiczne"
    },
  {
      question: "W 1992 roku Wojewoda Radomski dokonał aktu nadania szkole nazwy",
      options: ["Zespół Szkół Rolniczych", "Zespół Szkół Ponadgimnazjalnych"],
      answer: "Zespół Szkół Rolniczych"
    },
  {
      question: "W jakim okresie życia Wincenty Witos był związany z polityką?",
      options: ["1939-1945", "1926-1939", "1918-1947", "1918-1926"],
      answer: "1918-1947"
    },
  {
      question: "Co było celem politycznym Wincentego Witosa podczas jego działalności w PSL?",
      options: ["Zwiększenie roli rolników w polityce", "Rozwój przemysłu", "Budowa nowoczesnej armii", " Walka o prawa robotników"],
      answer: "Zwiększenie roli rolników w polityce"
    },
  {
      question: "W latach 1964-1967 powstała dodatkowo Roczna Szkoła Rolniczo Mechaniczna w której funkcję dyrektora pełnił/(a):",
      options: ["Stanisław Chmielnicki", "Antoni Stańczak", "Ryszard Mirosz", "Wanda Bartczak"],
      answer: "Antoni Stańczak"
    },
  {
      question: "W 1992 roku funkcję dyrektora sprawował/(a):",
      options: ["Zdzisław Sosnowski", "Stanisław Olc", "Antoni Stańczak", "Wanda Bartczak"],
      answer: "Wanda Bartczak"
    },
  {
      question: "W latach 1980-1987 istniała Zasadnicza Szkoła Mechanizacji Rolnictwa. Funkcję dyrektora pełnili: Józef Skrzypczak, Stanisław Makowski, Aleksander Grabek i Andrzej Samborski.",
      options: ["Prawda", "Fałsz"],
      answer: "Prawda"
    },
  {
      question: "Ostatnia zmiana nazewnictwa szkoły nastąpiła w 2011 i funkcjonuje do dnia dzisiejszego. Jest to Zespół Szkół Ponadgimnazjalnych im. Wincentego Witosa w Jasieńcu.",
      options: ["Prawda", "Fałsz"],
      answer: "Fałsz"
    },
  {
      question: "Jakie stanowisko piastował Wincenty Witos po odzyskaniu przez Polskę niepodległości?",
      options: ["Marszałek Sejmu", "Minister Spraw Zagranicznych", "Prezes Rady Ministrów", "Prezes Narodowego Banku Polskiego"],
      answer: "Prezes Rady Ministrów"
    },
  {
      question: "Otwarcie wielofunkcyjnego boiska przy ZS Jasieniec było",
      options: ["8 kwietnia 2024", "3 kwietnia 2024", "3 kwietnia 2023", "6 kwietnia 2022"],
      answer: "3 kwietnia 2024"
    },
  {
      question: "Od którego roku w naszej szkole jest realizowany program Erasmus+",
      options: ["2018", "2019", "2020", "2021"],
      answer: "2020"
    },
  {
      question: "Jaka jest aktualna nazwa szkoły?",
      options: ["Zespół szkół ponadgimnazjalnych im. Wincentego Witosa w Jasieńcu", "Zespół Szkół im. Wincentego Witosa w Jasieńcu", "Zespół szkół ponadpodstawowych im. Wincentego Witosa w Jasieńcu", "Żadna odpowiedź jest poprawna"],
      answer: "Zespół Szkół im. Wincentego Witosa w Jasieńcu"
    },
  {
      question: "Obecną osoba pełniąca funkcję dyrektora jest Pani Dorota Nowak-Michałowska?",
      options: ["Prawda", "Fałsz"],
      answer: "Prawda"
    },
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
//  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
     // checkCookie();
      checkLocalStorage();
      showResult();
    }
  }
  
  function showResult() {
    // var person = getCookie("username");
    var person = getLocalStorage("username");
    quiz.innerHTML = `
      <h1>Ukończyłeś QUIZ!</h1>
      <h3>Gratulujemy ${person} ukończenia quizu z wynikiem:</h3>
      <p>${score} / ${quizData.length}<br/>
    <a href="/" class="navlink">Powrót</a>
  </p>
    `;
  }
  
  showQuestion();


function setLocalStorage(lsname, lsvalue) {
  localStorage.setItem(lsname, lsvalue);
}

function getLocalStorage(lsname) {
  var answer = localStorage.getItem(lsname);
  return answer;
}

function checkLocalStorage() {
  let user = getLocalStorage("username");
     user = prompt("Jak się nazywasz?","Anonim");
     if (user != "" && user != null) {
       setLocalStorage("username", user);
     }
let scores = getLocalStorage("score");
  scores = score
  if (scores != "" && scores != null) {
       setLocalStorage("score", scores);
  }
  let scoremax = getLocalStorage("scoremax");
  scoremax = quizData.length
  if (scoremax != "" && scoremax != null) {
       setLocalStorage("scoremax", scoremax);
  }
}







//function setCookie(cname,cvalue,exdays) {
//  const d = new Date();
//  d.setTime(d.getTime() + (exdays*24*60*60*1000));
//  let expires = "expires=" + d.toUTCString();
//  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
//}

//function getCookie(cname) {
//  let name = cname + "=";
//  let decodedCookie = decodeURIComponent(document.cookie);
//  let ca = decodedCookie.split(';');
//  for(let i = 0; i < ca.length; i++) {
//    let c = ca[i];
//    while (c.charAt(0) == ' ') {
//      c = c.substring(1);
//    }
//    if (c.indexOf(name) == 0) {
//      return c.substring(name.length, c.length);
//    }
//  }
//  return "";
//}






//function checkCookie() {
//  let user = getCookie("username");
//     user = prompt("Jak się nazywasz?","Anonim");
//     if (user != "" && user != null) {
//       setCookie("username", user, 30);
//     }
//let scores = getCookie("score");
//  scores = score
//  if (scores != "" && scores != null) {
//       setCookie("score", scores, 30);
//  }
//  let scoremax = getCookie("scoremax");
//  scoremax = quizData.length
//  if (scoremax != "" && scoremax != null) {
//       setCookie("scoremax", scoremax, 30);
//  }
//}