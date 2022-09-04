export function testA(
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

export function test(callback: Function) {
	return {
		result: callback(),
		description: "",
		expectedValue: "",
		callback,

		describe(text: string) {
			this.description = text;
			return this;
		},

		status() {
			return this.result.toString() === this.expectedValue.toString(); // hmm, is .toString() a good idea?
		},

		expect(value: any) {
			this.expectedValue = value;
			return this;
		},

		run() {
			alert(
				`${this.status() ? "🪵" : "🔥"} ${
					this.description
				}\n result: ${this.result.toString()}\n\nexpected: ${this.expectedValue.toString()}`
			);
		},
	};
}

// export class Test {
// 	result: any;
// 	description: string;
// 	expectedValue: any;

// 	constructor(public callback: Function) {
// 		this.result = callback();
// 		this.description = "";
// 		this.expectedValue = "";
// 	}

// 	describe(text: string) {
// 		this.description = text;
// 		return this;
// 	}

// 	status() {
// 		return this.result === this.expectedValue;
// 	}

// 	is(value: any) {
// 		this.expectedValue = value;
// 		return value;
// 	}

// 	run() {
// 		alert(
// 			`${this.status() ? "🪵" : "🔥"} ${
// 				this.description
// 			}\n result: ${this.result.toString()}\n\nexpected: ${this.expectedValue.toString()}`
// 		);
// 	}
// }
