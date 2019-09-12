import React from 'react'

function Criptocurrency({cripto}){
    const { FullName, Name} = cripto.CoinInfo;

    return(
        <option value={Name}>{FullName}</option>
    )
}

export default Criptocurrency;