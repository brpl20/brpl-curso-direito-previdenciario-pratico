<script>
	import { YT, YT_TITLES } from '$lib/youtube-index.js';

	let { slug = '', id = '', title = '' } = $props();

	function extractId(url) {
		if (!url) return '';
		const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/);
		return m ? m[1] : '';
	}

	const resolvedUrl = $derived(slug ? (YT[slug] ?? '') : '');
	const videoId = $derived(id || extractId(resolvedUrl));
	const caption = $derived(title || (slug ? YT_TITLES[slug] : '') || '');
	const embedUrl = $derived(videoId ? `https://www.youtube-nocookie.com/embed/${videoId}` : '');
</script>

{#if embedUrl}
	<figure class="not-prose mx-auto my-6 w-full max-w-3xl">
		<div
			class="relative w-full overflow-hidden rounded-xl border border-base-300 bg-black"
			style="padding-top: 56.25%;"
		>
			<iframe
				src={embedUrl}
				title={caption || 'Vídeo do YouTube'}
				loading="lazy"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowfullscreen
				referrerpolicy="strict-origin-when-cross-origin"
				class="absolute inset-0 h-full w-full border-0"
			></iframe>
		</div>
		{#if caption}
			<figcaption class="mt-2 text-sm leading-snug text-base-content/60">
				{caption}
			</figcaption>
		{/if}
	</figure>
{:else}
	<div class="not-prose my-6 rounded-xl border border-warning/40 bg-warning/10 p-4 text-sm text-warning">
		Vídeo não encontrado {slug ? `(slug: ${slug})` : id ? `(id: ${id})` : ''}
	</div>
{/if}
