import React, { useEffect, useState } from "react";

function ControlledInput() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // password length - 8
    useEffect(() => {
        console.log("checking");
        if (password.length <= 8) {
            setError("Password length should be greater then 8");
        } else {
            setError("");
        }
    }, [password]);

    return (
        <form className="form">
            <div className="form-group">
                <label>Username: </label>
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Password: </label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className="btn">Submit</button>
            <div>{error}</div>
        </form>
    );
}

export default ControlledInput;
