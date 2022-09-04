export function log() {
	for (var i = 0; i < arguments.length; ++i) {
		$.write(arguments[i]);
		$.write(" ");
	}
	$.writeln("");
}
