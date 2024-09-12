type PendingGoalsResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequency: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch("http://localhost:3333/pending-goals", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6ImVtdXBlMW94dnF1ZnNjY2JqeHdnajQyMyJ9LCJpYXQiOjE3MjYxODI5ODksImV4cCI6MTcyNjE4NjU4OX0.TyvT1N9UC6vc2T0LgLjpYRNkZSAYFViuGnUO2KS8ecE",
    },
  });

  const data = await response.json();
  return data;
}
