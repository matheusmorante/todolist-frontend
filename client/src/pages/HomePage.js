import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Tasks from "../components/tasks/Tasks";
import Perfil from "../components/Perfil";
import { TaskProvider } from "../context/TaskContext";


export default function HomePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState({});

    useEffect(() => {
        const checkAuth = async () => {
            const user = await authService.getSessionUser();
            if (!user) {
                return navigate('/login');
            }
            setUser(user);
            setLoading(false);
        };

        checkAuth();
    }, [navigate])



    return (
        <>
            <Header />
            <TaskProvider userId={user.id}>
                <Tasks/>
            </TaskProvider>
            <Perfil user={user}/>
        </>
    )
}