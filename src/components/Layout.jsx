import { Outlet } from "react-router-dom";
import { CastomLink } from './CastomLink'



export const Layout = () => {
    return (
        <>
            <header className="App-header">
                <CastomLink

                    to="/"
                >
                    Home
                </CastomLink>
                <CastomLink

                    to="/users"
                >
                    Users
                </CastomLink>
                <CastomLink

                    to="/about"
                >
                    About
                </CastomLink>
            </header>
            <Outlet className="outlet" />
            <footer className="footer">2023</footer>
        </>
    );
};
