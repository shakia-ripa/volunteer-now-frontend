import { createContext, useEffect, useState } from "react"
import AuthService from "../Utils/auth.utils";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const decodedUser = AuthService.getCurrentUser();
        setUser(decodedUser);
         setLoading(false); 
    }, [])

    const authInfo = { user, setUser, loading }

    if (loading) {
    return <div>Loading...</div>; // Show spinner while loading
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider;

