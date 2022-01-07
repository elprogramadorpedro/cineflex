import Header from "./Header";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

export default function ChooseSeat({request, setRequest}){
    const { idSessao } = useParams();

    const [seats, setSeats] = useState([]);

    const [Differentseat, setDifferentseat] = useState([]);

    const [inputValue, setInputValue] = useState("")
    
    const [inputValueCPF, setInputValueCPF] = useState("")

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response=>{
            setSeats(response.data);
            setDifferentseat(response.data.seats.map((seats)=>({...seats, isSelected:false})))
        })
    }, [idSessao]);

    if(seats.length === 0){
        return(
            <>
            </>
        )
    }

    function Toggle(id){
        const changeSeat = Differentseat.map((seat)=>{
            if(seat.id === id && seat.isAvailable === false){
                alert("Esse assento não está disponível")
            }if(seat.id === id && seat.isAvailable){
                seat.isSelected = !seat.isSelected
            }
            return seat
        })
        setDifferentseat(changeSeat)
    }

    function Reservation(){
        const seatSelections = [];
        const nameSelections = [];
        Differentseat.forEach((seat)=>{
            if(seat.isSelected){
                seatSelections.push(seat.id)
                nameSelections.push(seat.name)
            }
        })
        const userInformation = ({...request, ids: seatSelections, name: inputValue, cpf: inputValueCPF});
        setRequest({...request, ids: seatSelections, seat: nameSelections ,name: inputValue, cpf: inputValueCPF, weekday: seats.day.date, title:seats.movie.title, date:seats.name})
        axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/cineflex/seats/book-many`, userInformation);
    }
    
    return(
        <>
            <Header />
            <div>
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div >
             
                <div >
                    <div >
                        <img src={seats.movie.posterURL} alt={seats.movie.title}></img>
                    </div>
                    <div>
                        <p>{seats.movie.title}</p>
                        <div >
                            <p>{seats.day.weekday} - </p><p>{seats.name}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <div>
                    <p>Selecionado</p>
                </div>
                <div>
                    <p>Disponível</p>
                </div>
                <div>
                    <p>Indisponível</p>
                </div>
            </div>

            <div >
                <div>
                    <p>Nome do comprador:</p>
                    <input onChange={(x)=>{setInputValue(x.target.value)}} placeholder={"Digite seu nome"}></input>
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input onChange={(x)=>{setInputValueCPF(x.target.value)}} placeholder={"Digite seu CPF"}></input>
                </div>
            </div>
            <Link to={"/sucess"}>
                <div onClick={()=>Reservation()}>
                    <p>Reservar assento(s)</p>
                </div>
            </Link>
        </>
    )
}


