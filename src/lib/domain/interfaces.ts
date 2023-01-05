export interface Workout {
	id: number;
	title: string;
	exercises: Exercise[];
}

export interface Exercise {
	title: string;
	sets: number;
	reps: number;
	weight: number;
}
