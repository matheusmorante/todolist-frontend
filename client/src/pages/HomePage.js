import Header from "../components/Header";
import {useState,  useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";
import Tasks from "../components/Tasks";
import Perfil from "../components/Perfil";

export default function HomePage() {
    const navigate = useNavigate();
    const [ loading, setLoading ] = useState(true);
    const [ user, setUser ] = useState('');

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const user = await authService.getUser();

                if (!user) {
                    return navigate('/login');
                } 

                setUser(user);
            } catch (error) {
                console.error('Erro ao verificar autenticação:', error);
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate])

 

    return (
        <>
            <Header />
            <Tasks/>
            <Perfil 
                user={user}
            />
        </>
    )
}