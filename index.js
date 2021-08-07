const chalk = require('chalk');
const readlineSync = require('readline-sync');

var totalScore = 0;
var questionData =[
   {
     question: "Where does Varun work currently? ",
     options: ["Microsoft", "Amazon", "PayPal", "Google"],
     answer: 2
   },
   {
     question: "Which programming language is Varun's favorite? ",
     options: ["Java", "Python", "C++", "JavaScript"],
     answer: 1
   },
   {
     question: "Where does Varun live currently? ",
     options: ["Allahabad", "Gurgaon", "Bangalore", "Chennai", "Delhi"],
     answer: 0
   },
   {
     question: "Which programming language Varun is learning currently? ",
     options: ["Java", "Python", "C++", "JavaScript"],
     answer: 3
   },
   {
     question: "What is Varun's favorite dessert? ",
     options: ["Gulab Jamun", "Ras Malai", "Paan Kulfi", "Kaju Katli", "All of these"],
     answer: 4
   }
 ]

function checkQuestion(question, options, answer){
  
  correctAnswerMsg = [
    "That's correct!", 
    "You are right!! ;)", 
    "Yoo-hoo, it is the right answer", 
    'Looks like you know this!!'
    ];
  
  incorrectAnswerMsg = [
    "I am sorry, but you are wrong",
    "Looks like you don't know this!! :/",
    "That's incorrect :(",
    "Better luck next time"
  ];

  var correctAnswerIndex = Math.floor(Math.random()*correctAnswerMsg.length);
  
  var incorrectAnswerIndex = Math.floor(Math.random()*incorrectAnswerMsg.length);
  console.log(chalk.blueBright.bold(question));
  userAnswer = readlineSync.keyInSelect(options, ":", {cancel:"I don't know"});
  if(userAnswer === -1 ){
    console.log(chalk.whiteBright.italic("No worries, talk to Varun to know more about him ;)"));
  }
  else if(answer === userAnswer){
    console.log(chalk.greenBright(correctAnswerMsg[correctAnswerIndex]))
    totalScore++;
  } else {
    console.log(chalk.redBright(incorrectAnswerMsg[incorrectAnswerIndex]))
  }
console.log(chalk.cyan.bold("---------------------------------------"));

}

function shuffle(array) {
  var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}


console.log(chalk.cyan.bold("Welcome to this quiz!!!"))
console.log(chalk.cyan.bold("It is a test of your friendship with Varun Tandon"))
console.log(chalk.cyan.bold("---------------------------------------"));

questionData = shuffle(questionData);

for(var i = 0; i < questionData.length; i++){
checkQuestion(questionData[i].question, questionData[i].options, questionData[i].answer )
}

console.log(chalk.cyan.bold("Your final score is "+ totalScore+"!!! "))