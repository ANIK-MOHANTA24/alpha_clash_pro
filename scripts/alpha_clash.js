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
  hideElementById('home_screen');
  showElementById('play_ground');
  continueGame();
}
