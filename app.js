// =======================
// 30 KÉRDÉS
// =======================
const questions = [
  { text: "Mennyi 2 + 2?", answers: ["3", "4", "5", "22"], correct: 1 },
  { text: "Magyarország fővárosa?", answers: ["Debrecen", "Szeged", "Budapest", "Pécs"], correct: 2 },
  { text: "Hány napos egy hét?", answers: ["5", "6", "7", "8"], correct: 2 },
  { text: "Melyik bolygó a Vörös bolygó?", answers: ["Mars", "Vénusz", "Jupiter", "Merkúr"], correct: 0 },
  { text: "Hány perc egy óra?", answers: ["30", "45", "60", "90"], correct: 2 },
  { text: "Melyik állat ugat?", answers: ["Macska", "Kutya", "Ló", "Tehén"], correct: 1 },
  { text: "Melyik szám páros?", answers: ["3", "5", "7", "8"], correct: 3 },
  { text: "Melyik szín nincs a magyar zászlóban?", answers: ["Piros", "Fehér", "Zöld", "Kék"], correct: 3 },
  { text: "Hány lába van egy póknak?", answers: ["6", "8", "10", "12"], correct: 1 },
  { text: "Melyik hónap 28 napos?", answers: ["Február", "Mindegyik", "Január", "Június"], correct: 1 },

  { text: "Melyik kontinens a legnagyobb?", answers: ["Európa", "Afrika", "Ázsia", "Amerika"], correct: 2 },
  { text: "Hány betű van az angol ABC-ben?", answers: ["24", "25", "26", "27"], correct: 2 },
  { text: "Mi fagy meg 0 °C-on?", answers: ["Víz", "Olaj", "Alkohol", "Benzin"], correct: 0 },
  { text: "Melyik állat él vízben?", answers: ["Kutya", "Macska", "Delfin", "Ló"], correct: 2 },
  { text: "Hány oldalú egy háromszög?", answers: ["2", "3", "4", "5"], correct: 1 },
  { text: "Melyik hangszer húros?", answers: ["Dob", "Fuvola", "Gitár", "Trombita"], correct: 2 },
  { text: "Melyik évszak a leghidegebb?", answers: ["Tavasz", "Nyár", "Ősz", "Tél"], correct: 3 },
  { text: "Melyik szám nagyobb?", answers: ["5", "10", "8", "7"], correct: 1 },
  { text: "Mi kell a tűzhöz?", answers: ["Víz", "Oxigén", "Jég", "Hó"], correct: 1 },
  { text: "Melyik nap jön péntek után?", answers: ["Csütörtök", "Szombat", "Vasárnap", "Hétfő"], correct: 1 },

  { text: "Melyik a leggyorsabb?", answers: ["Autó", "Repülő", "Kerékpár", "Vonat"], correct: 1 },
  { text: "Melyik gyümölcs sárga?", answers: ["Alma", "Banán", "Szőlő", "Szilva"], correct: 1 },
  { text: "Mi világít éjszaka az égen?", answers: ["Nap", "Hold", "Felhő", "Hegy"], correct: 1 },
  { text: "Melyik szám prímszám?", answers: ["4", "6", "9", "7"], correct: 3 },
  { text: "Melyik nem emlős?", answers: ["Kutya", "Macska", "Delfin", "Kígyó"], correct: 3 },
  { text: "Melyik sportban van kapus?", answers: ["Tenisz", "Kosárlabda", "Foci", "Futás"], correct: 2 },
  { text: "Hány óra egy nap?", answers: ["12", "18", "24", "36"], correct: 2 },
  { text: "Melyik ital meleg?", answers: ["Jég", "Víz", "Tea", "Üdítő"], correct: 2 },
  { text: "Melyik szám osztható kettővel?", answers: ["5", "7", "9", "10"], correct: 3 },
  { text: "Melyik állat mondja: mú?", answers: ["Kutya", "Macska", "Tehén", "Ló"], correct: 2 }
];

// =======================
// SEGÉDFÜGGVÉNYEK
// =======================
function randomIndex(max) {
  return Math.floor(Math.random() * max);
}

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

// =======================
// JÁTÉK LOGIKA
// =======================
let currentQuestionIndex = 0;

function loadQuestion() {
  currentQuestionIndex = randomIndex(questions.length);
  const q = questions[currentQuestionIndex];

  document.getElementById("question").innerText = q.text;

  const buttons = document.querySelectorAll("button");
  const answerIndexes = shuffle([0, 1, 2, 3]);

  buttons.forEach((btn, i) => {
    const answerIndex = answerIndexes[i];
    btn.innerText = q.answers[answerIndex];
    btn.onclick = () => checkAnswer(answerIndex);
  });
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === questions[currentQuestionIndex].correct) {
    alert("Helyes! 🎉");
  } else {
    alert("Rossz válasz 😈");
  }

  loadQuestion();
}

// =======================
// INDÍTÁS
// =======================
loadQuestion();
