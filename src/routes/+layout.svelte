<script>
	import '../app.css';
</script>

<div class="h-screen w-screen page flex flex-col">
	<div class="h-12 header flex flex-row items-center px-6">
		<a href="/">
			<h1 class="text-white tracking-widest">RepTrack</h1>
		</a>
	</div>
	<slot />
</div>

<style lang="scss">
	.page {
		background-color: var(--bg-color);
	}

	.header {
		background-color: var(--header-color);
	}
</style>
