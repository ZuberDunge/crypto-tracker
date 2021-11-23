import React from 'react'
import { useNavigate } from "react-router-dom"
import "../App.css"

function Nav() {
    let back = useNavigate();
    return (
        <nav className="navbar">

            <div onClick={() => back("/")} className="back-icon"><i class="fas fa-arrow-circle-left"></i></div>
            <h2> CryptoKnight</h2>
            {/* <h4>
                <a target="_blank" rel="noreferrer" href="https://zuberdunge.tech/">Zuber Dunge <i class="fas fa-external-link-alt"></i></a></h4> */}
        </nav>
    );
}

export default Nav;