var readlinesync = require("readline-sync");

const chalk = require('chalk');

console.log(chalk.blue('Hello!'));

var username=readlinesync.question(chalk.blue("what is your name? "));
console.log(chalk.green("welcome "+ username + ", welcome to DO YOU KNOW Praveen soma Quiz"));
var score=0
function play(question,answer)
{
  var useranswer=readlinesync.question(question)
  if(useranswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("you are right"))
    score=score+1
  }else{
    console.log(chalk.red("your are wrong"))
  }
  console.log(chalk.yellow("your current score is: "+score))
}

var questions=[{
  question:chalk.blue("Where do praveen live "),
  answer:"Bangalore"
},
{
  question:chalk.blue("Where do praveen work? "),
  answer:"TATA"
},
{
  question:chalk.blue("What's praveen's native village name ? "),
  answer:"Nagampet"
},
{
  question:chalk.blue("what is praveen's highest education qualification? "),
  answer:"B.tech"
},
{
  question:chalk.blue(" In which stream he graduated in engineering? "),
  answer:"Mechanical"
},
{
  question:chalk.blue("Where do praveen live in Bangalore? "),
  answer:"Electronic city"
}
]

for(var i=0; i<questions.length; i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer);
}

console.log(chalk.bgGreen("Yay! you scored: "+score));
console.log(chalk.cyan("check out high scores below, If you should be there ping me with high score screen shot, I will upadte it"));

var highscores = [
  {
  name: chalk.yellow("Praveen soma: 6"),
  // score: "10",
  },
  {
   name: chalk.yellow("Naveen soma: 5"),
  //  score: "9",
  }
];

for(var j=0; j<highscores.length;j++){
console.log(highscores[j].name);
}
