import { env } from "../env";

interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequency: number;
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest) {
  await fetch(`${env.VITE_API_URL}/goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${env.VITE_USER_TOKEN}`,
    },
    body: JSON.stringify({
      title: title,
      desiredWeeklyFrequency: desiredWeeklyFrequency,
    }),
  });
}
