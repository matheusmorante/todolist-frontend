import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tasks from "../components/tasks/Tasks"; 
import userService from "../services/userService";
import { TaskProvider } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
        const checkAuth = async () => {
            const sessionUser = await userService.getSessionUser();
            setLoading(false);

            if (!sessionUser) {
                return navigate('/login');
            }

            setUser(sessionUser);
        };

        checkAuth();
    }, [navigate, setUser]);

    if (loading) {
        return <p>Loading...</p>; 
    }

    if (!user) {
        return null; 
    }

    return (
        <>
            <Header/>
            <TaskProvider>
                <Tasks />
            </TaskProvider>
            
        </>
    )
}