const fs = require("fs").promises;
const path = require("path");

const child_process = require("child_process");
const pkg = require("../package.json");

const files = [
  path.join(process.cwd(), "package.json"),
  // path.join(process.cwd(), "package-lock.json"),
  path.join(process.cwd(), "README.md"),
];

run();

async function run() {
  const oldName = pkg.name;
  const newName = path.basename(process.cwd());

  const oldAuthor = pkg.author;
  const newAuthor = (await execute("git config --global user.name")).trim();

  Promise.all(
    files.map(async (file) => {
      await findAndReplace(file, oldName, newName);
      await findAndReplace(file, oldAuthor, newAuthor);
    })
  )
    .then(() => {
      console.log(
        `\n🎉 done! replaced "${oldName}" with "${newName}" and "${oldAuthor}" with "${newAuthor}" in: \n${files
          .map((file) => "👉 " + path.basename(file))
          .join("\n")}`
      );
      console.log(`\n————————————————\n`);
      console.log(`❕ you may also want to edit the description in your package.json`);
      console.log(
        `❕ feel free to remove the "npm run rename" script and .vscode/rename.js file, if ya like\n`
      );
    })
    .catch((error) => console.error(error));
}

async function findAndReplace(file, find, replace) {
  const data = await fs.readFile(file, "utf8");
  const findRegExp = new RegExp(find, "g");
  const result = data.replace(findRegExp, replace);
  await fs.writeFile(file, result, "utf8");
}

async function execute(command) {
  return new Promise((resolve, reject) =>
    child_process.exec(command, (error, standardOutput, standardError) =>
      error ? reject() : standardError ? reject(standardError) : resolve(standardOutput)
    )
  );
}
