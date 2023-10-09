import { useState } from "react";

export default function useForm(initialValues, onSubmitHandler) {
    const [values, setValues] = useState(initialValues);
    function onChangeHandler(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    function onSubmit(e) {
        e.preventDefault();
        onSubmitHandler(values);
    }

    return {
        values,
        onChangeHandler,
        onSubmit
    }
}