let words = [];
let index = 0;

const wordEl = document.getElementById("word");

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load txt file
fetch("Stuart.txt")
  .then(res => res.text())
  .then(text => {
    words = text
      .split("\n")
      .map(w => w.trim())
      .filter(Boolean);

    shuffle(words);
    renderWord();
  });


// Convert word → spans
function renderWord() {
  const word = words[index];

  wordEl.innerHTML = word
    .split("")
    .map((letter, i) => `<span style="--i:${i}">${letter}</span>`)
    .join("");
}

// Next word on arrow press
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    index++;
    if (index >= words.length) index = 0;
    renderWord();
  }
});