import React, { createContext, useEffect } from 'react';
import axios from "axios";
export const CryptoContext = createContext()

const CryptoContextProvider = (props) => {

    const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false";
    const [cryptoBase, setCryptoBase] = React.useState([]);



    useEffect(() => {
        axios.get(baseURL).then(response =>
            setCryptoBase(response.data))
    }, []);
    let cryptoArray = cryptoBase;



    return (
        <CryptoContext.Provider value={{ cryptoArray }}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoContextProvider;