import Header from "./Header";
import { Link } from "react-router-dom"

export default function Sucesso({request}){
    if(request.length === 0){
        return(
            <div>
            </div>
        )
    }
    
    return(
        <>
            <Header />
            <div className="final-order">
                <div>
                    <h3>Pedido feito com sucesso!</h3>
                </div>
                <div className={"final-infos"}>
                    <div>
                        <h4>Filme e sessão</h4>
                        <p>{request.title}</p>
                        <p>{request.weekday} - {request.date}</p>
                    </div>
                    <div>
                        <h4>Ingressos</h4>
                        {request.seat && request.seat.map((e)=>(
                            <p>{`Assento     ${e}`}</p>
                        ))}
                    </div>
                    <div>
                        <h4>Comprador</h4>
                        <p>{request.name}</p>
                        <p>{request.cpf} </p>
                    </div>
                </div>
            </div>
            <Link to={"/"}>
                <div className = "confirm-final final-orders">
                    <p>Voltar pra Home</p>
                </div>
            </Link>
        </>
    )
}

