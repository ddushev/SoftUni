import { useState } from "react";

export default function useForm() {
    const [values, setValues] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    });
    function onChangeHandler(e) {
        setValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    return {
        values,
        onChangeHandler
    }
}