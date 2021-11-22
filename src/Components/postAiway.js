import React, { useState, useContext } from 'react'
import Nav from './Navbar'
import { TextField } from '@mui/material';
import axios from 'axios';


function PostAiway() {

    const [userDetails, setuserDetails] = useState({
        title: "", body: ""
    });

    const handleData = (e) => {
        setuserDetails({ ...userDetails, [e.target.name]: e.target.value })
    }

    let baseURL = "https://jsonplaceholder.typicode.com/posts"

    const submitData = (e) => {
        e.preventDefault();
        axios.post(baseURL, userDetails).then(response => console.log(response))
    }

    return (
        <>
            <Nav />
            <div className="form-container">
                <form>
                    <TextField required id="standard-basic" value={userDetails.title}
                        label="title" onChange={handleData} name="title" variant="standard" />
                    <TextField required id="standard-basic" value={userDetails.body}
                        label="body" onChange={handleData} name="body" variant="standard" />
                    <button className="button" onClick={submitData} type="submit">  Submit </button>
                </form>
            </div>
        </>
    )
}

export default PostAiway



