import { defineProperties } from "./defineProperties";

export const create = (function () {
	const Temp = function () {};

	return function (prototype: any, propertiesObject: any) {
		if (prototype !== Object(prototype) && prototype !== null) {
			throw Error("TypeError: Argument must be an object, or null");
		}

		// @ts-ignore
		Temp.prototype = prototype || {};
		if (propertiesObject !== undefined) {
			defineProperties(Temp.prototype, propertiesObject);
		}

		// @ts-ignore
		const result = new Temp();
		// @ts-ignore
		Temp.prototype = null;

		// to imitate the case of Object.create(null)
		if (prototype === null) {
			result.__proto__ = null;
		}

		return result;
	};
})();
