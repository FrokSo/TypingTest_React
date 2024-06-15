import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

interface HeaderProp {
    header: string;
    cssStyle?: string;
}

function Header({ header }: HeaderProp) {
    const navigate = useNavigate();

    return (<header>
        <div>
            <h1 className="header">{header}</h1>
        </div>
        <div>
            <nav>
                <ul className="styledList">
                    <li className="listItem" onClick={() => navigate('/')}>Home</li>
                    <li className="listItem" onClick={() => navigate('/about')}>About</li>
                </ul>
            </nav>
        </div>
    </header>)

}

export default Header;