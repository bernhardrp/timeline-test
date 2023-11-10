import { 
    RouteProps,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import GoogleChartPage from "./pages/GoogleChartPage";
import GoogleTimelinePage from "./pages/GoogleTimelinePage";

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