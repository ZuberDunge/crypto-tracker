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

function Aiway() {

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
                <Table sx={{ maxWidth: 1400, margin: "auto" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>COIN</TableCell>
                            <TableCell align="left">PRICE</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">24HRS LOW</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">24HRS HIGH</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">24HRS CHANGE</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">MArket CAP</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {searchResult.map((item) => (<TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row"><img style={{ width: "35px" }} src={item.image} alt={item.id} /></TableCell>
                            <TableCell component="th" scope="row"><Link to={`/coin/view/${item.id}`}>{item.name}</Link></TableCell>
                            <TableCell align="left">${item.current_price}</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">${item.low_24h}</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">${item.high_24h}</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">{item.price_change_percentage_24h}%</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="left">${item.market_cap}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    </>
    )
}

export default Aiway