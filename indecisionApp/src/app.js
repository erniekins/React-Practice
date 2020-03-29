//import './utils.js';
//import validator from 'validator';
// import subtract, { square, add } from './utils.js';
// import  isSenior, { isAdult, canDrink } from './person.js';

// console.log('I did it');
// console.log(square(4));
// console.log(add(200,2));
// console.log(subtract(10,1))
// console.log(isAdult(9));
// console.log(canDrink(20));
// console.log(isSenior(70));
// console.log(validator.isEmail('test@yahoo.com'));

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css'
import './styles/styles.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = "Mo";
//     }
// }
// const oldSyntax = new OldSyntax();

// console.log(oldSyntax);

// class NewSyntax {
//  name = 'Jo'
// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax)