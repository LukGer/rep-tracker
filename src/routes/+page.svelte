<script lang="ts">
	import WorkoutShell from '$lib/feature/WorkoutShell.svelte';

	export let data: any;
</script>

<div class="flex flex-col p-4">
	<WorkoutShell workouts={data.workouts} />
</div>
