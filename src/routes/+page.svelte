<script>
	import { modules } from '$lib/course-data.js';
	import favicon from '$lib/assets/favicon.svg';
</script>

<div class="hero relative min-h-[70vh] overflow-hidden">
	<div class="absolute inset-0 opacity-5">
		<div class="absolute left-10 top-10 h-64 w-64 rounded-full bg-[--color-prev] blur-3xl">
		</div>
		<div
			class="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[--color-gold] blur-3xl"
		></div>
	</div>

	<div class="hero-content relative z-10 text-center">
		<div class="max-w-2xl">
			<img src={favicon} alt="Balança da Justiça" class="mx-auto mb-6 h-24 w-24 drop-shadow-lg" />
			<h1 class="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
				Direito<br />
				<span
					style="background: linear-gradient(to right, #1e4d8c, #2d6ab8); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;"
					>Previdenciário</span
				>
				<span class="text-base-content">Prático</span>
			</h1>
			<p class="py-6 text-lg leading-relaxed opacity-80">
				Do fundamento constitucional à prática forense &mdash; curso completo para advogados
				previdenciaristas.
			</p>
			<div class="flex flex-wrap justify-center gap-3">
				<a
					href="/lessons/{modules[0].slug}/{modules[0].lessons[0].slug}"
					class="btn btn-primary btn-lg"
				>
					Começar Agora
				</a>
				<label for="sidebar-drawer" class="btn btn-outline btn-lg lg:hidden">
					Ver Módulos
				</label>
			</div>
			<div class="mt-8 flex justify-center gap-6 text-sm opacity-60">
				<span>{modules.length} módulos</span>
				<span>&bull;</span>
				<span>{modules.reduce((acc, m) => acc + m.lessons.length, 0)} aulas</span>
				<span>&bull;</span>
				<span>RGPS + RPPS + Prática</span>
			</div>
		</div>
	</div>
</div>

<section class="mx-auto max-w-6xl px-4 py-12">
	<div class="mb-2 flex items-center gap-3">
		<div class="h-8 w-1.5 rounded-full bg-[--color-prev]"></div>
		<h2 class="text-3xl font-bold tracking-tight">Módulos do Curso</h2>
	</div>
	<p class="mb-8 ml-5 opacity-60">Selecione um módulo para começar a estudar.</p>

	<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each modules as mod, i (mod.id)}
			<div
				class="card border border-base-300 bg-base-200 transition-all duration-300 hover:-translate-y-1 hover:border-[--color-prev]/40 hover:shadow-lg hover:shadow-[--color-prev]/5"
			>
				<div class="card-body">
					<div class="mb-2 flex items-center gap-3">
						<span class="badge badge-primary badge-lg font-mono font-bold">
							{String(mod.id).padStart(2, '0')}
						</span>
						<h3 class="card-title text-lg">{mod.title}</h3>
					</div>
					<ul class="mt-2 space-y-1 text-sm opacity-70">
						{#each mod.lessons.slice(0, 3) as lesson (lesson.slug)}
							<li class="truncate">&bull; {lesson.title}</li>
						{/each}
						{#if mod.lessons.length > 3}
							<li class="opacity-50">+ {mod.lessons.length - 3} aulas...</li>
						{/if}
					</ul>
					<div class="card-actions mt-4 items-center justify-between">
						<span class="text-xs opacity-50">{mod.lessons.length} aulas</span>
						<a
							href="/lessons/{mod.slug}/{mod.lessons[0].slug}"
							class="btn btn-primary btn-sm"
						>
							Começar
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>
