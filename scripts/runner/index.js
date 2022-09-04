// https://github.com/rendertom/VSCode-Adobe-Script-Runner
const cp = require("child_process");
const path = require("path");
const getShellCommand = require("./lib/getShellCommand.js");
const hostApps = require("./lib/hostApps.js");

/**
 * Builds and executes command.
 * @param {Object} hostApp entry from hostApps[hostApp].
 */
function buildCommand(hostApp, scriptFile) {
	try {
		getShellCommand(hostApp, scriptFile, function (command) {
			console.log("Running shell command:", command);
			cp.exec(command, (error, stdout, stderr) => {
				if (error) {
					console.error(`exec error: ${error}`);
					return;
				}

				console.log(stdout);
				console.log(stderr);
			});
			console.log(`Script sent to ${hostApp.appName}`);
		});
	} catch (error) {
		if (typeof error !== "undefined") {
			console.log(error);
		}
	}
}

const app = hostApps.find((x) => x.shortName === "ae");
const file = path.join(process.cwd(), "test", "dist", "index.js");

buildCommand(app, file);
