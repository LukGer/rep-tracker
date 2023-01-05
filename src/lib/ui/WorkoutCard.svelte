<script lang="ts">
	import type { Workout } from '../domain';

	export let workout: Workout;
</script>

<a href="/workouts/{workout.id}">
	<div class="h-32 w-32 min-h-[8rem] min-w-[8rem] bg-white rounded-lg p-2">
		<p class="text-base">{workout.title}</p>
		<ul>
			{#each workout.exercises as exercise}
				<li>
					<p class="text-sm italic">
						&centerdot; {exercise.title}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</a>
