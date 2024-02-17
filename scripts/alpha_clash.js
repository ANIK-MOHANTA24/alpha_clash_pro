// function play() {
//   // step-1: hide the home screen. to hide the screen add the class hidden to home section
//   const homeSection = document.getElementById('home_screen');
//   homeSection.classList.add('hidden');
//   // console.log(homeSection.classList);

//   // show the playground
//   const playgroundSection = document.getElementById('play_ground');
//   playgroundSection.classList.remove('hidden');
//   // console.log(playgroundSection.classList);
// }

// ********************************

//*****************for m-28.1********************* */

function handelKeyboardButtonPress(event) {
  const playerPressed = event.key;
  // console.log('player pressed', playerPressed);

  // get the expected to press
  currentAlphabetElement = document.getElementById('current_alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    // console.log('you have pressed correctly', expectedAlphabet);
    console.log('you get a point');

    //1. get the current score
    const currentScoreElement = document.getElementById('current-score');
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);

    //2. increse the score by 1
    const newScore = currentScore + 1;

    //3. show the update score
    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
  } else {
    //step-1. get the current life number
    const currentLifeElement = document.getElementById('current_score');
    const currentLifeText = currentLifeElement.innerText;
    const currentLife = parseInt(currentLifeText);

    //step-2. decrease the life number by 1
    const newLife = currentLife - 1;

    //step-3. show the update life number
    currentLifeElement.innerText = newLife;

    if (newLife === 0) {
      // console.log('Game over');
      gameOver();
    }
  }
}

document.addEventListener('keyup', handelKeyboardButtonPress);

//********************************** */

function gameOver() {
  hideElementById('play_ground');
  showElementById('final_score');
}

//******************************************** */

function continueGame() {
  // stape-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('Your random alphabet :', alphabet);

  // set randomly gengrated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current_alphabet');
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything & show only playground
  hideElementById('home_screen');
  hideElementById('final_score');
  showElementById('play_ground');

  //reset score and life

  continueGame();
}
