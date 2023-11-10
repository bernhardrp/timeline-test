import { Chart } from "react-google-charts";

const columns = [
  { type: "string", label: "Task ID" },
  { type: "string", label: "Task Name" },
  { type: "string", label: "Resource" },
  { type: "date", label: "Start Date" },
  { type: "date", label: "End Date" },
  { type: "number", label: "Duration" },
  { type: "number", label: "Percent Complete" },
  { type: "string", label: "Dependencies" },
];

const rows = [
  ["task1", "Deboarding", null, new Date(2023, 2, 11, 11, 11, 11), null, 70 * 60 * 1000, 100, null],
  ["task2", "Cleaning", null, null, null, 10 * 60 * 1000, 100, "task1"],
  ["task3", "Tanking", null, null, null, 45 * 60 * 1000, 75, "task2"],
  ["task4", "Inspection", null, null, null, 10 * 60 * 1000, 0, "task3"],
];

export const data = [columns, ...rows];

export const options = {
  height: 275,
  gantt: {
    criticalPathEnabled: false,
    defaultStartDateMillis: new Date(2015, 3, 28),
  },
};

const GoogleChartPage = () => {
  return (
    <>
        <h1 style={{fontSize: '2em'}}>Google Gantt</h1>
        <Chart
            chartType="Gantt"
            width="100%"
            height="50%"
            data={data}
            options={options}
        />
    </>
  );
}

export default GoogleChartPage;