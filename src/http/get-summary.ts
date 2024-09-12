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
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJJZCI6ImVtdXBlMW94dnF1ZnNjY2JqeHdnajQyMyJ9LCJpYXQiOjE3MjYxODI5ODksImV4cCI6MTcyNjE4NjU4OX0.TyvT1N9UC6vc2T0LgLjpYRNkZSAYFViuGnUO2KS8ecE",
    },
  });
  const data = await response.json();
  return data.summary;
}
