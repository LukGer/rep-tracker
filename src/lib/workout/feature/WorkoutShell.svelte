<script lang="ts">
	import type { Workout } from '$lib/workout/domain';
	import WorkoutCard from '$lib/workout/ui/WorkoutCard.svelte';

	let workout: Workout = {
		id: 1,
		title: 'Push',
		exercises: [
			{
				title: 'Benchpress',
				description: '',
				weight: 30,
				sets: 3,
				reps: 12
			},
			{
				title: 'Benchpress',
				description: '',
				weight: 30,
				sets: 3,
				reps: 12
			}
		]
	};
</script>

<div class="flex flex-col gap-2 pt-6">
	<p class="underline text-slate-600 text-sm px-6">Your workouts</p>
	<div class="flex flex-row gap-3 overflow-x-scroll px-6">
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
		<WorkoutCard {workout} />
	</div>
</div>
