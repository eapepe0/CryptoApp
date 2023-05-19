import { useEffect , useState } from "react"
import styled from "@emotion/styled"

import { useSelectMonedas } from "../hooks/useSelectMonedas"
import { monedas } from '../data/monedas'
import { Error } from "./Error"


const InputSubmit = styled.input`
  background-color : #9497FF;
  border : none ;
  width : 100%;
  padding : 10px;
  color : #fff;
  font-weight : 700;
  text-transform : uppercase;
  font-size: 20px;
  border-radius : 5px;
  transition : background-color .3s ease;
  margin-top : 30px ;
  &:hover{
    backgroud-color : #7a7dfe;
    cursor : pointer;
  }

`

// eslint-disable-next-line react/prop-types
export const Formulario = ({ setMonedas }) => {

    const [ cryptos, setCryptos ] = useState([]);
    //* extraemos del hook , la moneda que elegimos del SelectMonedas   , le mandamos como parametro el label  y un array de objectos con las opciones y monedas que mostrara
    const [ moneda, SelectMonedas ] = useSelectMonedas("Elige tu moneda", monedas); //* moneda = estado donde se guarda lo que elige el usuario , selectMonedas (func que hace el Componente)
    const [ cryptoMoneda, SelectCrytoMonedas ] = useSelectMonedas("Elige tu crypto", cryptos);

    const [ error , setError ] = useState(false) //* estado que nos dice si hubo algun error en alguno de los campo del form

    useEffect(() => {
        //* creamos la funcion asyncrona la cual va a esperar que retorne el resultado
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD'; //*  url a consultar
            const respuesta = await fetch(url) //* guardamos en respuesta , lo que nos devuelve el fetch que consulta la url
            const resultado = await respuesta.json() //* extraemos el json que nos da la respuesta

            //* mapeamos del resultado
            const arrayCryptos = resultado.Data.map( token => {
                //*   creamos un objeto que tiene su id y nombre
                const objeto = {
                    id: token.CoinInfo.Name,
                    nombre : token.CoinInfo.FullName
                }
                return objeto; //* debemos devolver algo al ser el map mas grande que una linea 
            })
            setCryptos(arrayCryptos); //* ponemos el array de objetos en el estado cryptos
        }
        consultarAPI(); //* llamamos a la funcion
    }, [])

    //* si hacemos click en cotizar
    const handleSubmit = e =>{
        e.preventDefault(); //* prevenimos el envio
        if([ moneda , cryptoMoneda ].includes("")){ //*  si alguno de los campos esta vacio
            setError(true) //*  ponemos error en true y paramos la ejecucion
            return
        }
        setError(false) //* reseteamos error por si ya habia algun error en pantalla
        setMonedas({ moneda , cryptoMoneda}) //* ponemos los valores del select en el estado monedas
    }

    return (
        <>  {/*  si el estado error es true , mostramos el componente */}
            {error && <Error><p>Todos los campos son obligatorios</p></Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas />
                <SelectCrytoMonedas />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}
