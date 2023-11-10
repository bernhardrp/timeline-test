import { Chart } from "react-google-charts";

export const data = [
  [
    { type: "string", id: "Task" },
    { type: "string", id: "Name" },
    { type: "date", id: "Start" },
    { type: "date", id: "End" },
  ],
  ["Planned", "Deboarding", new Date(2023, 10, 30, 9, 0, 0), new Date(2023, 10, 30, 10, 0, 0),],
  ["Planned", "Cleaning", new Date(2023, 10, 30, 10, 0, 0), new Date(2023, 10, 30, 10, 45, 0)],
  ["Planned", "Tanking", new Date(2023, 10, 30, 10, 45, 0), new Date(2023, 10, 30, 11, 0, 0)],
  ["Planned", "Inspection", new Date(2023, 10, 30, 11, 0, 0), new Date(2023, 10, 30, 12, 0, 0)],
  ["Deboarding", "", new Date(2023, 10, 30, 9, 0, 0), new Date(2023, 10, 30, 10, 0, 0)],
  ["Cleaning", "", new Date(2023, 10, 30, 10, 0, 0), new Date(2023, 10, 30, 10, 45, 0)],
  ["Tanking", "", new Date(2023, 10, 30, 10, 45, 0), new Date(2023, 10, 30, 11, 0, 0)],
  ["Inspection", "On Going...", new Date(2023, 10, 30, 11, 0, 0), new Date(2023, 10, 30, 11, 22, 0)],  
];



const GoogleTimelinePage = () => {
    const options = {
        // timeline: {
        //     colorByRowLabel: false,
        //   },
        // colors: ['gray','red', 'gray', 'gray'],
        allowHTML: true
      };
    

    return (
        <>
            <h1>Google Timeline</h1>
            <Chart chartType="Timeline" data={data} options={options} width="100%" height="400px"/>;
        </>
    )
}

export default GoogleTimelinePage;