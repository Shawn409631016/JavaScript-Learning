let input = 'a piece of cake.';
let vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];
for (let i = 0; i < input.length; i++) {
	for (let j = 0; j < vowels.length; j++) {
		if (input[i] === vowels[j]) {
			resultArray.push(vowels[j]);
		}
		if (input[i] === 'e') {
			resultArray.push('e');
		}
		if (input[i] === 'u') {
			resultArray.push('u');
		}
	}
}
console.log(resultArray);
