import Link from "next/link"
import { useRouter } from "next/router"

export default function Index(){

    const router = useRouter();

    function navegacaoSimples(url){
        router.push(url)
    }

    function navecaoComParams(){
        router.push({
            pathname: "/routes/params",
            query: {
                id:1,
                nome: "neni boy"
            }
        })
    }

    return (
        <div>
            <h1>Rotas INDEX</h1>
            <ul>
                <Link href="/routes/params?id=1&nome=Neni" passHref>
                    <li> PARAMS </li>    
                </Link>      
                <Link href={"/routes/1/buscar"} passHref>
                    <li> Buscar </li>
                </Link>  
                <Link href={"/routes/1/neni"} passHref>
                    <li> Nome </li>
                </Link>
            </ul>
                
            <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <button onClick={() => router.push("/routes/1/buscar")}> Buscar </button>
                <button onClick={() => navegacaoSimples("/routes/1/neni")}> Nome </button>
                <button onClick={navecaoComParams}> PARAMS </button>
            </div>
        </div>
    )
}