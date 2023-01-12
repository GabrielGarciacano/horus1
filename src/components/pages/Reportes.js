import React from "react";
import ID_Contract from "../reportes/ID_Contract";
import "../../App.css"

const Reportes = () => {
    return (
        <>
          <div className='container-fluid'>
                <div className="Card Card1" >
                <form className="form-label">
                    <ID_Contract />
                    <button className='btn btn1' type="submit ">Buscar</button>

                    </form>
            </div>
        </div>
        </>


          
        

    )
}

export default Reportes