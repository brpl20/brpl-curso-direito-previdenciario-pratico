import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const forkedInspectorPath = path.resolve(__dirname, 'Inspector.svelte');

export function svelteInspectorFork() {
	return {
		name: 'svelte-inspector-fork',
		apply: 'serve',
		enforce: 'pre',
		resolveId(id) {
			if (id === 'virtual:svelte-inspector-path:Inspector.svelte') {
				return forkedInspectorPath;
			}
		}
	};
}
