// 1.
var age = prompt('Enter Your age');
if (age >= 18) {
	var firstName = prompt('Enter Your firstName');
	var surName = prompt('Enter Your surName');
	console.log(`Hi, I'm ${firstName} ${surName}!`);
} else {
	console.log(`You are underage!`);
}

// 2.
// var count = 0;
// var women = prompt(`I don’t see women as objects why?
// a) Because I'm dumb they are objects:)
// b) I consider each to be in a class of her own!!!!!
// c) They are not objects.
// d) Why not?`);
// var assembly = prompt(`Why are Assembly programmers always soaking wet?
// a) They take "flow control" a bit too serious.
// b) They work below C-level. wooooooow!!!
// c) They just love swimming.
// d) They sweat too much, while debugging.`);
// var sql =
// 	prompt(`An SQL query goes into a bar, walks up to two tables, and asks:
// a) Can I join you? !!!
// b) Can I sit with you?
// c) Can I drink with you?
// d) Can I be with you?`);
// if (assembly === 'b') {
// 	count += 1;
// }
// if (sql === 'a') {
// 	count += 1;
// }
// if (women === 'b') {
// 	count += 1;
// }
// alert(`Your have ${count} correct answers!`);

// 3.
// var num1 = prompt('Enter first number');
// var num2 = prompt('Enter second number');
// if (!isNaN(num1) && !isNaN(num2)) {
// 	var operation = prompt(`Choose operaton:
//  a) +
//  b) -
//  c) *
//  d) /
//  e) =
//  `);
// 	if (operation === '+') {
// 		console.log(num1 + num2);
// 	}
// 	if (operation === '-') {
// 		console.log(num1 - num2);
// 	}
// 	if (operation === '*') {
// 		console.log(num1 * num2);
// 	}
// 	if (operation === '/') {
// 		console.log(num1 / num2);
// 	}
// 	if (operation === '=') {
// 		if (num1 === num2) console.log('They are equal');
// 		else console.log('They are not equal');
// 	}
// } else {
// 	alert('You have to choose numbers');
// }
