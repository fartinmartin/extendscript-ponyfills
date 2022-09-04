export function repeat(string: string, count: number) {
	var str = "" + string;
	count = +count;
	if (count != count) {
		count = 0;
	}
	if (count < 0) {
		throw new Error("RangeError: String.repeat count must be non-negative");
	}
	if (count == Infinity) {
		throw new Error(
			"RangeError: String.repeat count must be less than infinity"
		);
	}
	count = Math.floor(count);
	if (str.length == 0 || count == 0) {
		return "";
	}
	if (str.length * count >= 1 << 28) {
		throw new Error(
			"RangeError: String.repeat count must not overflow maximum string size"
		);
	}
	var rpt = "";
	for (;;) {
		if ((count & 1) == 1) {
			rpt += str;
		}
		count >>>= 1;
		if (count == 0) {
			break;
		}
		str += str;
	}
	return rpt;
}
