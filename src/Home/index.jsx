import Header from "../components/Header"
import { Link } from "react-router-dom";

export default function Home() {
    return(
        <div>
            <Header/>
            <h1>meu site de cd</h1>  
            <Link to="/produtos">
            <h3>comprar</h3>
            </Link>
        </div>
    )
}