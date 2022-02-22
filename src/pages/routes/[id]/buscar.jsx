import { useRouter } from "next/router"
import Link from "next/link";

export default function Buscar(props){
    
    const router = useRouter();
    const codigo = router.query.id
    
    return(
        <>
            <h1> Rotas / {codigo} / buscar!!!</h1>
            <Link href={"/routes"} passHref>
                <button>Voltar</button>
            </Link>
        </>
    )
}