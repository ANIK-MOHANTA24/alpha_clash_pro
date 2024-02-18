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
  console.log('player pressed', playerPressed);
  //stop the game if pressed 'ESC'
  if (playerPressed === 'Escape') {
    gameOver();
  }

  // get the expected to press
  const currentAlphabetElement = document.getElementById('current_alphabet');
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  console.log(playerPressed, expectedAlphabet);

  //check matched or not
  if (playerPressed === expectedAlphabet) {
    // console.log('you have pressed correctly', expectedAlphabet);
    console.log('you get a point');

    // ************m28.5**start**************
    const currentScore = getTextElementValueById('current-score');
    // console.log(currentScore);
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore);

    removeBackgroundColorById(expectedAlphabet);
    continueGame();
    // ************m28.5**end**************

    // //1. get the current score
    // const currentScoreElement = document.getElementById('current-score');
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // // console.log(currentScore);

    // //2. increase the score by 1
    // const newScore = currentScore + 1;

    // //3. show the update score
    // currentScoreElement.innerText = newScore;

    // removeBackgroundColorById(expectedAlphabet);
    // continueGame();
  } else {
    console.log('dhurr vai/apu right key press koro');
    // ************m28.5**start**************
    const currentLife = getTextElementValueById('current_life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current_life', updatedLife);
    if (updatedLife === 0) {
      // console.log('game over');
      gameOver();
    }

    // ************m28.5**end**************
    //step-1. get the current life number
    // const currentLifeElement = document.getElementById('current_life');
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);
    // //step-2. decrease the life number by 1
    // const newLife = currentLife - 1;
    // //step-3. show the update life number
    // currentLifeElement.innerText = newLife;
    // if (newLife === 0) {
    //   // console.log('Game over');
    //   gameOver();
    // }
  }
}
document.addEventListener('keyup', handelKeyboardButtonPress);

//******************************************** */

function continueGame() {
  // stape-1: generate a random alphabet
  const alphabet = getARandomAlphabet();
  console.log('Your random alphabet :', alphabet);

  // set randomly generated alphabet to the screen (show it)
  const currentAlphabetElement = document.getElementById('current_alphabet');
  currentAlphabetElement.innerText = alphabet;

  //set background color
  setBackgroundColorById(alphabet);
}

function play() {
  //hide everything & show only playground
  hideElementById('home_screen');
  hideElementById('final_score'); // m28.7
  showElementById('play_ground');

  // reset score and life
  setTextElementValueById('current_life', 5);
  setTextElementValueById('current-score', 0);

  continueGame();
}
//*************m28.6********************* */
function gameOver() {
  hideElementById('play_ground');
  showElementById('final_score');

  // update final score
  //1. get the final score
  const lastScore = getTextElementValueById('current-score');
  // console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current_alphabet');
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
