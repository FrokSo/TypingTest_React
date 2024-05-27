import { Link } from "react-router-dom";

function Header() {
    return (<header>
        <div>
            <h1>Typing Speed Website</h1>
        </div>
        <div>
            <nav>
                <ul>

                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    </header>)

}

export default Header;