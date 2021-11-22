import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StudentContext } from './Context/StudentContext';


function ListOfStudents() {
    const { listStudents, deleteStudent } = useContext(StudentContext);
    return (
        <div className="ListOfStudents">

            <TableContainer component={Paper}>
                <Table sx={{ maxWidth: 1000, margin: "auto" }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="right">Age</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="right">Course</TableCell>
                            <TableCell className="HIDE-ON-PHONE" align="right">Batch</TableCell>
                            <TableCell colspan="2" align="right"><Link to='/add-new'>
                                <span className="add-btn">Add Student</span></Link>
                            </TableCell>
                            {/* <TableCell align="right">Delete</TableCell> */}

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listStudents.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell key={item.id} component="th" scope="row"><Link to={`/students/view/${item.id}`}>{item.name}</Link></TableCell>
                                <TableCell className="HIDE-ON-PHONE" key={item.id} align="right">{item.age}</TableCell>
                                <TableCell className="HIDE-ON-PHONE" key={item.id} align="right">{item.course}</TableCell>
                                <TableCell className="HIDE-ON-PHONE" key={item.id} align="right">{item.batch}</TableCell>
                                <TableCell key={item.id} align="right"><Link to={`/students/edit/${item.id}`}><i class="fas fa-edit"></i></Link></TableCell>
                                <TableCell key={item.id} align="right">
                                    <span onClick={() => deleteStudent(item.id)} >
                                        <i class="fas fa-user-times"></i>
                                    </span></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

export default ListOfStudents;