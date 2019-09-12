import React from 'react'

const Price = ({result}) => {
    console.log(result)
    if(Object.keys(result).length === 0) return null
    return ( 
        <div className="resultado">
            <h2>Resultado</h2>
            <p className="precio">EL precio es <span>{result.PRICE}</span></p>
            <p>Precio mas alto del dia: <span>{result.HIGHDAY}</span></p>
            <p>Variacion ultimas 24 horas: <span>{result.LOWDAY}</span></p>
            <p>Precio mas bajo del dia: <span>{result.CHANGEPCT24HOUR}</span></p>
            <p>Ultima actualizacion: <span>{result.LASTUPDATE}</span></p>
        </div>
    );
}
 
export default Price;