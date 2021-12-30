// Changing paragraph content

const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName () {
  let name = prompt('Enter a new name');
  para.textContent = 'Player 1: ' + name;
}

// Creating paragrphs with a button

const createParagraphSection = document.querySelector('#createParagraph');

function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  createParagraphSection.appendChild(para);
}

const buttons = createParagraphSection.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', createParagraph);
}

// Number guessing game

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessField = document.querySelector(".guessField");
const guessSubmit = document.querySelector(".guessSubmit");

let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);

  if (guessCount === 1) {
    guesses.textContent = 'Previous guesses: ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Congratulations! You got it right!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!';
    lastResult.style.backgroundColor = 'black';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Wrong!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Last guess was too low!'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Last guess was too high';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.append(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'White';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

//variables
let myName;
myName = 'Óscar';
let myAge = 48;

const section = document.querySelector('#variables');

let para1 = document.createElement('p');
para1.textContent = myName;
let para2 = document.createElement('p');
para2.textContent = myAge;
section.appendChild(para1);
section.appendChild(para2);

para3 = document.createElement('p');
para3.textContent = `In 20 years, I will be ${myAge + 20}`;
section.appendChild(para3);

// Increment operator in loops
const totals = [191.45, 890.56, 67.99, 12.34, 235.64];
const beforeList = document.querySelector('.before');
const afterList = document.querySelector('.after');

for (let i=0; i<totals.length; i++){
  const listItem = document.createElement('li');
  listItem.textContent = totals[i];
  beforeList.appendChild(listItem);
}

for (let i=0; i<totals.length; i++){
  const listItem = document.createElement('li');
  listItem.textContent = (totals[i] * 1.06).toFixed(2);
  afterList.appendChild(listItem);
}

// Start Machine

const btn = document.querySelector('#startMachine button');
const txt = document.querySelector('#startMachine p');

btn.addEventListener('click',updateBtn);

function updateBtn(){
  if (btn.textContent === 'Start Machine') {
    btn.textContent = 'Stop Machine';
    txt.textContent = 'The machine is started';
  }else{
    btn.textContent = 'Start Machine';
    txt.textContent = 'The machine is stopped';
  }
}

// Christama's message

const christmasList = document.querySelector('#christmasMessages ul');

christmasList.innerHTML = "";

const christamsGreetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let christmasGreeting of christamsGreetings){
  if (christmasGreeting.includes('Christmas')) {
    const christmasGreetingItem = document.createElement('li');
    christmasGreetingItem.textContent = christmasGreeting;
    christmasList.append(christmasGreetingItem);
  }
}

// Capital city letters

const cityList = document.querySelector('#capitalLetterCity ul');
cityList.innerHTML = "";
const ukCities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];


for (let ukCity of ukCities){
  let firstCityCapitalLetter = ukCity.charAt(0).toUpperCase();
  let ukCityLowerCase = ukCity.toLowerCase();
  let firstCityLowerCaseLetter = ukCityLowerCase.charAt(0);
  let ukCityWithFirstCapitalLetter =  ukCityLowerCase.replace(firstCityLowerCaseLetter,firstCityCapitalLetter);

  const cityListItem = document.createElement('li');
  cityListItem.textContent = ukCityWithFirstCapitalLetter;
  cityList.append(cityListItem);
}

// trains

const trainStationsList = document.querySelector('#trains ul');
trainStationsList.innerHTML = "";
const trainStations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                  'GNF576746573fhdg4737dh4;Greenfield',
                  'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                  'SYB4f65hf75f736463;Stalybridge',
                  'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for(trainStation of trainStations){
  const stationCode = trainStation.slice(0,3);
  const stationName = trainStation.slice(trainStation.indexOf(';')+1);
  const stationCodeName = `${stationCode}: ${stationName}`;

  stationItem = document.createElement('li');
  stationItem.textContent = stationCodeName;
  trainStationsList.append(stationItem);
}

// Top 5 searches

const searches = document.querySelector('#searches');
const inputTextSearches = document.querySelector('#searches input');
const buttonSearches = document.querySelector('#searches button');
const searchesList = document.querySelector('#searches ul');

const entries = new Array();
const maxEntriesItems = 5;

inputTextSearches.focus();

buttonSearches.addEventListener('click', searchManager);

function searchManager(){
  if(inputTextSearches.value != ''){
      entries.unshift(inputTextSearches.value);
      if(entries.length > maxEntriesItems){
        entries.pop();
      }
    reloadList();
    inputTextSearches.value = '';
    inputTextSearches.focus();
  } else {
    inputTextSearches.focus();
  }
}

function reloadList() {
  searchesList.innerHTML = "";
  for(entry of entries){
    const itemSearchesList = document.createElement('li');
    itemSearchesList.textContent = entry;
    searchesList.appendChild(itemSearchesList);
  }
}

// Silly story generator

const customName = document.getElementById('customname');
const randomize = document.querySelector('#sillyStory .randomize');
const story = document.querySelector('#sillyStory .story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

randomize.addEventListener('click', result);

function result(){

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  let newStory = getNewStory(storyText, xItem, yItem, zItem);

  if (customName.value != '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById('uk').checked){
    const weight = `${Math.round(300/14)} stone`;
    const temperature = `${Math.round((94-32)*5/9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

function getNewStory(storyText, xItem, yItem, zItem) {
  let currentStory = storyText;
  currentStory = currentStory.replaceAll(':insertx:', xItem);
  currentStory = currentStory.replace(':inserty:', yItem);
  currentStory = currentStory.replace(':insertz:', zItem);
  return currentStory;
}
