import { 
    RouteProps,
    Navigate,
    Routes,
    Route,
} from "react-router-dom";
import TimelinePage from "./pages/TimelinePage";
import GoogleChartPage from "./pages/GoogleChartPage";

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