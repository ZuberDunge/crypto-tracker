import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import { StyledInputBase, SearchIconWrapper, Search } from '../SearchAppBar';
import { CryptoContext } from './Context/CryptoContext';
import NumberFormat from 'react-number-format';
import { Sparklines, SparklinesLine } from 'react-sparklines';
function Main() {

    const { cryptoArray } = React.useContext(CryptoContext);
    const [search, setSearch] = React.useState("")

    const searchFunction = (e) => {
        setSearch(e.target.value)
    }

    const searchResult = cryptoArray.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return (<>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        CryptoKnight
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={search}
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={searchFunction}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>

        <div className="list">
            <TableContainer component={Paper}>
                <Table sx={{ margin: "auto" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell  >Coin

                            </TableCell>
                            <TableCell align="left">PRICE</TableCell>
                            <TableCell className="hide-on-tab" align="left">1D Low</TableCell>
                            <TableCell className="hide-on-tab" align="left">1D High</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">1D Change</TableCell>
                            <TableCell className="hide-on-800" align="left">
                                <div>Market CAP</div></TableCell>
                            <TableCell className="HIDE-ON-PHONE width-30-tab" align="left">Chart 7D</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchResult.map((item) => (<TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"><img style={{ width: "35px" }} src={item.image} alt={item.id} /></TableCell>
                            <TableCell component="th" scope="row"><Link to={`/coin/view/${item.id}`}>{item.name}</Link></TableCell>
                            <TableCell align="left"><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={item.current_price} /></TableCell>
                            <TableCell className="hide-on-tab" align="left">
                                <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'}
                                    value={item.low_24h ? item.low_24h : "N/A"} /></TableCell>
                            <TableCell className="hide-on-tab" align="left"><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={item.high_24h} /></TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">{item.price_change_percentage_24h ? item.price_change_percentage_24h.toFixed(2) : null}%</TableCell>
                            <TableCell className="hide-on-800" align="left"><NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="thousand" prefix={'₹'} value={item.market_cap} /></TableCell>

                            <TableCell className="HIDE-ON-PHONE width-30-tab" align="left">
                                <Sparklines data={item.sparkline_in_7d.price} limit={160} width={400} height={100} margin={5}>
                                    <SparklinesLine color="#1D3557" />
                                </Sparklines>
                            </TableCell>
                        </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>
    )
}

export default Main