export function trim(string: string) {
	return String(string).replace(/^\s+/, "").replace(/\s+$/, "");
}
