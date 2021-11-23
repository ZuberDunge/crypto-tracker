import React, { useContext } from 'react'
import Nav from './Navbar'
import { useParams, useNavigate } from "react-router-dom";
import { CryptoContext } from './Context/CryptoContext';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import NumberFormat from 'react-number-format';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CoinView() {
    const { cryptoArray } = useContext(CryptoContext);
    const { id } = useParams()
    let back = useNavigate();
    let singleCoin = cryptoArray.find(coin => coin.id === id)

    return (
        <>
            <Nav />

            <div className="form-container">

                <div className="singlecoin-profile">
                    <div> <img style={{ width: "40px" }} src={singleCoin.image} alt={singleCoin.id} />
                        {singleCoin.name}({singleCoin.symbol.toUpperCase()})</div>

                    <div className="curr-price">    <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="lakh" prefix={'₹'} value={singleCoin.current_price} />
                        <span className="change-percent">{singleCoin.price_change_percentage_24h.toFixed(2)}% </span>
                    </div>
                </div>
                <div>
                    <Sparklines data={singleCoin.sparkline_in_7d.price} limit={160} width={400} height={80} margin={5}>
                        <SparklinesLine color="#1D3557" />
                    </Sparklines>
                </div>




                <TableContainer component={Paper}>
                    <Table sx={{ maxWidth: 1400, margin: "auto" }} aria-label="simple table">
                        <TableBody>
                            <TableRow >
                                <TableCell component="th" align="left">24Hrs Low</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={singleCoin.low_24h} /></TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">24Hrs High</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand"
                                        prefix={'₹'} value={singleCoin.high_24h} /></TableCell>
                            </TableRow>



                            <TableRow >
                                <TableCell component="th" align="left">Market Cap</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'}
                                        thousandsGroupStyle="thousand" prefix={'₹'} value={singleCoin.market_cap} /></TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Circulating Supply</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'}
                                        thousandsGroupStyle="thousand" value={singleCoin.circulating_supply} /></TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Total Supply</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand"
                                        value={singleCoin.total_supply} /></TableCell>
                            </TableRow>

                            <TableRow >
                                <TableCell component="th" align="left">Max Supply</TableCell>
                                <TableCell align="left">
                                    <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand"
                                        value={singleCoin.max_supply} /></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>



                <button className="button" onClick={() => back("/")} >  Back </button>

                <h6 className="footer">
                    <a target="_blank" rel="noreferrer" href="https://www.coingecko.com/en">CoinGecko API <i class="fas fa-external-link-alt"></i></a></h6>
            </div>
        </>

    );
}

export default CoinView