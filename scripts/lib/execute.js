const child_process = require("child_process");

async function execute(command) {
	return new Promise((resolve, reject) =>
		child_process.exec(command, (error, standardOutput, standardError) =>
			error
				? reject()
				: standardError
				? reject(standardError)
				: resolve(standardOutput)
		)
	);
}

module.exports = execute;
