'use strict';
let score = 0;

console.log('yyyooooo woooorrlllddd!!!'); 

// function which prompts user with a question and returns the answer as a variable? the .toLowerCase(); turns all letters in the answer to a lower case in order to fulfill the if else statement which accepts either y or yes or n and no

let user =prompt('What is the name of the person about to fail this 5 question pop quiz?');
alert(' Welcome ' + user + '! Good luck!');

// console.log('good deal. don\'t wanna soil yourself');
// alert('good deal. don\'t wanna soil yourself');
// //add in alerts here and the rest of the prompts
// }else{ 
//   console.log('Might wanna grab one so you can change yourself when you soil your diapee!');
// }

<<<<<<< HEAD
let edu =prompt('Did Joseph attend FRCC to pursue creative writing?').toLowerCase();
if(edu === 'yes'|| edu==='y'){
 console.log(edu);
alert('Yepper. Only four more questions to gooooooo!!!!');
score++;
}else{
  // console.log(edu);
  alert('Well, it\'s a 50/50 chance if you didn\'t read the material. No more tries for you! Only four more questions!!!!');
=======
function q1(){
  let edu =prompt('Did Joseph attend FRCC to pursue creative writing?').toLowerCase();
  if(edu === 'yes'|| edu==='y'){
    console.log(edu);
    alert('Yepper. Only four more questions to gooooooo!!!!');
  }else{
    // console.log(edu);
    alert('Well, it\'s a 50/50 chance if you didn\'t read the material. No more tries for you! Only four more questions!!!!');
  }
>>>>>>> e126118dd3782acaefe996c3a2ab4f977e24e5e7
}
q1();

function q2(){
  let job =prompt('Did this guy have a stable career at any point?').toLowerCase();
  if(job==='yes'||job==='y'){
    // console.log('Nope, try again. Oh wait...you can\'t. Only three questions left.');
    alert('Nope, try again. Oh wait...you can\'t. Only three questions left.');
  }else{
    // console.log('You are quite correct. Luckily there\'s only three more questions.');
    alert('You are quite correct. Luckily there\'s only three more questions.');
  }
}
q2();

function q3(){
  let mil =prompt('Did Joseph go to the fleet undesignated?');
  if(mil==='yes'||mil==='y'){
    // console.log('Bet that guy did a lotta painting. Two more questions...');
    alert('Bet that guy did a lotta painting. Two more questions...');
  }else{
    // console.log('Nope. This guy spent many glorious days hanging with the ol\' haze gray. Two more.');
    alert('Nope. This guy spent many glorious days hanging with the ol\' haze gray. Two more.');
  }
}
q3();

function q4(){
  let fav =prompt('Bet Joseph loves writing about himself, doesn\'t he?');
  if(fav==='yes'||fav==='y'){
  // console.log('You are quite incorrect. Uno mas.');
    alert('You are quite incorrect. Uno mas.');
  }else{
    // console.log('Sure doesn\'t. One more to go.');
    alert('Sure doesn\'t. One more to go.');
  }
}
q4();

function q5(){
  let  birth =prompt('Was this guy born?').toLowerCase();
  if(birth === 'yes'|| birth ==='y'){
  // console.log('Who wasn\'t?');
    alert('My dear ' + user + ' who wasn\'t? Congrats on finishing the questionnare which I\'m sure appeared before you had an opportunity to read any of the provided bio.');
  }else{
    // console.log('Who wasn\'t?');
    alert('My dear ' + user + ' who wasn\'t? Congrats on finishing the questionnare which I\'m sure appeared before you had an opportunity to read any of the provided bio. Phew. Finally done with the prompts and questions.');
  }
}
<<<<<<< HEAD
let i=1;
let digit = 4;
let guess = prompt('Surprise!!! The prompts continue!!! AAHAHAHAHAHAH!!!! Now, guess a number 1-4!!!');
while (i<4 && guess != digit){
  i++;
  guess = prompt('Too low. Guess again young grasshoppa!');
 } 
 
 
 //  console.log(answers);
 // answers.includes('language');
 // console.log('true');
 
=======
q5();

function q6(){
  let i=1;
  let digit = 4;
  let guess = prompt('Surprise!!! The prompts continue!!! AAHAHAHAHAHAH!!!! Now, guess a number 1-4!!!');
  while (i<4 && guess != digit){
    i++;
    guess = prompt('Too low. Guess again young grasshoppa!');
  }
}
q6();

//  console.log(answers);
// answers.includes('language');
// console.log('true');

>>>>>>> e126118dd3782acaefe996c3a2ab4f977e24e5e7

function q7(){
  // let answers;
  let answers =['language', 'imagination' , 'morality', 'introspection', 'knowledge', 'metacognition', 'prefrontal cortex', 'culture'];
  
  
  // for  (let i = 0; i < 6; i++){
  //   let question =prompt ('Humans tend to seperate themselves from the rest of nature. What makes us human? What makes us different then the other life forms present on this planet? Consider abstract concepts and a single part of the body besides opposable thumbs. Answers can be up to two words. Ya\'ll get six tries.').toLowerCase();
  //   for (let j = 0; j < answers.length; j++){
  //     if (question === answers [j]){
  //       alert('correct!')
  //       i = 6;
  //       break;
  //     }
  //   }
  // } 
  
  let x = 0;
  console.log(x);
  let moreprompts =prompt ('Humans tend to seperate themselves from the rest of nature. What makes us human? What makes us different than the other life forms present on this planet? Consider abstract concepts and a single part of the body besides opposable thumbs. Answers can be up to two words. Ya\'ll get six tries.').toLowerCase();
  console.log(moreprompts);
  while (x < 6 && answers.includes(moreprompts) == false){
    x++;
    console.log(x);
    moreprompts =prompt('Keep guessing.');
  }
  if (answers.includes(moreprompts)){
    alert('That\'ll do. Welcome to a good ol boring read.');
  }else{
    alert('Not quite, but it\'s alright. Seems like whether you were right or wronng, you ended up in the same place.');
  }
  console.log('end of while loop');
}
<<<<<<< HEAD
if (answers.includes(moreprompts)){
  alert('That\'ll do. Welcome to a good ol boring read.');
}else{
  alert('Not quite, but it\'s alright. Seems like whether you were right or wronng, you ended up in the same place.');
}

console.log('end of while loop')

alert(`Your score was ${score} out of 7`)
=======
q7();
>>>>>>> e126118dd3782acaefe996c3a2ab4f977e24e5e7
// Human's tend to seperate themselves from the rest of nature. What makes us human? What makes us different then the other life forms present on this planet?


// prompt('Surprise!! Glad to see me again? One more question. Pick a number, any number between 1 and 4. No stress.');
// if(digits==='1'){
// console.log('By gum gum dragon fruit!! You guessed correct. Pack your bags, we\'re going to Vegas.');
// alert('By gum gum dragon fruit!! You guessed correct ' + user + '. Pack your bags, we\'re going to Vegas.');
// }else if(digits>'1');{
// alert('Well, as my grandpapa would say, You\'ve got a rain cloud hanging over your head. Try again' + user )
// }