const path = require("path");
const pkg = require("../package.json");
const findAndReplace = require("./lib/findAndReplace");
const execute = require("./lib/execute");

const files = [
	path.join(process.cwd(), "package.json"),
	path.join(process.cwd(), "package-lock.json"),
	path.join(process.cwd(), "README.md"),
];

run();

async function run() {
	const oldName = pkg.name;
	const newName = path.basename(process.cwd());

	const oldAuthor = pkg.author;
	const newAuthor = (await execute("git config --global user.name")).trim();

	await Promise.all(
		files.map(async (file) => {
			await findAndReplace(file, oldName, newName);
			await findAndReplace(file, oldAuthor, newAuthor);
		})
	);

	console.log(
		`\n🎉 done! replaced "${oldName}" with "${newName}" and "${oldAuthor}" with "${newAuthor}" in: \n` +
			`${files.map((file) => "👉 " + path.basename(file)).join("\n")}` +
			`\n————————————————\n` +
			`❕ you may also want to edit the description in your package.json` +
			`❕ feel free to remove the "npm run rename" script and .vscode/rename.js file, if ya like\n`
	);
}
