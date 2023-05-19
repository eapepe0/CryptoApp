import styled from "@emotion/styled"

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
`
const Texto = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }
`

const Precio = styled.p`
  font-size: 26px;
  span{
    font-weight: 700;
  }
`

const Imagen = styled.img`
  display : block;
  width : 150px;
`

//* este componente esta encargado de mostrar los datos en pantalla
//* recibe los datos en un objeto llamado cotizacion
// eslint-disable-next-line react/prop-types
export const Resultado = ({cotizacion}) => {

    // eslint-disable-next-line react/prop-types
    const { PRICE , HIGHDAY , LOWDAY , CHANGEPCT24HOUR , IMAGEURL , LASTUPDATE } = cotizacion
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen token" />
        <div>
            <Precio>El precio es de : <span>{ PRICE }</span></Precio>
            <Texto>El precio mas alto del dia es de : <span>{ HIGHDAY }</span></Texto>
            <Texto>El precio mas bajo del dia es de : <span>{ LOWDAY }</span></Texto>
            <Texto>Variacion ultimas 24 horas : <span>{ CHANGEPCT24HOUR }</span></Texto>
            <Texto>Ultima actualizacion : <span>{ LASTUPDATE }</span></Texto>
        </div>
    </Contenedor>
  )
}
