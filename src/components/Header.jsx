import { Link } from "react-router-dom";
import "../global.css"

export default function Header() {
    return(
        <div id="cabecalho">
            <Link class="linka" to="/">
                <div>
                <h1 id="titulo">JP CDs</h1>
                </div>
            </Link>
            
            <ul id="menu">
            <Link class="linka" to="/">
                <li><a>Home</a></li>
            </Link>
            <Link class="linka" to="/Produtos">
                <li><a>Produtos</a></li>
            </Link>
            <Link class="linka" to="/Ofertas">
                <li><a>Ofertas</a></li>
            </Link>
            </ul>
        </div>
    )
}