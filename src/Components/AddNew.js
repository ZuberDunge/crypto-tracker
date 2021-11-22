import React, { useState, useContext } from 'react'
import Nav from './Navbar'
import { StudentContext } from './Context/StudentContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { TextField } from '@mui/material';


function AddNew() {



    const { addStudent } = useContext(StudentContext);

    const [userDetails, setuserDetails] = useState({
        name: "", age: "", course: "", batch: ""
    });

    const handleData = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }
    const { name, age, course, batch } = userDetails;

    let navigate = useNavigate();
    const submitData = (e) => {
        e.preventDefault();
        addStudent(name, age, course, batch);
        navigate("/students")
    }

    return (
        <>
            <Nav />
            <div className="form-container">


                <form>
                    <TextField required id="standard-basic" value={name}
                        label="Name" onChange={handleData} name="name" variant="standard" />

                    <TextField required id="standard-basic" value={age} type="number"
                        label="Age" onChange={handleData} name="age" variant="standard" />

                    <TextField required id="standard-basic" value={course}
                        label="Course" onChange={handleData} name="course" variant="standard" />

                    <TextField required id="standard-basic" value={batch}
                        label="Batch" onChange={handleData} name="batch" variant="standard" />

                    <button className="button" onClick={submitData} type="submit">  Submit </button>
                </form>
            </div>
        </>
    )
}

export default AddNew



