import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
  { date: "01 Jan", tasks: 3 },
  { date: "02 Jan", tasks: 5 },
  { date: "03 Jan", tasks: 2 },
];

export default function TaskGraph() {
  return (
    <BarChart width={400} height={300} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="tasks" />
    </BarChart>
  );
}
