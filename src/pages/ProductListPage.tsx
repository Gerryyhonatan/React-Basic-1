import { useSearchParams } from "react-router"

const ProductListPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const handleSortValueChange = (sortValue : string) => {
        searchParams.set("sort", sortValue)
        setSearchParams(searchParams)
    }

    return (
        <div>
            <h1>Product List Page</h1>
            <ul>
                <li>Sort : {searchParams.get("sort")}</li>
                <li>Name : {searchParams.get("name")}</li>
            </ul>
            <button onClick={() => handleSortValueChange("price-asc")}>Sort price asc</button>
        </div>
    )
}

export default ProductListPage