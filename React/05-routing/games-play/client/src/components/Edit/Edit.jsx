import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import useForm from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { dataFactory } from "../../services/data"
import { UseGameContext } from "../../contexts/GameContext";

const formFields = {
    title: 'title',
    category: 'category',
    maxLevel: 'maxLevel',
    imageUrl: 'imageUrl',
    summary: 'summary'
}

export default function Edit() {
    const { onEditSubmit } = UseGameContext();
    const { gameId } = useParams();
    const { token } = useContext(AuthContext);
    const data = dataFactory(token);

    const { values, onChangeHandler, onSubmit, changeValues } = useForm({
        [formFields.title]: '',
        [formFields.category]: '',
        [formFields.maxLevel]: '',
        [formFields.imageUrl]: '',
        [formFields.summary]: '',
    }, onEditSubmit, gameId);

    useEffect(() => {
        data.getGame(gameId)
            .then(result => {
                changeValues(result);
            })
    }, [gameId])

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">
                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name={formFields.title} onChange={onChangeHandler} value={values.title} />
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name={formFields.category} onChange={onChangeHandler} value={values.category} />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name={formFields.maxLevel}
                        min={1}
                        onChange={onChangeHandler}
                        value={values.maxLevel} />
                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name={formFields.imageUrl} onChange={onChangeHandler} value={values.imageUrl} />
                    <label htmlFor="summary">Summary:</label>
                    <textarea name={formFields.summary} id="summary" onChange={onChangeHandler} value={values.summary} />
                    <input className="btn submit" type="submit" defaultValue="Edit Game" />
                </div>
            </form>
        </section>
    );
}