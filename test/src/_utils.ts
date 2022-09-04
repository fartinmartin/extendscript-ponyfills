export function test(
	description: string,
	callback: Function,
	expectedValue: any
) {
	const result = callback();
	const status = result === expectedValue;
	alert(
		`${
			status ? "🪵" : "🔥"
		} ${description}\n result: ${result.toString()}\n\nexpected: ${expectedValue.toString()}`
	);
}
