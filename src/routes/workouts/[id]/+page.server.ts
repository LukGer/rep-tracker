import type { Workout } from "$lib/domain";
import type { Actions, PageServerLoad, RouteParams } from "./$types";

export function load({ params }: { params: RouteParams }): PageServerLoad {
  console.log(params);

  const workout: Workout = {
    id: 0,
    title: "",
    exercises: []
  }

  return {
    workout,
  };
}

export const actions: Actions = {
  add: async (event) => {
    console.log("ADD", event);
  },
  update: async (event) => {
    console.log("UPDATE", event);
  },
};
