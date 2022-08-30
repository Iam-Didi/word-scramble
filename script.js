const wordText = document.querySelector(".word");
hintText = document.querySelector(".hint span"),
inputfield = document.querySelector(".input");
refreshBtn = document.querySelector(".refresh-word");
checkBtn = document.querySelector(".check-word");

let correctWord;

const initGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];   //getting random object from words// 
    let wordArray = randomObj.word.split("");     //splitting each letter of random word//
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));    //getting random number
         //shufffling and swiping wordArray letters randomly
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");  //passing shuffled word as word text
    hintText.innerText = randomObj.hint; //passing random object hint as hint text
    correctWord = randomObj.word.toLocaleLowerCase();  //passing random word to correctword.
    console.log(randomObj);
}
initGame();

const checkWord = () => {
    let userWord = inputfield.value.toLocaleLowercase();  //getting user value
    if(userWord !== correctWord) return alert(`oops! $(userWord) is not a correct word`);
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);