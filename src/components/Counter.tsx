const Counter = () => {
    const handleDecrement = () => {
        alert("Decrement")
    }

    const handleIncrement = () => {
        alert("Increment")
    }

    return (
        <div style={{display : "flex", gap: "16px"}}>
            <button onClick={handleDecrement}>Kurang</button>
            <p>0</p>
            <button onClick={handleIncrement}>Tambah</button>
        </div>
    )
}

export default Counter;