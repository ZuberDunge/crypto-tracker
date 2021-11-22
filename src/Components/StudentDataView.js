import React, { useContext } from 'react'
import Nav from './Navbar'
import { useParams, useNavigate } from "react-router-dom";
import { CryptoContext } from './Context/CryptoContext';
import { TextField } from '@mui/material';

function StudentDataView() {
    const { cryptoArray } = useContext(CryptoContext);
    const { id } = useParams()
    let back = useNavigate();
    let singleCoin = cryptoArray.find(coin => coin.id === id)

    return (
        <>
            <Nav />

            <div className="form-container">
                <form>
                    <img style={{ width: "50px" }} src={singleCoin.image} alt={singleCoin.id} />
                    <TextField disabled id="standard-basic" value={singleCoin.name} label="Name" name="name" variant="standard" />
                    <TextField disabled id="standard-basic" value={singleCoin.low_24h} label="low_24h" name="low_24h" variant="standard" />
                    <TextField disabled id="standard-basic" value={singleCoin.high_24h} label="high_24" name="high_24" variant="standard" />
                    <TextField disabled id="standard-basic" value={singleCoin.price_change_percentage_24h} label="change" name="change" variant="standard" />
                    <TextField disabled id="standard-basic" value={singleCoin.market_cap} label="market_cap" name="market_cap" variant="standard" />

                    <button className="button" onClick={() => back("/")} >  Back </button>
                </form></div>
        </>

    );
}

export default StudentDataView