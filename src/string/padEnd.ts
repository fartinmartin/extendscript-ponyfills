import { repeat } from "./repeat";

export function padEnd(
	string: string,
	targetLength: number,
	padString?: string
) {
	targetLength = targetLength >> 0; // floor if number or convert non-number to 0;
	padString = String(typeof padString !== "undefined" ? padString : " ");

	if (string.length > targetLength) {
		return String(string);
	} else {
		targetLength = targetLength - string.length;
		if (targetLength > padString.length) {
			padString += repeat(padString, targetLength / padString.length); // append to original to ensure we are longer than needed
		}
		return String(string) + padString.slice(0, targetLength);
	}
}
