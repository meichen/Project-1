//Make questions and answers appear
// //Make Scores appear
// //Intiate button
// if answer= a
// return("Corret!")
// var Questions = "";
// for (var i = 0; i < string.length; i++){
// 	console.log("hi");

// }
const cards = [
  {
    question: "When is Chinese New Year 2018?",
    choices: ["January 1st", "Febuary 16th", "March 17th", "April 1st"],
    answer: 2,// option c,
    image:"https://media.giphy.com/media/3o6nV6mB7WHDfy4W2Y/giphy.gif"
  },
  {
    question: "How many signs make up the Zodiac?",
    choices: ["7 signs", "10 signs", "12 signs", "15 signs"],
    answer: 2,// option c,
    image:"https://media.giphy.com/media/26Ffd2dWoH22B0uPu/giphy.gif"
  },
  {
    question: "What zodiac animal represents this year?",
    choices: ["Sheep", "Dragon ", "Tiger ", "Dog "],
    answer: 3,
    image:"http://www.chinesenewyearday.com/Images/Dog/SnoopyNewYear2018.PNG"
  },
  {
    question: "The Chinese New Year celebration lasts how many days??",
    choices: ["1 days", "7 days", "12 days", "15 days"],
    answer: 2,
    image:"http://www.creativechinese.com/wp-content/uploads/2016/12/maxresdefault.jpg"
  },
  {
    question: "What is the first sign of the Zodiac?",
    choices: ["Dragon", "Rat", "Tiger", "Dog"],
    answer: 1,
    image:""
  },
  {
    question: "What zodiac is this year?",
    choices: ["Sheep", "Monkey", "Dog", "Snake"],
    answer: 2,
    image:""
  },
  {
    question: "When is Lunar New Year this year?",
    choices: ["January", "Febuary", "March", "April"],
    answer: 1,
    image:""
  },
  {
    question: "What animal is not part of the zodiac?",
    choices: ["Rabbit", "Rooster", "Dog", "Cat"],
    answer: 3,
    image:"https://pm1.narvii.com/6555/0fe8f1a110dc50db8a32103445b8574740a7a09a_hq.jpg"
  },
];

let current = 0;
let score = 0;

const scoreLabel = document.querySelector(".score-label");
const questionPrompt = document.querySelector(".question-prompt");
const questionNumber = document.querySelector(".question-number");
const questionImage = document.querySelector(".question-image");
const boxes = document.querySelectorAll(".box");
const boxPrompts = document.querySelectorAll(".box-prompt");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");


const getCard = index => {
  return cards[index];
};

const getCurrentCard = () => {
  return getCard(current);
};

const nextCard = () => {
  // only increment if we are not at the end of the array
  if (current + 1 <= cards.length) {
    current++;
  } else {
    // loop around to the first card in the array
    current = 0;
  }

  // return the new card to display
  return getCurrentCard();
};

const previousCard = () => {
  // only decrement if we are not at the beginning of the array
  if (current - 1 >= 0) {
    current--;
  } else {
    // loop around to the last card in the array
    current = cards.length - 1;
  }

  // return the new card to display
  return getCurrentCard();
};

const displayScore = () => {
  scoreLabel.innerText = score;
};

const displayCard = card => {
  questionPrompt.innerText = card.question;
  questionNumber.innerText = current + 1;
  questionImage.setAttribute('style', `background-image: url('${card.image}');`);

  // assign the question prompts
  for (let i = 0; i < boxPrompts.length; i++) {
    boxPrompts[i].innerText = card.choices[i];
  }
};

const onNextBtnClickHandler = () => {
  const card = nextCard();
  displayCard(card);
};

const onPreviousBtnClickHandler = () => {
  const card = previousCard();
  displayCard(card);
};

const checkAnswer = answer => {
  const card = getCurrentCard();

  if (answer === card.answer) {
    score += 1;
    displayCard(nextCard());
    return("Correct!")
  } else {
    console.log("wrong");
  }
};

const onBoxClickHandler = index => {
  checkAnswer(index);
  displayScore();
};

const init = () => {
  nextBtn.addEventListener("click", onNextBtnClickHandler);
  nextBtn.addEventListener("click", onNextBtnClickHandler);
  previousBtn.addEventListener("click", onPreviousBtnClickHandler);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click", () => onBoxClickHandler(i));
  }

  const card = getCurrentCard();
  displayCard(card);
  displayScore();
};

init();

