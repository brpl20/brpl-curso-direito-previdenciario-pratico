<script>
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import AppShell from '$lib/components/AppShell.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Curso de Direito Previdenciário Prático</title>
</svelte:head>

<AppShell>
	{@render children()}
</AppShell>
