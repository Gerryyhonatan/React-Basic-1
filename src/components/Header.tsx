import { Link } from "react-router";

function HeaderCustom() {
    return (
        <div>
            <h1>Welcome to My Home</h1>
            <div style={{display :"flex", gap:"10px", justifyContent: "center"}}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>
            </div>
            <ul>
                
            </ul>
        </div>
    )
}

export default HeaderCustom;