'use strict';

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

let edu =prompt('Did Joseph attend FRCC to pursue creative writing?').toLowerCase();
if(edu === 'yes'|| edu==='y'){
// console.log('Yepper. Only four more questions to gooooooo!!!!');
alert('Yepper. Only four more questions to gooooooo!!!!');
}else{
  // console.log('Well, it\'s a 50/50 chance if you didn\'t read the material. No more tries for you! Only four more questions!!!!');
  alert('Well, it\'s a 50/50 chance if you didn\'t read the material. No more tries for you! Only four more questions!!!!');
}

let job =prompt('Did this guy have a stable career at any point?').toLowerCase();
if(job==='yes'||job==='y'){
  // console.log('Nope, try again. Oh wait...you can\'t. Only three questions left.');
  alert('Nope, try again. Oh wait...you can\'t. Only three questions left.');
}else{
  // console.log('You are quite correct. Luckily there\'s only three more questions.');
  alert('You are quite correct. Luckily there\'s only three more questions.');
}

let mil =prompt('Did Joseph go to the fleet undesignated?');
if(mil==='yes'||mil==='y'){
  // console.log('Bet that guy did a lotta painting. Two more questions...');
  alert('Bet that guy did a lotta painting. Two more questions...');
}else{
  // console.log('Nope. This guy spent many glorious days hanging with the ol\' haze gray. Two more.');
  alert('Nope. This guy spent many glorious days hanging with the ol\' haze gray. Two more.');
}

let fav =prompt('Bet Joseph loves writing about himself, doesn\'t he?');
if(fav==='yes'||fav==='y'){
// console.log('You are quite incorrect. Uno mas.');
alert('You are quite incorrect. Uno mas.');
}else{
  // console.log('Sure doesn\'t. One more to go.');
  alert('Sure doesn\'t. One more to go.');
}

let  birth =prompt('Was this guy born?').toLowerCase();
if(birth === 'yes'|| birth ==='y'){
// console.log('Who wasn\'t?');
alert('My dear ' + user + ' who wasn\'t? Congrats on finishing the questionnare which I\'m sure appeared before you had an opportunity to read any of the provided bio.');
}else{
  // console.log('Who wasn\'t?');
  alert('My dear ' + user + ' who wasn\'t? Congrats on finishing the questionnare which I\'m sure appeared before you had an opportunity to read any of the provided bio.');
}