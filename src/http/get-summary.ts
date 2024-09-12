import { env } from "../env";

type SummaryResponse = {
  completed: number;
  total: number;
  goalsPerDay: Record<
    string,
    {
      id: string;
      title: string;
      completedAt: Date;
    }[]
  >;
};

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch("http://localhost:3333/goals-summary", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `${env.VITE_USER_TOKEN}`,
    },
  });
  const data = await response.json();
  return data.summary;
}
