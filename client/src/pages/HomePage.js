import Header from "../components/Header";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../services/authService";

export default function HomePage() {
    const navigate = useNavigate();

    useEffect( async () => {
        const checkAuth = async () => {
            const userId = await authService.getUserId(); // Corrigido: agora espera a resposta
            if (!userId) {
                navigate('/login');
            }
        };

        checkAuth();
    }, [navigate])

    return (
        <Header />
    )
}