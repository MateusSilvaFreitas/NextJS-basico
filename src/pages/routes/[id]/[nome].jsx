import { useRouter } from "next/router"
import Link from "next/link";

export default function NomeENome(props){
    
    const router = useRouter();
    const codigo = router.query.id
    const nome = router.query.nome
    
    return(
        <>
            <h1> Rotas / {codigo} / {nome}</h1>
            <Link href={"/routes"} passHref>
                <button>Voltar</button>
            </Link>
        </>
    )
}