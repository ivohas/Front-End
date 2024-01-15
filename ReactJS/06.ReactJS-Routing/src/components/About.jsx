import { Link, Outlet } from "react-router-dom";


const About = () => {
    return (
        <>
            <h2>About Page</h2>
            <nav>
                <Link to="us">About Us</Link>
                <Link to="mission">Mission</Link>
                <Link to="values">Our Values</Link>
            </nav>

            <Outlet />
        </>
    );
}

export default About;
