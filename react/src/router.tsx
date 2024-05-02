import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import GuestLayout from "./components/GuestLayout";
import SignUp from "./pages/SignuUp";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { path: "/chat", element: <Chat /> },
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/profile", element: <Profile /> },
            { path: "/", element: <Navigate to="/chat" /> },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            { path: "/signup", element: <SignUp /> },
            { path: "/login", element: <Login /> },
        ],
    },
    { path: "*", element: <NotFound /> },
]);
export default router;
