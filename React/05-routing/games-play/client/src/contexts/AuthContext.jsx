import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { dataFactory } from "../services/data"
import { useLocalStorage } from "../hooks/useLocalStorage";


export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const [auth, setAuth] = useLocalStorage('auth', {});
    const navigate = useNavigate();
    const data = dataFactory(auth.accessToken);


    async function onLoginSubmit(loginInfo) {
        try {
            const loginToken = await data.login(loginInfo);
            setAuth(loginToken);
            navigate('/catalog');
        } catch (error) {
            console.error(error.message)
        }
    }

    async function onLogout() {
        try {
            await data.logout();
            localStorage.removeItem('key');
            setAuth({});
            navigate('/');
        } catch (error) {
            console.error(error.message);
        }
    }

    async function onRegisterSubmit(registerInfo) {
        try {
            const { repeatPassword, ...registerData } = registerInfo;
            if (repeatPassword != registerData.password) {
                throw new Error('Passwords don\'t match!');
            }
            const registerdInfo = await data.register(registerData)
            const { password, _createdOn, ...registeredData } = registerdInfo;
            setAuth(registeredData);
            navigate('/catalog');
        } catch (error) {
            console.error(error.message);
        }
    }

    const context = {
        onLoginSubmit,
        onRegisterSubmit,
        onLogout,
        token: auth.accessToken,
        userEmail: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
    }
    return (
        <>
            <AuthContext.Provider value={context}>
                {children}
            </AuthContext.Provider>
        </>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}