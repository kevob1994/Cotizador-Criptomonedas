import React, {useState, useEffect} from 'react';
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import Spinner from './components/Spinner';
import Price from './components/Price';
import axios from 'axios'

function App() {

  const [coin, setCoin] = useState("")
  const [crypto, setCrypto] = useState("")
  const [load, setLoad] = useState(false)
  const [result, setResult] = useState({})
  useEffect(() => {
    const getQuoteCryptocurrency = async () =>{
      setLoad(true)
      const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`
      const response = await axios(url);
      // console.log(response.data.DISPLAY[crypto][coin])

      setResult(response.data.DISPLAY[crypto][coin])
      setLoad(false)
      // console.log(result)
    }
    if(coin !== "" && crypto !== ""){
      getQuoteCryptocurrency()
    }
  }, [coin,crypto])

  const component = (load) ? <Spinner/> : <Price result={result}/>
  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <img src={imagen} alt="imagen criptomonedas" className="logotipo"/>
        </div>
        <div className="one-half column">
          <h1>Cotiza Criptomonedas al instante</h1>
          <Form 
            setCoin={setCoin}
            setCrypto={setCrypto}
          />
          {component}
        </div>
      </div>
    </div>
  );
}

export default App;
