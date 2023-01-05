<script lang="ts">
	import { Input, Label, Button } from 'flowbite-svelte';

	import type { PageData } from './$types';
	import type { Exercise, Workout } from '$lib/domain';
	import Plus from '$lib/ui/Plus.svelte';

	export let data: PageData;

	let workout: Workout = data.workout;

	const addNewExercise = () =>{
		const newExercise: Exercise = {
			title: "",
			sets: 0,
			reps: 0,
			weight: 0
		}

		workout.exercises.push(newExercise);
	}
</script>

<div class="flex-1 flex flex-col p-4 pb-8 gap-4">
	<div>
		<Label for="workout_title" class="mb-2">Name</Label>
		<Input
			type="text"
			id="workout_title"
			placeholder="e.g. Benchpress"
			required
			bind:value={workout.title}
		/>
	</div>

	{#each workout.exercises as exercise}
		<div class="rounded-xl border-blue-500 border-2 p-2">
			
			<div>
				<Label for="workout_title" class="mb-2">Name</Label>
				<Input
					type="text"
					id="workout_title"
					placeholder="e.g. Benchpress"
					required
					bind:value={exercise.title}
				/>
			</div>

		</div>
	{/each}

	<div class="flex flex-row gap-3 items-center">
		<div class="flex-1" />
		<p>Add new exercise</p>
		<Button
			class="!p-1"
			on:click={addNewExercise}
		>
			<Plus />
		</Button>
	</div>

	<div class="flex-1 flex flex-col-reverse">
		<Button>Save</Button>
	</div>
</div>
