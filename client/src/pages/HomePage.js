import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tasks from "../components/tasks/Tasks";
import Perfil from "../components/perfil/Perfil";
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

            console.log('userssesion', sessionUser);

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
            <Header />
            <TaskProvider userId={user.id}>
                <Tasks />
            </TaskProvider>
            <Perfil user={user} setUser={setUser}/>
        </>
    )
}