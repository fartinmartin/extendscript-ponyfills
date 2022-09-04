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
			target: "es2015",
			minify: {
				format: {
					comments: "all",
				},
			},
		},
	},
});
