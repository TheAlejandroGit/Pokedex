import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
import '../styles/App.css';

const Login = () => {
    const[userName, setUserName]= useState("");
    const dispatch=useDispatch();
    const navigate= useNavigate();

    const submit=e=>{
        e.preventDefault();
        console.log(userName)
        dispatch({
            type:"GET_USERNAME",
            payload: userName
        });
        setUserName("");
        navigate("/pokedex");
    }
    return (
        <>
        
        <div className="presentation">
        <div className='hi'>
            <div className='img-pdx'></div>
            <h1 className='welcome'>Welcome Trainer!</h1>
        </div>
        <div className='log'>
           <form action="" onSubmit={submit}>

               <input type="text" value={userName} onChange={e=>setUserName(e.target.value)} placeholder="Wha is your name?" required/>
               <button>Submit</button>
           </form>
        </div>

        </div>
        <footer>
            <div className='red'></div>
            <div className='black'></div>
           
        </footer> 
        </>
    );
};

export default Login;