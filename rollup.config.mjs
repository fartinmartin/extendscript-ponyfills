import nodeResolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json" assert { type: "json" };

const jsxName = `${pkg.name}-v${pkg.version}.jsx`;

const typescriptBuild = {
	input: "src/index.ts",
	external: pkg.dependencies ? Object.keys(pkg.dependencies) : null,
	output: {
		file: pkg.main,
		format: "es",
		strict: false,
	},
	plugins: [typescript({ declaration: true, declarationDir: "dist/types" })],
};

const extendscriptBuild = {
	input: "src/index.ts",
	output: {
		file: `dist/extendscript/${jsxName}`,
		format: "cjs",
		strict: false,
		format: "iife",
		name: "PONIES",
	},
	plugins: [
		nodeResolve(),
		typescript({ declaration: false, removeComments: true }),
	],
};

export default [typescriptBuild, extendscriptBuild];
