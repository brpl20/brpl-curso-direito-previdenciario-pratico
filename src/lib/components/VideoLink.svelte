<script>
	import { YT, YT_TITLES } from '$lib/youtube-index.js';

	let { slug, title = '', descricao = '' } = $props();

	const url = $derived(YT[slug] ?? null);
	const officialTitle = $derived(YT_TITLES[slug] ?? '');
	const display = $derived(title || officialTitle || slug);
</script>

<li class="my-1">
	{#if url}
		<a
			href={url}
			target="_blank"
			rel="noopener noreferrer"
			class="font-medium text-[--color-prev-light] hover:underline"
		>
			{display}
		</a>
		{#if descricao}
			<span class="text-base-content/70"> — {descricao}</span>
		{/if}
	{:else}
		<span class="text-base-content/60" title="Sem link cadastrado">{display}</span>
		{#if descricao}
			<span class="text-base-content/60"> — {descricao}</span>
		{/if}
		<span class="ml-1 text-xs text-warning/80">(sem link)</span>
	{/if}
</li>
