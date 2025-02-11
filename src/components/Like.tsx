import { useLike } from "../hooks/useLike";

const Like = () => {
    const {status, handleLike} = useLike()

    return (
        <div>
            <button onClick={handleLike}>Like</button>
            <p>{status}</p>
        </div>
    )
}

export default Like