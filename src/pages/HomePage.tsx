import { Link } from "react-router";

const HomePage = () => {
    return (
        <div>
            <h1>Ini adalah Home Page</h1>
            <p>Setujui Persetujuan ini</p>
            <Link to="/terms">Menuju Halaman</Link>
        </div>
    )
}

export default HomePage;