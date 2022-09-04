const file = require("./file.js");

const settings = {
	bringHostApplicationToFront: true,
};

/**
 * Builds ready-to-execute Shell command.
 * @param {Object} hostApp Application data.
 * @param {String} scriptFile Path to a script file.
 * @param {Function} callback Callback function that receives the result.
 */
function getShellCommand(hostApp, scriptFile, callback) {
	const applicationName = hostApp.appName;
	const platform = process.platform;

	let command = hostApp[platform];
	if (!command) {
		throw console.log(
			`${applicationName} is not hooked-up to work with ${platform} os.`
		);
	}

	if (platform === "darwin" && command.includes("{activate}")) {
		const activate = settings.bringHostApplicationToFront ? "activate" : "";
		command = command.replace("{activate}", activate);
	} else if (platform === "win32" && command.includes("{appExe}")) {
		// InDesign and InCopy does not expose 'appExe' in settings - they are launched via Visual Basic magic.
		const appExe = settings[hostApp.appExe];
		if (!appExe || !file.exists(appExe)) {
			throw console.log(
				`Unable to find ${applicationName} executable defined in settings. Make sure you have that path set-up correctly.`
			);
		}

		command = command.replace("{appExe}", appExe);
	}

	command = command.replace("{scriptFile}", scriptFile);

	callback(command);
}

module.exports = getShellCommand;
