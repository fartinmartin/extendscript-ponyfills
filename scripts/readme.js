const fs = require("fs").promises;
const path = require("path");

try {
	run();
} catch (error) {
	console.log(error);
}

async function run() {
	const src = path.join(process.cwd(), "src");

	const headers = (await readFs(src, true))
		.filter((x) => !x.startsWith("_"))
		.filter((x) => x !== "overloads")
		.filter((x) => x !== "function");

	const rows = (
		await Promise.all(
			headers.map(async (header) => {
				const parent = path.join(src, header);
				return (await readFs(parent, false))
					.filter((x) => x !== "_index.ts")
					.map((x) => x.slice(0, -3))
					.sort((x, y) => x.name > y.name)
					.map((x) => {
						const done = !x.startsWith("_");
						return {
							header,
							name: done ? x : x.substring(1),
							done,
						};
					});
			})
		)
	).sort((x, y) => x.length > y.length);

	const html = getHTML(headers, rows);

	const readMe = path.join(process.cwd(), "README.md");
	await findAndReplace(readMe, /<table\b[^>]*>(.*?)<\/table>/, html)
		.then(() => console.log(`\n🎉 done! replaced <table> in README.md\n`))
		.catch((error) => console.error(error));
}

async function readFs(source, toggle) {
	const results = await fs.readdir(source, { withFileTypes: true });
	return results
		.filter((d) => (toggle ? d.isDirectory() : !d.isDirectory()))
		.map((d) => d.name);
}

function getHTML(headers, data) {
	// sort longest into 2 columns of a-z
	const col1 = data[0].slice(0, data[0].length / 2);
	const col2 = data[0].slice(data[0].length / 2, data[0].length);
	data[0] = col1.flatMap((val, i) => (col2[i] ? [val, col2[i]] : [val]));

	let rows = [];
	// chunk longest set into arrays of twos
	for (let i = 0; i < data[0].length; i += 2)
		rows.push(data[0].slice(i, i + 2));

	// push the rest into those defined arrays
	data.forEach((array, i) => {
		if (i === 0) return;
		array.forEach((item, index) => rows[index].push(item));
	});

	// add empty cells to columns with fewer rows
	rows.forEach((array) => {
		const target = rows[0].length;
		if (array.length < target) {
			const diff = target - array.length;
			for (let i = 0; i < diff; i++) array.push({ name: "" });
		}
	});

	const html =
		"<table>" +
		`<thead>${tr(
			headers.map((x) => ({ name: x })),
			true
		)}</thead>` +
		`<tbody>${rows.map((row) => tr(row)).join("")}</tbody>` +
		"</table>";

	return html;

	function tr(cells, header) {
		const t = header ? "th" : "td";
		const d = (x) => (!header && x.name ? (x.done ? "✅ " : "🚧 ") : "");
		const n = (x) => (!header && x.name ? `<code>${x.name}</code>` : x.name);
		const s = (x) =>
			header && data[0][0].header === x.name ? ` colspan="2"` : "";

		return `<tr>${cells
			.map((x) => `<${t}${s(x)}>${d(x)}${n(x)}</${t}>`)
			.join("")}</tr>`;
	}
}

async function findAndReplace(file, find, replace) {
	const data = await fs.readFile(file, "utf8");
	const findRegExp = new RegExp(find, "g");
	const result = data.replace(findRegExp, replace);
	await fs.writeFile(file, result, "utf8");
}
