<script>
	import { legislationItemId } from '$lib/legislation-data.js';

	let {
		ref,
		drawerId = 'legislation-drawer',
		children
	} = $props();

	const targetId = $derived(legislationItemId(ref));

	function openAndScroll(e) {
		e.preventDefault();
		const cb = document.getElementById(drawerId);
		if (cb instanceof HTMLInputElement) cb.checked = true;

		requestAnimationFrame(() => {
			const target = document.getElementById(targetId);
			if (!target) return;
			target.scrollIntoView({ behavior: 'smooth', block: 'start' });
			target.style.outline = '2px solid var(--color-gold, #d4af37)';
			setTimeout(() => {
				target.style.outline = '';
			}, 2200);
		});
	}
</script>

<a
	href={`#${targetId}`}
	onclick={openAndScroll}
	class="font-medium text-[--color-prev-light] underline decoration-dotted underline-offset-2 hover:text-[--color-gold]"
>{@render children()}</a>
