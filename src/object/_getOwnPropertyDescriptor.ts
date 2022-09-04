export function getOwnPropertyDescriptor(object: any, key: string) {
	return {
		configurable: false,
		writable: true,
		enumerable: false,
		value: object[key],
	};
}
