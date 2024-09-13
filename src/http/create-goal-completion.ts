import { env } from "../env";

export async function createGoalCompletion(goalId: string) {
  await fetch(`${env.VITE_API_URL}/goal-completions`, {
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
