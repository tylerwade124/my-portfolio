import { Link } from 'react-router-dom'

export default function Nav () {
    return (
        <div className="nav">

            <Link to="/">
                <h2>About Me</h2>
            </Link>

            <Link to="/projects">
                <h2>Projects</h2>
            </Link>

            <Link to="/resume">
                <h2>Resume</h2>
            </Link>

            <Link to="/contact">
                <h2>Contact</h2>
            </Link>  
            
        </div>
    )
}