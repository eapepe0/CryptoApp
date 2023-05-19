import { useState , useEffect } from 'react'
import styled  from '@emotion/styled'
import ImagenCrypto from './assets/img/imagen-criptos.png'
import { Formulario , Resultado , Spinner } from './components'



//* creamos un componente como si fuera css para aplicarle las propiedades
const Heading = styled.h1`
    font-family : 'Lato', sans-serif;
    color : #fff;
    text-align : center; 
    font-weight : 700;
    margin-top: 80px;
    margin-bottom : 50px;
    font-size : 34px;
  /* dibujamos una linea azul */
  &::after{
    content : '';
    width :100px;
    height : 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`

//* le aplicamos estilos al contenedor
const Contenedor = styled.div`
  max-width : 900px; 
  margin: 0 auto;
  width: 90%;
  @media (min-width : 992px){
    display : grid;
    grid-template-columns: repeat(2 , 1fr);
    column-gap : 2rem;
  }
`

const Imagen = styled.img`
  max-width : 80%;
  width : 500px;
  margin : 100px auto 0 auto;
  display : block;
  height : 400px;
  max-height : 60%;
`
function App() {

  const [ monedas, setMonedas ] = useState({})  //* en este estado guardamos un objeto que tiene la seleccion de los select {cryptomoneda : "USDT" , moneda : "USD"}
  const [ cotizacion , setCotizacion ] = useState({}) //* en este estado guardamos un objeto con la respuesta de la API
  const [cargando, setCargando] = useState(false) //* en este estado guardamos si hicimos la peticion a la API y si estamos esperando que termine

  //* este effect se disparara cada vez que apretemos Cotizar , se llenara el estado monedas
  useEffect(() => {
      if(Object.keys(monedas).length > 0){ //* verificamos que el objeto monedas no este vacio , asi prevenimos que el efecto se dispare la 1era vez que carga la app
        const cotizarCrypto = async () =>{ //* creamos una funcion async
          setCotizacion({}) //* vaciamos el estado por si ya tenemos un resultado en pantalla
          setCargando(true) //* ponemos el
          const {moneda , cryptoMoneda} = monedas
          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoneda}&tsyms=${moneda}`
          
          const respuesta = await fetch( url )
          const resultado = await  respuesta.json()

          setCotizacion(resultado.DISPLAY[cryptoMoneda][moneda])
          setCargando(false)
        }
        cotizarCrypto()
      }
  }, [monedas])
  
  return (
    
    <Contenedor>
      <Imagen src={ImagenCrypto} alt='Fondo Cryto'/>
      <div>
        <Heading>Cotiza Cripto monedas al instante.</Heading>
        <Formulario setMonedas={ setMonedas }/>
        <div>
          {cargando && <Spinner/>}
        </div>
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion}/>}
      </div>
    </Contenedor>
  )
}

export default App
