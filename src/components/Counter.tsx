import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return (
        <div style={{display : "flex", gap: "16px"}}>
            <button onClick={handleDecrement}>Kurang</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>Tambah</button>
        </div>
    )
}

export default Counter;