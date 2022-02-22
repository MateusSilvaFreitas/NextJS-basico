const metodo = (req, res) => {
    if(req.method === "GET"){
        res.status(200).json({nome: "Mateus"})
    } else {
        res.status(200).json({nome: "Carlos"})
    }
    
}
export default metodo;