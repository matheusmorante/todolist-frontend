import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tasks from "../components/tasks/Tasks";
import Perfil from "../components/perfil/Perfil";
import authService from "../services/authService";
import { TaskProvider } from "../context/TaskContext";
import { useAuth } from "../context/AuthContext";

export default function HomePage() {
    const navigate = useNavigate();
    const { user, setUser } = useAuth();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            const sessionUser = await authService.getSessionUser();
            
            setUser(sessionUser);
            setLoading(false);

            if (!sessionUser) {
                navigate('/login');
            }
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
            <Header />
            <TaskProvider userId={user.id}>
                <Tasks />
            </TaskProvider>
            <Perfil user={user} />
        </>
    )
}