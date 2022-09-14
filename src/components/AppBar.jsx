import { Link } from "react-router-dom";


export const AppBar = () => {
    return (
        <header style={{padding: 10, borderBottom: '1px solid black', marginBottom: 12}}>
            <nav>
                <Link to="/login">Log In</Link>
            </nav>
        </header>
    );
};