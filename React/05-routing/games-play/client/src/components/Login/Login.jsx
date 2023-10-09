import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";


export default function Login() {
    const { onLoginSubmit } = useContext(AuthContext);
    const { values, onChangeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Sokka@gmail.com"
                        value={values.email}
                        onChange={onChangeHandler}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input type="password" id="login-password" name="password" value={values.password} onChange={onChangeHandler} />
                    <input type="submit" className="btn submit" defaultValue="Login" />
                    <p className="field">
                        <span>
                            If you don't have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}