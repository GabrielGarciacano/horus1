import React, { useState } from "react";

import "../../App.css";
import Horuslog from "../../assets/img/horus.png"

const Login = () => {
    const [data, setData] = useState({
        user:"",
        password:"",
    });
    const {user,password} = data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]: [e.target.value]});
    }

    const submitHandler= e =>{
        e.preventDefault();
        console.log(data);
        
        
    }

  


    return (

        <div className='container-fluid'>
            <div className="Card Card1" >
                <form className="form-label" onSubmit={submitHandler} >
                    <div className="mb-3 bb2">

                    <img src={Horuslog} alt="" width="50" height="50"/>
                        <div className="mb-3 form-label">
                            <label  className="tit1">USUARIO</label>

                            <input type="text"
                             className="form-control inpt"
                             name="user"
                             value={user}
                             onChange={changeHandler}
                          />
                       
                        </div>
                        
                        <div className="mb-3 form-label">
                            <label  className="tit1">PASSWORD</label>
                            <input type="text" name="password"
                             className="form-control inpt"
                             value={password}
                             onChange={changeHandler}
                             />
                          

                        </div>
                 
                    </div>

                    <button className='btn btn1' type="submit ">LOGIN</button>

                </form>
            </div>
        </div>



    )
}

export default Login