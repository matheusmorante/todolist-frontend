
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Tasks from "../components/tasks/Tasks";
import Perfil from "../components/perfil/Perfil";
import { useAuth } from "../context/AuthContext";
import { TaskProvider } from "../context/TaskContext";


export default function HomePage() {
    const navigate = useNavigate();
    const {user, loading} =  useAuth();

    useEffect(() => {
        if (!loading && !user) {
            navigate('/login');
        }
    }, [user, loading, navigate]);

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