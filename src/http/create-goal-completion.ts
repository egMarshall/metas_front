import { env } from "../env";

export async function createGoalCompletion(goalId: string) {
  await fetch("http://localhost:3333/goal-completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${env.VITE_USER_TOKEN}`,
    },
    body: JSON.stringify({
      goalId: goalId,
    }),
  });
}
