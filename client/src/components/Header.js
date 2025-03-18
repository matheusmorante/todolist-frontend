import { useState } from "react";
import Perfil from "../components/profile/Profile";
import { useAuth } from "../context/AuthContext";

export default function Header() {
    const { user } = useAuth()
    const [showProfile, setShowProfile] = useState(false)

    return (
        <header>
            <h3 onClick={() => setShowProfile(true)}>Perfil</h3>
            {showProfile &&
                <Perfil user={user} showProfile={showProfile} setShowProfile={setShowProfile} />}
        </header>
    )
}