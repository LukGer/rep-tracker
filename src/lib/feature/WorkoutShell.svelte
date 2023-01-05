<script lang="ts">
	import type { Workout } from '$lib/domain';
	import WorkoutCard from '$lib/ui/WorkoutCard.svelte';

	export let workouts: Workout[];
</script>

<div class="flex flex-col gap-4 py-6 bg-white rounded-3xl">
	<p class="underline text-slate-600 text-sm px-6">Your workouts</p>
	<div class="flex flex-row gap-3 px-6">
		{#if workouts?.length > 0}
			{#each workouts as workout}
				<WorkoutCard {workout} />
			{/each}
		{:else}
			<div class="flex flex-col gap-4">
				<p>You have no workouts yet.</p>
				<div class="flex flex-row gap-2 align-bottom">
					<a class="italic" href="/workouts/new">Create a new one</a>
					<i class="fa-solid fa-arrow-right animate-right-arrow" />
				</div>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.animate-right-arrow {
		animation: slide-right infinite 2s linear;
	}

	@keyframes slide-right {

		50% {
			transform: translateX(0%);
		}

		75% {
			transform: translateX(40%);
		}
	}
</style>
