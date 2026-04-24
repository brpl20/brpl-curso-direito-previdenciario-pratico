import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { svelteInspectorFork } from './local-plugins/svelte-inspector-fork/plugin.js';

export default defineConfig({
	plugins: [svelteInspectorFork(), tailwindcss(), sveltekit()],
	server: {
		fs: { allow: ['local-plugins'] }
	}
});
