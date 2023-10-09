import { useState } from "react";

export default function useForm(initialValues) {
    const [values, setValues] = useState(initialValues);
    function onChangeHandler(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return {
        values,
        onChangeHandler
    }
}