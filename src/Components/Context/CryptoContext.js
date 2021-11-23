import React, { createContext, useEffect } from 'react';
import axios from "axios";
export const CryptoContext = createContext()

const CryptoContextProvider = (props) => {
    const [order, setOrder] = React.useState("market_cap_desc")
    const baseURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=${order}&per_page=1000&page=1&sparkline=true`;
    const [cryptoBase, setCryptoBase] = React.useState([]);



    useEffect(() => {
        axios.get(baseURL).then(response =>
            setCryptoBase(response.data)).catch(err => console.log(err))
    }, []);
    let cryptoArray = cryptoBase;

    const updateOrder = (byVolume) => {
        setOrder(byVolume)
    }

    return (
        <CryptoContext.Provider value={{ cryptoArray, updateOrder }}>
            {props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoContextProvider;