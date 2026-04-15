<script>
	let { fonte = 'Jurisprudência', children } = $props();
</script>

<div class="not-prose my-6 rounded-xl border border-[--color-gold]/30 bg-[--color-gold]/10 p-5">
	<div class="mb-2 flex items-center gap-2 font-bold text-[--color-gold-light]">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
			<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838l-2.727 1.17 1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.547l1.6.686c.696.298 1.466.298 2.162.038l.138-.059v3.484c-.378.213-.777.401-1.2.56a.998.998 0 01-.4.076zm5.7-5.455v3.823a8.952 8.952 0 01-1 .657V11.12l1-.001z" />
		</svg>
		{fonte}
	</div>
	<div class="text-base-content/80 text-sm leading-relaxed italic">
		{@render children()}
	</div>
</div>
