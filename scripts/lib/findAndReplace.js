const fs = require("fs").promises;

async function findAndReplace(path, find, replace) {
	const data = await fs.readFile(path, "utf8");
	const findRegExp = new RegExp(find, "g");
	const result = data.replace(findRegExp, replace);
	await fs.writeFile(path, result, "utf8");
}

module.exports = findAndReplace;
