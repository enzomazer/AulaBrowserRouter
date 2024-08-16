import { Link } from "react-router-dom";

export default function Header() {
    return(
        <div id="cabecalho">
            <Link class="linka" to="/">
                <div>
                <h1 id="titulo">JP CDs</h1>
                </div>
            </Link>
        </div>
    )
}