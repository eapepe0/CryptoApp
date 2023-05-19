import styled from "@emotion/styled";
import { useState } from "react";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
`;

//* este hook le pasamos un label y unas opciones , las cuales serian un array de objetos con valores (id , nombre) ,
//*  los agrega como options al select
//*  en el state ( estado ) , guardamos la seleccion 
//* y mapeamos cada valor dado en opciones , donde cada uno sera una opcion del Select

export const useSelectMonedas = (label, opciones) => {
  const [state, setState] = useState("");
  const selectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione : </option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))} 
        
      </Select>
    </>
  );

  return [state, selectMonedas];
  //* devolvemos el valor del select , y la funcion
};
