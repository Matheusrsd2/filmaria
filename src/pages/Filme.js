import {useParams} from 'react-router-dom';
import api from '../services/api';
import {useEffect, useState} from 'react'

export default function Filme(){
    const {id} = useParams();
    const [filme, setFilmes] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        async function loadFilme(){
            const response = await api.get(`r-api/?api=filmes/${id}`);
            setFilmes(response.data)
            setLoad(false);
            //console.log(response.data)
        }
        loadFilme();
    }, [id])

    if(load){
        return(
            <div className="filme-info">
                <h1>Carregando</h1>
            </div>
        );
    }
    return (
        <div>
            <h3>Pagina do Filme</h3>
            <article key={filme.id}>
              <h1>{filme.nome}</h1>
              <img src={filme.foto} alt={filme.nome}></img>     
            </article>

            <h3>Sinopse</h3>
            {filme.sinopse}

            <div className="botoes">
                <button onClick={() => {}}>Salvar</button>
                <button> 
                    <a href={`http://youtube.com/results?search_query=${filme.nome}`}>Trailer</a>
                </button>
            </div>
        </div>
    );
}