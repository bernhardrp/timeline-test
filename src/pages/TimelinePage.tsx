import { Button, Flex, Progress } from "@mantine/core";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
export default function TimelinePage() {
    const navigate = useNavigate();

    return(
        <>
            <Flex gap={5}>
                <Button onClick={() => navigate('/google-gantt')}>
                    Google Gantt
                </Button>
                <Button onClick={() => navigate('/google-timeline')}>
                    Google Timeline
                </Button>
                <Button onClick={() => navigate('/gantt-react')}>
                    Gantt Task React
                </Button>
                <Button onClick={() => navigate('/gantt-react-2')}>
                    Gantt Task React 2
                </Button>
            </Flex>
            <h1 style={{fontSize: '2em'}}>Mantine Progress Bar</h1>
            <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                <li>
                    <Flex direction={"row"} justify={"flex-start"} align={"center"}>
                        <h2 style={{width: 150, textAlign: "start"}}>Planned</h2>
                        <div style={{minWidth: "100vh"}}>
                            <ProgressBar/>
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"}>
                        <h2 style={{width: 150, textAlign: "start"}}>Deboarding</h2>
                        <div style={{width: '35vh'}}>
                            <Progress size="25" value={100} />
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"}>
                        <h2 style={{width: 150, textAlign: "start"}}>Cleaning</h2>
                        <div style={{width: '25vh', marginLeft: '35vh'}}>
                            <Progress size="25" value={100} />
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"}>
                        <h2 style={{width: 150, textAlign: "start"}}>Tanking</h2>
                        <div style={{width: '9vh', marginLeft: '60vh'}}>
                            <Progress size="25" value={100} animated />
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"}>
                        <h2 style={{width: 150, textAlign: "start"}}>Inspection</h2>
                        {/* <div style={{width: '35vh'}}>
                            <Progress size="25" value={100} animated />
                        </div> */}
                    </Flex>
                </li>
            </ul>

        </>
    );
}