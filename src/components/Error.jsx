import styled from "@emotion/styled"

const Texto = styled.div`
  background-color : #b7322c;
  color : #fff;
  padding: 15px;
  font-size: 22px;
  text-transform: uppercase;
  font-family: 'Lato',sans-serif;
  font-weight: 700;
  text-align: center;
`

//* creamos un componente con styles donde recibe un texto el cual esta como hijo del componente texto

// eslint-disable-next-line react/prop-types
export const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}
