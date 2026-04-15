<script>
	import { page } from '$app/state';
	import { modules } from '$lib/course-data.js';
	import { getLegislationUpTo } from '$lib/legislation-data.js';

	let { drawerId = 'legislation-drawer' } = $props();

	let currentSlug = $derived.by(() => {
		const path = page.url.pathname;
		for (const mod of modules) {
			for (const lesson of mod.lessons) {
				if (path === `/lessons/${mod.slug}/${lesson.slug}`) {
					return lesson.slug;
				}
			}
		}
		return null;
	});

	let legislation = $derived(currentSlug ? getLegislationUpTo(currentSlug) : []);

	const typeStyles = {
		cf: { label: 'CF/88', cls: 'badge-primary' },
		lei: { label: 'Lei', cls: 'badge-secondary' },
		decreto: { label: 'Decreto', cls: 'badge-accent' },
		sumula: { label: 'Súmula', cls: 'badge-warning' },
		jurisprudencia: { label: 'Jurisp.', cls: 'badge-info' }
	};
</script>

<div class="drawer-side z-50">
	<label for={drawerId} aria-label="close legislation drawer" class="drawer-overlay"></label>
	<aside class="bg-base-200 text-base-content min-h-full w-80 border-l border-base-300 p-4 lg:w-96">
		<div class="mb-4 flex items-center gap-2">
			<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[--color-gold]" viewBox="0 0 20 20" fill="currentColor">
				<path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
			</svg>
			<h2 class="text-lg font-bold text-[--color-gold]">Legislação</h2>
		</div>
		<p class="mb-4 text-xs opacity-50">
			Dispositivos legais acumulados até esta aula.
		</p>

		{#if legislation.length === 0}
			<div class="rounded-lg border border-base-300 bg-base-300/30 p-6 text-center">
				<p class="text-sm opacity-60">Nenhum dispositivo legal mapeado para esta aula.</p>
				<p class="mt-2 text-xs opacity-40">Navegue pelas lições do curso para ver a legislação relevante.</p>
			</div>
		{:else}
			<div class="space-y-3">
				{#each legislation as item (item.ref)}
					{@const style = typeStyles[item.type] || { label: item.type, cls: 'badge-ghost' }}
					<div class="rounded-lg border border-base-300 bg-base-300/20 p-3">
						<div class="mb-1.5 flex items-center gap-2">
							<span class="badge {style.cls} badge-sm">{style.label}</span>
							<span class="text-sm font-semibold">{item.ref}</span>
						</div>
						<p class="text-xs leading-relaxed opacity-70">{item.text}</p>
					</div>
				{/each}
			</div>
		{/if}

		<div class="mt-6 border-t border-base-300 pt-4">
			<div class="flex items-center gap-2 text-xs opacity-40">
				<span class="badge badge-primary badge-xs"></span> Constituição
				<span class="badge badge-secondary badge-xs ml-2"></span> Leis
				<span class="badge badge-accent badge-xs ml-2"></span> Decretos
			</div>
		</div>
	</aside>
</div>
