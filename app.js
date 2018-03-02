//Make questions and answers appear
// //Make Scores appear
// //Intiate button
// if answer= a
// return("Corret!")
// var Questions = "";
// for (var i = 0; i < string.length; i++){
// 	console.log("hi");

// }
// Remove all this commented code out from deployed branches
const cards = [
  {
    question: "When is Chinese New Year 2018?",
    choices: ["January 1st", "Febuary 16th", "March 17th", "April 1st"],
    answer: 1,
    image: "https://media.giphy.com/media/3o6nV6mB7WHDfy4W2Y/giphy.gif"
  },
  {
    question: "The many days does the Chinese New Year celebration last?",
    choices: ["1 day", "7 days", "12 days", "15 days"],
    answer: 3,
    image: "https://media.giphy.com/media/26n60rak5faAMfoQ0/giphy.gif"
  },
  {
    question: "How many signs make up the Zodiac?",
    choices: ["7 signs", "10 signs", "12 signs", "15 signs"],
    answer: 2,
    image: "https://media.giphy.com/media/26Ffd2dWoH22B0uPu/giphy.gif"
  },
  {
    question: "What zodiac animal represents this year?",
    choices: ["Sheep", "Dragon ", "Tiger ", "Dog "],
    answer: 3,
    image: "http://www.chinesenewyearday.com/Images/Dog/SnoopyNewYear2018.PNG"
  },
  {
    question: "What do children typically get for Chinese New Year?",
    choices: ["Presents", "Candy", "Fruit", "Red Envelope"],
    answer: 3,
    image:"https://www.google.com/search?rlz=1C5CHFA_enUS764US766&biw=1666&bih=833&tbm=isch&sa=1&ei=XuaGWr-XBZSgjQODtLqYAg&q=chinese+new+year+red+envelope+kids&oq=chinese+new+year+red+envelope+kids&gs_l=psy-ab.3...74035.75423.0.75701.7.7.0.0.0.0.120.685.0j6.6.0....0...1c.1.64.psy-ab..1.1.119...0.0.2xgXdzSUVM8#imgrc=sktpou0EguC1DM:"
  }, // This image isn't working. Make sure you get the correct image
  {
    question: "What is the first sign of the Zodiac?",
    choices: ["Dragon", "Rat", "Tiger", "Dog"],
    answer: 1,
    image: "https://media.giphy.com/media/l4Ep6eS9Uc1aL1T56/giphy.gif"
  },
  {
    question: "What are some meaning popular dishes eaten at Chinese New Year?",
    choices: ["Fish", "Year Cake", "Dumplings", "All of the above"],
    answer: 3,
    image: "http://www.creativechinese.com/wp-content/uploads/2016/12/maxresdefault.jpg"
  },
  {
    question: "What is a another name for Chinese New Year?",
    choices: ["New Festival", "Spring Festival", "Thanksgiving", "Food Festival"],
    answer: 1,
    image: "https://media.giphy.com/media/3o6nUT3MQhiebCF9Ys/giphy.gif"
  },
  {
    question: "What animal is not part of the zodiac?",
    choices: ["Rabbit", "Rooster", "Dog", "Cat"],
    answer: 3,
    image:"https://pm1.narvii.com/6555/0fe8f1a110dc50db8a32103445b8574740a7a09a_hq.jpg"
  },
  {
    question: "THE END. I wish you:",
    choices: ["Good Health", "Survive GA", "Get an AWESOME Job!", "Get $RICH$ -Gong Xi Fa Cai!"],
    answer: 3,
    image: "https://media.giphy.com/media/6nlud1WPoprGg/giphy.gif"
  },
];
// Good job setting up your questions. An even better practice is to put these into a separate js file so the functionality is less cluttered.
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
// Nice job using const and let and keeping your global variables near the top of your code
const getCard = index => {
  return cards[index];
};

const getCurrentCard = () => {
  return getCard(current);
};

const nextCard = () => {
  // only increment if we are not at the end of the array
  if (current < cards.length) {
    current++;
  } else {
    // loop around to the first card in the array
    current = 0;
  }

  // return the new card to display
  return getCurrentCard();
  // You could just do `return getCard(current)` and avoid the mediator `getCurrentCard` function
};

const previousCard = () => {
  // only decrement if we are not at the beginning of the array
  if (current > 0) {
    current--;
  } else {
    // loop around to the last card in the array
    current = cards.length - 1;
  }

  // return the new card to display
  return getCurrentCard();
  // Same here
};

const displayScore = () => {
  scoreLabel.innerText = score;
};

const displayCard = card => { // Good way to update text/images
  questionPrompt.innerText = card.question;
  questionNumber.innerText = current + 1;
  questionImage.setAttribute(
    "style",
    `background-image: url('${card.image}');`
  );

  // assign the question prompts
  for (let i = 0; i < boxPrompts.length; i++) {
    boxPrompts[i].innerText = card.choices[i];
  } // Could try a forEach loop here too!
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
    alert("Correct!");
    return "Correct!";
  } else {
    alert(`Wrong!, the right answer is ${card.answer}`); // Could do it this way too: `card.choices[card.answer]` to actually show the user the answer
    console.log("wrong"); // Remove console logs from deployed branches
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
// Good way to kick things off

// Great job on the javascript. Your app really came together and functions really well and intuitively.
// Function names are semantic so your code is intuitive to follow.
// You made good use of functional programming and keeping each function small and precise. 
// Comments are nice too, keep up the good work!