import { useContext } from "react";
import useForm from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

const formFields = {
    email: 'email',
    password: 'password',
    repeatPassword: 'repeatPassword'
}

export default function Register() {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, onChangeHandler, onSubmit } = useForm({
        [formFields.email]: '',
        [formFields.password]: '',
        [formFields.repeatPassword]: ''
    }, onRegisterSubmit)
    return (
        <section id="register-page" className="content auth">
            <form method="POST" onSubmit={onSubmit} id="register">
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Register</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        onChange={onChangeHandler}
                        value={values[formFields.email]}
                        name={formFields.email}
                        placeholder="maria@email.com"
                    />
                    <label htmlFor="pass">Password:</label>
                    <input type="password" onChange={onChangeHandler} value={values[formFields.password]} name={formFields.password} id="register-password" />
                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input type="password" onChange={onChangeHandler} value={values[formFields.repeatPassword]} name={formFields.repeatPassword} id="confirm-password" />
                    <input className="btn submit" type="submit" defaultValue="Register" />
                    <p className="field">
                        <span>
                            If you already have profile click <a href="#">here</a>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}