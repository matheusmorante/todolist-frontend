import Header from "../components/Header";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Tasks from "../components/tasks/Tasks";
import Perfil from "../components/Perfil";

export default function HomePage() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            const user = await authService.getUser();

            if (!user) {
                return navigate('/login');
            }

            setUser(user);

        };

        checkAuth();
    }, [navigate])



    return (
        <>
            <Header />
            <Tasks />
            <Perfil
                user={user}
            />
        </>
    )
}