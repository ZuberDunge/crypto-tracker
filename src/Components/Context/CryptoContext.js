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

    useEffect(() => {
        getCryptoData();
    }, []);

    let cryptoArray = cryptoBase;
    return (
        <CryptoContext.Provider value={{ cryptoArray }}>
            {loading ? <div className="loader"><Messaging color="#1D3557" width="50px" height="50px" /></div> : props.children}
        </CryptoContext.Provider>
    )
}

export default CryptoContextProvider;