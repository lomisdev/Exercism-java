// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
	const str1 = array1.join('');
	const str2 = array2.join('');

	const sum = Number(str1) + Number(str2);
	return sum;
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
	const valueToString = String(value);
	let isPalindrome = false;

	if (valueToString.length < 2) {
		isPalindrome = true;
	} else if (valueToString[0] !== valueToString[valueToString.length - 1]) {
		isPalindrome = false;
	} else {
		return luckyNumber(Number(valueToString.substring(1, valueToString.length - 1)));
	}
	return isPalindrome;
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
	if (input === '' || input === undefined || input === null) {
		return 'Required field';
	} else if (isNaN(Number(input)) || input === '0') {
		return 'Must be a number besides 0';
	} else {
		return '';
	}
}
