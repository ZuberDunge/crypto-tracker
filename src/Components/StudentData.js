import React, { useState, useContext } from 'react'
import Nav from './Navbar'
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { StudentContext } from './Context/StudentContext';
import { TextField } from '@mui/material';
function StudentData() {
    const { updateStudent } = useContext(StudentContext);
    const { listStudents } = useContext(StudentContext);
    const { id } = useParams()
    let back = useNavigate();

    let studentDataaa = listStudents.find(student => student.id === parseInt(id))
    const [student, setstudent] = useState([])

    const [userDetails, setuserDetails] = useState({
        id: studentDataaa.id, name: studentDataaa.name, age: studentDataaa.age, course: studentDataaa.course, batch: studentDataaa.batch
    });

    const handleData = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    function goBack() {
        back("/students")
    }


    useEffect(() => {
        console.log(studentDataaa)
        if (studentDataaa) {
            setstudent(studentDataaa)
        }
        console.log(student)
    }, [])


    const submitData = (e) => {
        const updatedStudent = userDetails
        e.preventDefault();
        updateStudent(parseInt(id), updatedStudent)
        back("/students")
    }

    return (
        <>
            <Nav />
            {<>


                {/* <form>
                    <label>Name</label>
                    <input
                        autoComplete="off"
                        defaultValue={studentDataaa.name}
                        onChange={handleData}
                        required
                        placeholder="Enter Your Name" type="Name" name="name" />

                    <label>Age</label>
                    <input
                        autoComplete="off"
                        defaultValue={studentDataaa.age}
                        onChange={handleData}
                        required
                        placeholder="Enter Your Age" type="text" name="age"
                    />

                    <label>Course</label>
                    <input
                        autoComplete="off"
                        defaultValue={studentDataaa.course}
                        onChange={handleData}
                        required
                        placeholder="Enter Your Name" type="text" name="course" />

                    <label>Batch</label>
                    <input

                        autoComplete="off"
                        defaultValue={studentDataaa.batch}
                        onChange={handleData}
                        required
                        placeholder="Enter Your batch" type="text" name="batch"
                    />


                    <button className="button" onClick={submitData} type="submit">  Submit </button>
                </form> */}
                <div className="form-container">
                    <form>
                        <TextField id="standard-basic" defaultValue={studentDataaa.name} label="Name" onChange={handleData} name="name" variant="standard" />
                        <TextField id="standard-basic" defaultValue={studentDataaa.age} label="Age" onChange={handleData} name="age" variant="standard" />
                        <TextField id="standard-basic" defaultValue={studentDataaa.course} label="Course" onChange={handleData} name="course" variant="standard" />
                        <TextField id="standard-basic" defaultValue={studentDataaa.batch}
                            onChange={handleData} label="Batch" name="batch" variant="standard" />
                        <button className="button" onClick={submitData} type="submit">  Submit </button>
                    </form></div>
            </>
            }

        </>
    );


}

export default StudentData