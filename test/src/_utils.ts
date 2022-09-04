export function test(callback: Function, expectedValue) {
	const result = callback();
	const status = result === expectedValue;
	alert(
		`🪵 log:\n result: ${result.toString()}\nexpect: ${expectedValue.toString()}\nstatus:${
			status ? "✅" : "⛔"
		}`
	);
}
