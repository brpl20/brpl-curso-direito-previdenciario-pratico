<script>
	import { modules } from '$lib/course-data.js';
	import { page } from '$app/state';
	import favicon from '$lib/assets/favicon.svg';

	let { drawerId = 'sidebar-drawer' } = $props();
</script>

<div class="drawer-side z-40">
	<label for={drawerId} aria-label="close sidebar" class="drawer-overlay"></label>
	<aside class="menu bg-base-200 text-base-content min-h-full w-80 border-r border-base-300 p-4">
		<div class="mb-6 px-2">
			<a href="/" class="group flex items-center gap-3">
				<img
					src={favicon}
					alt="Previdenciário"
					class="h-8 w-8 transition-transform group-hover:scale-110"
				/>
				<span class="text-lg font-bold">
					Direito <span class="text-[--color-prev-light]">Previdenciário</span>
				</span>
			</a>
		</div>

		<div class="divider my-2"></div>

		{#each modules as mod (mod.id)}
			<li class="menu-title mt-6">
				<div class="flex flex-col gap-0.5">
					<span class="font-mono text-xs opacity-50"
						>Módulo {String(mod.id).padStart(2, '0')}</span
					>
					<span class="text-sm font-semibold text-[--color-gold]">{mod.title}</span>
				</div>
			</li>
			{#each mod.lessons as lesson (lesson.slug)}
				{@const href = `/lessons/${mod.slug}/${lesson.slug}`}
				<li>
					<a {href} class:active={page.url.pathname === href} class="text-sm">
						<span class="shrink-0 font-mono text-xs opacity-50"
							>{mod.id}.{lesson.order}</span
						>
						{lesson.title}
					</a>
				</li>
			{/each}
		{/each}
	</aside>
</div>
