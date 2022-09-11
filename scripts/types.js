const fs = require("fs").promises;
const path = require("path");
const execute = require("./lib/execute");
const findAndReplace = require("./lib/findAndReplace");

const config = path.join(process.cwd(), "tsconfig.json");

run();

async function run() {
	const data = await fs.readFile(config, "utf8");
	const findRegExp = new RegExp(/"exclude": .+/, "g");

	const old = data.match(findRegExp).join("");
	const replace = insert(old, -1, 0, `, "test"`);

	try {
		await findAndReplace(config, findRegExp, replace);
	} catch (error) {
		console.log(error);
	}

	try {
		await execute("rm -rf dist/types/*");
		const out = await execute(
			"npx tsc --declaration --emitDeclarationOnly --declarationDir dist/types"
		);
		out && console.log(out);
	} catch (error) {
		error && console.log(error);
	}

	await findAndReplace(config, findRegExp, old);

	console.log(`\n📘 Types declarations created from src/\n`);
}

function insert(origin, index, absIndex, string) {
	return (
		origin.slice(0, index) + string + origin.slice(index + Math.abs(absIndex))
	);
}
