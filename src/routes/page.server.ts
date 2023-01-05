import { prisma } from "$lib/data/client"

export function load(){
    const workouts = prisma.workout.findMany();
    
    return {
        workouts
    }
}