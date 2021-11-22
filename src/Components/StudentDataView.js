import React, { useState, useContext } from 'react'
import Nav from './Navbar'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { StudentContext } from './Context/StudentContext';
import { TextField } from '@mui/material';
function StudentDataView() {
    const { listStudents } = useContext(StudentContext);
    const { id } = useParams()
    let back = useNavigate();
    let studentDataaa = listStudents.find(student => student.id === parseInt(id))




    return (
        <>
            <Nav />

            <div className="form-container">
                <form>
                    <TextField disabled id="standard-basic" value={studentDataaa.name} label="Name" name="name" variant="standard" />
                    <TextField disabled id="standard-basic" value={studentDataaa.age} label="Age" name="age" variant="standard" />
                    <TextField disabled id="standard-basic" value={studentDataaa.course} label="Course" name="course" variant="standard" />
                    <TextField disabled id="standard-basic" value={studentDataaa.batch}
                        label="Batch" name="batch" variant="standard" />
                    <button className="button" onClick={() => back("/students")} >  Back </button>
                </form></div>
        </>

    );
}

export default StudentDataView