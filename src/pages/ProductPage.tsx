import { Link } from "react-router"

const ProductPage = () => {
    return (
        <div>
            <h1>Ini Halaman Product Page</h1>
            <div>
                <h3>List Product</h3>
                <ul style={{display: "flex", flexDirection : "column", gap : "20px"}}>
                    <Link to="/productDetail">Product 1</Link>
                    <Link to="/productDetail">Product 2</Link>
                    <Link to="/productDetail">Product 3</Link>
                    <Link to="/productDetail">Product 4</Link>
                    <Link to="/productDetail">Product 5</Link>
                </ul>
            </div>

        </div>
    )
}

export default ProductPage