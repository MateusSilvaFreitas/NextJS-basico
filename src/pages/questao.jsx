import { useEffect, useState } from "react"

export default function Questao(){

    const [questao, setQuestao] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:3000/api/questao/1")
        .then(resp => resp.json())
        .then(setQuestao);

    },[])
    
    function renderizarRepostas(){
        if(questao){
            return questao.respostas.map((resposta, i) => <li key={i}>{resposta}</li>)
        } 
        return false;
    }

    return(
        <div>
            <h1>Questão</h1>
            <h2>{questao?.enunciado}</h2>
            <ul>
                {renderizarRepostas()}
            </ul>
        </div>
    )
}