import React, { createContext, useEffect } from 'react';
import axios from "axios";
import { Messaging } from 'react-cssfx-loading/lib';
export const CryptoContext = createContext()

const CryptoContextProvider = (props) => {

    const baseURL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=50&page=1&sparkline=true";
    const [cryptoBase, setCryptoBase] = React.useState([]);

    const [loading, setLoading] = React.useState(true)

    const getCryptoData = async () => {
        try {
            const data = await
                axios
                    .get(baseURL)
                    .then(response =>
                        setCryptoBase(response.data))

            setLoading(false)
        }
        catch (e) {
            console.log(e);
        }
    }
    const [order, setOrder] = React.useState([])

    useEffect(() => {
        getCryptoData();
    }, []);

    let cryptoArray = cryptoBase;

    const updateOrderByName = () => {
        // setCryptoBase(cryptoBase.sort((a, b) => (a.name < b.name ? -1 : 1)))
        setOrder(cryptoBase.sort((a, b) => (a.name < b.name ? -1 : 1)))
        // console.log(cryptoBase);
    }
    const updateOrderByPrice = () => {
        // const sortedOrderByPrice = cryptoBase.sort((a, b) => (a.current_price < b.current_price ? -1 : 1));
        setOrder(cryptoBase.sort((a, b) => (a.current_price < b.current_price ? -1 : 1)))
        console.log(cryptoBase);
    }
    return (
        <CryptoContext.Provider value={{ cryptoArray, updateOrderByName, updateOrderByPrice }}>
            {loading ? <div className="loader"><Messaging color="#1D3557" width="50px" height="50px" /></div> : props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoContextProvider;