// or, use with cli: https://github.com/swc-project/cli/blob/master/src/spack/options.ts
const { config } = require("@swc/core/spack");

module.exports = config({
	entry: {
		script: __dirname + "/src/index.ts",
	},
	output: {
		path: __dirname + "/dist",
		name: "index.js",
	},
	options: {
		jsc: {
			target: "es3",
			loose: false,
		},
	},
});
