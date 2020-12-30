var readlineSync = require('readline-sync')
var chalk = require ('chalk')

console.log(chalk.bold.white.bgBlack('T H E   B A T M A N  T R I V I A  Q U I Z.'))

console.log(chalk.underline('ONLY FOR SUPERFANS'))
console.log(chalk.bold('TRY TO ANSWER IN LOWER-CASE'))
console.log(chalk.underline(chalk.bold.green('YOU SCORE 1 POINT FOR EVERY CORRECT ANSWER')+' & ' + chalk.bold.red('YOU LOSE 1 POINT FOR EVERY WRONG ANSWERS.')))

var score = 0
function play (question,answer){
  var userAnswer = readlineSync.question(question)
  if(userAnswer=== answer){
    score = score + 1
    console.log(chalk.bold.green('The Dark Knight Is Always Right.'))
  }
  else{
    score = score - 1
    console.log(chalk.bold.red('You Lost A Point'))
    console.log(chalk.bold.red('The correct answer is ' + answer))
  }
  return '------'
}

//mcq
console.log('1. What is the name of the hospital prison featured in Batman movies? ')
var answer1 = ['a.Arkham Asylum', 'b.Azkaban']
rightAnswer = 'a'
for (i=0;i<answer1.length;i++){
  console.log(answer1[i])
}
var userInput = readlineSync.question('Your Answer: ')
if(userInput === rightAnswer){
   score = score + 1
    console.log(chalk.bold.green('The Dark Knight Is Always Right.'))
}
else{
   score = score - 1
    console.log(chalk.bold.red('You Lost A Point'))
    console.log(chalk.bold.red('The correct answer is ' + rightAnswer))
   
}
console.log('------')


console.log(play('2.What is the actual name of Batman? ' , 'bruce wayne'))
console.log(play('3.Who is the official creator of Batman? ', 'bob kane'))
console.log(play('3. Is Bruce Wayne a millionare or a billionare? ', 'billionare'))
console.log(play('5. Who directed The Dark Knight Rises? ', 'christopher nolan'))

console.log(play('6. In a 2005 animated movie, what horror icon did Batman cross paths with? ', 'dracula'))

console.log(play('7. Who played the role of Batman in the movie BvS? ', 'ben affleck'))
console.log(play('8. What is the name of the light which Commissioner Gordon uses to call Batman for help? ', 'the batsignal'))

console.log(play('9.Intimidation Game was the working title for which Batman movie? ', 'batman begins'))
console.log(play("10. What is the name of Robin's motorcycle in Batman & Robin in 1997? ", 'the redbird'))

console.log(chalk.bold.yellow('Wow! You scored a total ' + score))
console.log(chalk.yellow.bgWhite('Do not forget to send me the screenshot!'))