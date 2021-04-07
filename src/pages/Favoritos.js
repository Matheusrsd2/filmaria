import { useEffect, useState } from "react";
import Filme from "./Filme";
import {Link} from 'react-router-dom'

export default function Favoritos(){

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {
        const minhaLista = localStorage.getItem('filmes');
        setFavoritos(JSON.parse(minhaLista) || []);

    }, [])


    return (
        <div>
            <h1>Filmes Favoritos</h1>
            <ul>
                {favoritos.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.nome}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}>Ver Detalhes</Link>                         
                            </div>
                            <img src={item.foto}></img>
                            
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}