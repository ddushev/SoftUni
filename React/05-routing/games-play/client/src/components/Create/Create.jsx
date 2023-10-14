import { UseGameContext } from "../../contexts/GameContext";
import useForm from "../../hooks/useForm";

export default function Create() {
    const { onCreateSubmit } = UseGameContext();
    const { values, onChangeHandler, onSubmit } = useForm({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: ''
    }, onCreateSubmit);
    return (
        <section id="create-page" className="auth">
            <form onSubmit={onSubmit} id="create">
                <div className="container">
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        onChange={onChangeHandler}
                        value={values.title}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter game title..."
                    />
                    <label htmlFor="category">Category:</label>
                    <input
                        onChange={onChangeHandler}
                        value={values.category}
                        type="text"
                        id="category"
                        name="category"
                        placeholder="Enter game category..."
                    />
                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        onChange={onChangeHandler}
                        value={values.maxLevel}
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min={1}
                        placeholder={1}
                    />
                    <label htmlFor="game-img">Image:</label>
                    <input
                        onChange={onChangeHandler}
                        value={values.imageUrl}
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        placeholder="Upload a photo..."
                    />
                    <label htmlFor="summary">Summary:</label>
                    <textarea onChange={onChangeHandler} value={values.summary} name="summary" id="summary" />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Create Game"
                    />
                </div>
            </form>
        </section>
    );
}