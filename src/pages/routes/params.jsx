import { useRouter } from "next/router"
import Link from "next/link";

export default function Params(){

    const router = useRouter();
    const id = router.query.id;
    const nome = router.query.nome;

    return (
        <>
            <h1>param</h1>
            <h2>{id} - {nome}</h2>
            <Link href={"/routes"} passHref>
                <button>Voltar</button>
            </Link>
        </>
    )
}