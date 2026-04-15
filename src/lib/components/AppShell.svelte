<script>
	import Sidebar from './Sidebar.svelte';
	import Navbar from './Navbar.svelte';
	import LegislationDrawer from './LegislationDrawer.svelte';

	let { children } = $props();

	const sidebarId = 'sidebar-drawer';
	const legId = 'legislation-drawer';
</script>

<!-- Left drawer (navigation) -->
<div class="drawer lg:drawer-open">
	<input id={sidebarId} type="checkbox" class="drawer-toggle" />

	<div class="drawer-content flex flex-col">
		<!-- Right drawer (legislation) wraps content -->
		<div class="drawer drawer-end">
			<input id={legId} type="checkbox" class="drawer-toggle" />

			<div class="drawer-content flex flex-col">
				<Navbar drawerId={sidebarId} legDrawerId={legId} />
				<main class="flex-1 p-6">
					{@render children()}
				</main>
			</div>

			<LegislationDrawer drawerId={legId} />
		</div>
	</div>

	<Sidebar drawerId={sidebarId} />
</div>
