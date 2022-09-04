type MyGlobal = $ & {
	_intervals?: { [id: string]: Function };
	_timers?: { [id: string]: Function };
};

export function setTimeout(callback: Function, delay?: number) {
	return task("timeout", callback, delay, false);
}

export function setInterval(callback: Function, delay?: number) {
	return task("interval", callback, delay, true);
}

export function clearTimeout(id: number) {
	app.cancelTask(id);
}

export function clearInterval(id: number) {
	clearTimeout(id);
}

function task(
	type: "interval" | "timeout",
	callback: Function,
	delay?: number,
	repeat?: boolean
) {
	if (!delay) delay = 0;
	if (!repeat) repeat = false;

	const id = guid();
	const taskGroup = `_${type}s`;

	// @ts-ignore
	if (!$[taskGroup]) $[taskGroup] = {};
	// @ts-ignore
	$[taskGroup][id] = callback;

	return app.scheduleTask(`(${callback.toString()})();`, delay, repeat);
}

function guid() {
	var s4 = function () {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};
	return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}
