import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as data from '../../services/data';

export default function Details() {
    const { gameId } = useParams();
    const [gameData, setGameData] = useState({});
    const [comment, setComment] = useState('');
    useEffect(() => {
        data.getGame(gameId)
            .then(data => {
                setGameData(data);
            });
    }, [gameId])

    function onChange(e) {
        setComment(e.target.value);
    }

    async function onCommentSubmit(e) {
        e.preventDefault()
        const newComment = await data.createComment(gameId, { text: comment });
        setGameData(state => {
            if (state.comments) {
                return { ...state, comments: { ...state.comments, [newComment._id]: newComment } };
            } else {
                return { ...state, comments: { [newComment._id]: newComment } };
            }
        });
        setComment('');
    }
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={gameData.imageUrl} />
                    <h1>{gameData.title}</h1>
                    <span className="levels">MaxLevel: {gameData.maxLevel}</span>
                    <p className="type">{gameData.category}</p>
                </div>
                <p className="text">
                    {gameData.summary}
                </p>
                {/* Bonus ( for Guests and Users ) */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* list all comments for current game (If any) */}
                        {gameData?.comments && Object.values(gameData.comments).map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.text}</p>
                            </li>
                        ))}

                    </ul>
                    {/* Display paragraph: If there are no comments in the database */}
                    {!gameData?.comments && <p className="no-comment">No comments.</p>}
                </div>
                {/* Edit/Delete buttons ( Only for creator of this game )  */}
                <div className="buttons">
                    <a href="#" className="button">
                        Edit
                    </a>
                    <a href="#" className="button">
                        Delete
                    </a>
                </div>
            </div>
            {/* Bonus */}
            {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form onSubmit={onCommentSubmit} className="form">
                    <textarea
                        onChange={onChange}
                        name="comment"
                        placeholder="Comment......"
                        value={comment}
                    />
                    <input
                        className="btn submit"
                        type="submit"
                        defaultValue="Add Comment"
                    />
                </form>
            </article>
        </section>
    );
}