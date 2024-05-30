import React from "react";
import { useNavigate } from "react-router-dom";

import '../App.css';
import { Container} from "react-bootstrap";
import Button from "../components/Button";
// import useAuth from "../hooks/useAuth";

export default function HomePage(){
    const navigate=useNavigate();
    // const {isAuthenticated,logout}=useAuth();
    // for register page
    const registerHandle=()=>{
        navigate('/register');
    }
    //for login page
    const loginHandle=()=>{
        navigate('/login');
    }

    return (
        <Container className="homepage">
        <div className="button-wrapper">
            <Button className='btn-custom' onClick={registerHandle}>
                Register
            </Button>
        
            <Button className='btn-custom' onClick={loginHandle}>
                Login
            </Button>
        </div>
        </Container>
    );
}