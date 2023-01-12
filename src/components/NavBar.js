import React from "react";
import "../App.css";
import Horuspng from "../assets/img/horus.png"

const NavBar = () =>{
    return(



        <nav className="navbar navbar-expand-lg navbar-dark nb1">
          <div className="container-fluid text-center black-text">
          <a className="navbar-brand" href="index.php">
              <img src={Horuspng} alt="" width="100" height="90"/>
            </a>
           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="/development">CR&Eacute;DITO</a>
                </li> 
         
                
                <li className="nav-item">
                  <a className="nav-link active" href="/ecommerce">AHORRO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/marketing">REPORTES</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/desing">MONITOREO</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/puntoventa">ADMINISTRACI&Oacute;N</a>
                </li>
    
          
                
               
              </ul>
            </div>
          </div>
        </nav>
    


    )
}

export default NavBar