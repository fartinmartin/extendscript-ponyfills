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

	const GLOBAL = $ as MyGlobal;
	const taskGroup = `_${type}s`;

	// @ts-ignore
	if (!GLOBAL[taskGroup]) GLOBAL[taskGroup] = {};
	// @ts-ignore
	GLOBAL[taskGroup][id] = callback;

	GLOBAL.writeln(id);

	return app.scheduleTask('$._timers["' + id + '"]();', delay, repeat);
}

function guid() {
	var s4 = function () {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	};
	return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}
