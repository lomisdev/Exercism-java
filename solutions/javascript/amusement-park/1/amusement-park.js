/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
	const visitor = {
		name,
		age,
		ticketId,
	};
	return visitor;
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
	visitor.ticketId = null;
	return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
	let ticketStatusCheck = '';
	if (tickets[ticketId] === undefined) {
		ticketStatusCheck = 'unknown ticket id';
	} else if (tickets[ticketId] === null) {
		ticketStatusCheck = 'not sold';
	} else {
		ticketStatusCheck = `sold to ${tickets[ticketId]}`;
	}
	return ticketStatusCheck;
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
	const simpleStatus = tickets[ticketId] ?? 'invalid ticket !!!';
	return simpleStatus;
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
	let version;

	if (visitor.gtc !== undefined) {
		version = visitor.gtc.version;
	}

	return version;
}
