import { defineConfig } from 'tsdown';
import { copyStaticAssets } from 'build-utils/copy-assets';
// import pkg from './package.json' with { type: 'json' };

export default defineConfig({
	entry: ['src/index.ts'],
	// entry: { [`extendscript-ponyfills-v${pkg.version}`]: 'src/index.ts' },
	format: ['esm'],
	// outExtensions: () => ({ js: '.jsx' }),
	clean: true,
	dts: true,
	plugins: [
		{
			name: 'strip-region-comments',
			renderChunk(code: string) {
				return code.replace(/\/\/#(end)?region[^\n]*\n?/g, '');
			},
		},
	],
	onSuccess: () => {
		copyStaticAssets('src', 'dist');
	},
});
