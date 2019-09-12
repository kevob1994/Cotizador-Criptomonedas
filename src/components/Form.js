import React, {useEffect, useState} from 'react';
import Criptocurrency from './Criptocurrency';
import Error from './Error';
import axios from 'axios';


function Form({setCoin, setCrypto}) {

    const [criptocurrency, setCriptocurrency] = useState([])
    const [currencyQuote, setCurrencyQuote] = useState("")
    const [criptoQuote, setCriptoQuote] = useState("")
    const [ error, setError] = useState(false)

    const getTypesCryptocurrency = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD"
        const response = await axios(url)
        setCriptocurrency(response.data.Data)
        console.log(response.data.Data)
    }

    useEffect(() => {
        getTypesCryptocurrency()
    },[])

    const quoteCurrency = e => {
        e.preventDefault();
        if(currencyQuote === '' || criptoQuote === ''){
            setError(true)
            return;
        }

        setError(false)
        setCoin(currencyQuote);
        setCrypto(criptoQuote);
    }

    const component = (error) ? <Error message="Ambos campos son obligatorios"/> : null;

    return(
        <form
            onSubmit={quoteCurrency}
        >
            {component}
            <div className="row">
                <label>Elige tu moneda</label>
                <select 
                    className="u-full-width"
                    onChange={e => setCurrencyQuote(e.target.value)}
                >
                    <option value="">- Elige tu Moneda -</option>
                    <option value="USD">Dolar Estadounidense</option>
                    <option value="MXN">Peso Mexicano</option>
                    <option value="GBP">Libras</option>
                    <option value="EUR">Euro</option>
                    <option value="VEF">Bolivares fuertes</option>
                </select>
            </div>

            <div className="row">
                <label>Elige tu Criptomoneda</label>
                <select
                    className="u-full-width"
                    onChange={e => setCriptoQuote(e.target.value)}
                >
                    <option value="">- Elige tu Criptomoneda -</option>
                    {criptocurrency.map( cripto => (
                        <Criptocurrency
                            key={cripto.CoinInfo.Id}
                            cripto={cripto}
                        />
                    ))}
                </select>
            </div>
            <input className="button-primary u-full-width" type="submit" value="Calcular" />
        </form>
    )
}

export default Form