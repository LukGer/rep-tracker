export interface Workout {
	id: number;
	title: string;
	exercises: Exercise[];
}

export interface Exercise {
	title: string;
	description: string;
	weight: number;
	sets: number;
	reps: number;
}
