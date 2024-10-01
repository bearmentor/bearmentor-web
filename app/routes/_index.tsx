import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Bearmentor · Grow your career in tech with mentors" },
    {
      name: "description",
      content:
        "Struggling to learn alone? With Bearmentor, achieve your goals together with supportive community of mentors and professionals",
    },
  ];
};

export default function IndexRoute() {
  return (
    <main>
      <h1 className="text-5xl font-bold">Bearmentor</h1>
    </main>
  );
}
