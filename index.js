var readlineSync = require("readline-sync");
const chalk = require('chalk');

console.log(chalk.blue.bold("Are you the biggest Nolan fan?"));
console.log("\n");

console.log(chalk.yellow.italic.bold("Then answer these simple quiz and stand a chance to win a ticket for his upcoming movie TENET at your nearest IMAX studios!!!"));

console.log("\n");

console.log(chalk.bold.red("Lets Goooooo!!!!"))

var score = 0;

function game(question,answer){
  var questions = readlineSync.question(question);
  if(questions===answer){
    console.log(chalk.green("Great!!!"));
    score++;
  }else{
    console.log(chalk.red("Nahhhh!!!!Wrong Answer"));
  }

  console.log(chalk.green("The correct answer is : "+answer));
}

console.log("\n");

var questions = [{
  question : "Two major characters in two Nolan films have the same name. Guess the name and films: \na.ALFRED - THE PRESTIGE AND INSOMNIA.\nb.COBB - INCEPTION AND FOLLOWING.\nc.RACHEL - BATMAN BEGINS AND INTERSTELLAR. \nd.WILL - INSOMNIA AND DUNKIRK. \n",
  answer : "b"
},{
  question : "Part of Inception’s score is an extremely slowed down version of which song?\na. LEONARD COHEN'S HALLELUJAH.\nb.EDIT PIAF'S NON, JE NE REGRETTE RIEN.\nc. HANS ZIMMER'S CORYNORHINUS FROM BATMAN BEGINS. \nd.STROMAE'S ALORS ON DANCE. \n ",
  answer : "b"
},{
  question : "Which of these is declared to be fake in Interstellar? \na. THE INVENTION OF WIFI.\nb.THE MOON LANDINGS.\nc.ORGANIC FOODGRAINS.\nd.A VACCINE THAT CURES CANCER",
  answer : "b",
},{
  question: "What are Bruce Wayne’s parents watching on the night that they’re murdered in Batman Begins? \na.MEFISTOFELE.\nb.THE MASK OF ZORRO.\nc.DOCTOR FAUSTUS.\nd.THE BARBER OF SEVILLE.\n",
  answer: "a",
},{
  question: "The alias Bill uses in Following is a reference to this character from a Kubrick film. What’s the alias and the film?\na.ALEX DELARGE - A CLOCKWORK ORANGE.\nb.LIONEL MANDRAKE - DR. STRANGELOVE.\nc.REDMOND BARRY - BARRY LYNDON.\nd.DANNY LLOYD - THE SHINING.\n",
  answer: "d",
},{
  question: "What is Ariadne’s totem in Inception? \na.A SPINNING TOP.\nb.A RED DICE.\nc.A CHESS PIECE.\nd.A RED POKER CHIP.\n",
  answer: "c",
}]

for(var i=0;i<questions.length;i++){
  game(questions[i].question,questions[i].answer);
}

if(score>=4){
  console.log(chalk.green("Yaayyyy!!!! Congratulation you won the tickets.."));
}else{
  console.log(chalk.red("Sorry!! No worries you got to know about Nolan now.."));
}