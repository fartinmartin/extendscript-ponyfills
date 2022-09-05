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
				`${this.status() ? "🪵" : "🔥"} ${this.description}\n` +
					`result: ${this.result.toString()}\n\nexpected: ${this.expectedValue.toString()}`
			);
		},
	};
}
