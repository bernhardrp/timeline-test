import { Button, Flex, Progress } from "@mantine/core";
import { ProgressBar } from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";
export default function TimelinePage() {
    const navigate = useNavigate();

    //static code only, just for testing mantine progress bar
    return(
        <>
            <Flex gap={5}>
                <Button onClick={() => navigate('/google-gantt')}>
                    Google Gantt
                </Button>
                <Button onClick={() => navigate('/google-timeline')}>
                    Google Timeline
                </Button>
                <Button onClick={() => navigate('/google-timeline2')}>
                    Google Timeline 2
                </Button>
                <Button onClick={() => navigate('/gantt-react')}>
                    Gantt Task React
                </Button>
                <Button onClick={() => navigate('/gantt-react2')}>
                    Gantt Task React 2
                </Button>
                <Button onClick={() => navigate('/custom-timeline')}>
                    Custom Timeline
                </Button>
            </Flex>
            <h1 style={{fontSize: '2em'}}>Mantine Progress Bar</h1>
            <ul style={{listStyleType: "none", padding: 0, margin: 0}}>
                <li>
                    <Flex direction={"row"} justify={"flex-start"} align={"center"} style={{backgroundColor: "#FFFFF0"}}>
                        <h3 style={{width: 150, textAlign: "start", margin:5 }}>Planned</h3>
                        <div style={{width: "150vh"}}>
                            <ProgressBar/>
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"} style={{backgroundColor: "#DCDCDC"}}>
                        <p style={{width: 150, textAlign: "start", margin:5}}>Deboarding</p>
                        <div style={{width: '150vh', display: "grid"}}>
                            <div style={{width: '35%'}}>
                                <Progress size="25" value={100} />
                            </div>
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"} style={{backgroundColor: "#FFFFF0"}}>
                        <p style={{width: 150, textAlign: "start",  margin:5}}>Cleaning</p>
                        <div style={{width: '150vh', display: "grid"}}>
                            <div style={{width: '25%', marginLeft: '35%'}}>
                                <Progress size="25" value={100} />
                            </div>
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"} style={{backgroundColor: "#DCDCDC"}}>
                        <p style={{width: 150, textAlign: "start",  margin:5}}>Tanking</p>
                        <div style={{width: '150vh', display: "grid"}}>
                            <div style={{width: '9%', marginLeft: '60%'}}>
                                <Progress size="25" value={100} animated/>
                            </div>
                        </div>
                    </Flex>
                </li>
                <li>
                    <Flex align={"center"} style={{backgroundColor: "#FFFFF0"}}>
                        <p style={{width: 150, textAlign: "start",  margin:5}}>Inspection</p>
                        {/* <div style={{width: '35vh'}}>
                            <Progress size="25" value={100} animated />
                        </div> */}
                    </Flex>
                </li>
            </ul>
        </>
    );
}