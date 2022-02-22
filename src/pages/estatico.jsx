export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico(props){
    return (
        <div>
            <h1>Numero aleatório: {props.numero}</h1>
        </div>
    )
}