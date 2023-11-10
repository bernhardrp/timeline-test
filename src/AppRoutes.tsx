import { 
    RouteProps,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import GoogleChartPage from "./pages/GoogleChartPage";
import GoogleTimelinePage from "./pages/GoogleTimelinePage";
import GanttTaskReactPage from "./pages/GanttTaskReactPage";
import GanttTaskReact2Page from "./pages/GanttTaskReact2Page";
import GoogleTimelinePage2 from "./pages/GoogleTimeline2Page";

export const routes: RouteProps[] =  [
    {
        path: '/',
        element: <Navigate to="/timeline" replace />,
        index: true
    },
    {
        path: '/timeline',
        element: <TimelinePage />,
    },
    {
        path: '/google-gantt',
        element: <GoogleChartPage />
    },
    {
        path: '/google-timeline',
        element: <GoogleTimelinePage />
    },
    {
        path: '/google-timeline2',
        element: <GoogleTimelinePage2 />
    },
    {
        path: '/gantt-react',
        element: <GanttTaskReactPage />
    },
    {
        path: '/gantt-react2',
        element: <GanttTaskReact2Page />
    }
]


const AppRoutes = () => {
    return(
        <Routes>
            {routes.map((route, index) => {
                return <Route key={index} {...route} />
            })}
        </Routes>
    ); 
}

export default AppRoutes