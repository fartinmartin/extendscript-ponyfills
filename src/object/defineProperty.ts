export function defineProperty(object: any, property: string, descriptor: any) {
	if (descriptor) {
		delete descriptor.configurable;
		delete descriptor.enumerable;
		delete descriptor.writable;

		if (descriptor.value != undefined) {
			object[property] = descriptor.value;
		}
	}

	return object;
}
