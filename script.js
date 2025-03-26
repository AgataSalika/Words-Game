const input = document.querySelector(".input");
const hint = document.querySelector(".hint");
const wordList = document.querySelector(".wordList");
const newGame = document.querySelector(".newGame");

const words = JSON.parse(localStorage.getItem("list")) || [];

// localStorage.setItem('list', JSON.stringify(words))

// запасная функция

const renderWords = () => {
  let wordsStr = words.join("_");
  wordList.innerHTML = wordsStr;
};

const renderWords2 = () => {
  wordList.textContent = "";
  for (let word of words) {
    const li = `<li class='word'> ${word} </li>`;
    wordList.insertAdjacentHTML("beforeend", li);
  }
};

renderWords2();

function getLastLetter() {
  const lastWord = words[words.length - 1];
  let lastLetter = lastWord[lastWord.length - 1];
  if (lastLetter === "ь" || lastLetter === "ъ" || lastLetter === "ы") {
    lastLetter = lastWord[lastWord.length - 2];
  }

  hint.innerHTML = `Слово должно начинаться с буквы <span>${lastLetter}</span> `;
  return lastLetter;
}

const checkWord = () => {
  const checkInput = input.value !== "";

  if (words.length === 0) {
    if (checkInput) {
      words.push(input.value.toLowerCase());
      getLastLetter();
    }
  } else if (words.length > 0) {
    if (checkInput) {
      const last = getLastLetter();
      const firstLetter = input.value[0].toLowerCase();
      if (words.includes(input.value.toLowerCase())) {
        hint.innerHTML = "Такое слово уже было";
      } else {
        if (last === firstLetter) {
          words.push(input.value.toLowerCase());
          getLastLetter();
        }
      }
    }
  }
};

input.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    checkWord();
    input.value = "";
    localStorage.setItem("list", JSON.stringify(words));

    renderWords2();
  }
});

newGame.addEventListener("click", function () {
  words.length = 0
  wordList.textContent = ''
  localStorage.setItem('list', JSON.stringify(words))
  hint.innerHTML = ''
});
