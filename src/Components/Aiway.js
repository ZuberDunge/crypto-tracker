import React from 'react'
import Nav from './Navbar'
import axios from "axios";

import ControlledInput from './Hooks'
function Home() {
    const baseURL = "http://gateway.marvel.com/v1/public/characters?nameStartsWith=thor&ts=1&apikey=344d40df0c8cc373141c1dc321fae9cf&hash=bd0722d5750b6362d5ba0212ca36726b";
    const [post, setPost] = React.useState("");
    var postData;
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data.data.results[0]);
        });
    }, []);



    return (
        <>
            <Nav />
            {/* <ControlledInput /> */}
            <div>
                <h1>{post.description}</h1>
                <img src={post.thumbnail.path + ".jpg"} />


            </div>

        </>
    )
}

export default Home