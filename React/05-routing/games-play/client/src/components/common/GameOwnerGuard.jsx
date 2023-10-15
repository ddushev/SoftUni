import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { UseGameContext } from "../../contexts/GameContext";

export default function GameOwnerGuard() {
    const { gameId } = useParams();
    const { userId } = useAuthContext();
    const { getGameFromState } = UseGameContext();
    const selectedGame = getGameFromState(gameId);

    if (selectedGame?._ownerId != userId) {
        return <Navigate to={`/details/${gameId}`} />
    }

    return <Outlet />
}