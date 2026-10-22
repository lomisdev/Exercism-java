// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
	let timeInMinutes = 0;
	switch (name) {
		case 'Pure Strawberry Joy':
			timeInMinutes = 0.5;
			break;
		case 'Energizer':
		case 'Green Garden':
			timeInMinutes = 1.5;
			break;
		case 'Tropical Island':
			timeInMinutes = 3;
			break;
		case 'All or Nothing':
			timeInMinutes = 5;
			break;

		default:
			timeInMinutes = 2.5;
			break;
	}
	return timeInMinutes;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
	let count = 0;
	let i = 0;

	while (i < limes.length) {
		if (limes[i] === 'small' && wedgesNeeded > 0) {
			wedgesNeeded -= 6;
			count++;
		} else if (limes[i] === 'medium' && wedgesNeeded > 0) {
			wedgesNeeded -= 8;
			count++;
		} else if (wedgesNeeded > 0) {
			wedgesNeeded -= 10;
			count++;
		}
		i++;
	}

	return count;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
	while (timeLeft > 0 && orders.length > 0) {
		timeLeft -= timeToMixJuice(orders[0]);
		orders.splice(0, 1);
	}
	return orders;
}
