import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import { Container} from "react-bootstrap";

import Form from "../components/Form";
import axios from 'axios';
import { CustomModal } from "../components/Modal";
import Popup from "../components/Popup";
import { useForm } from "react-hook-form";

export default function Register(){
    const navigate=useNavigate();
    const {reset}=useForm();
    const [showPopup,setShowPopup]=useState(false);
    const [popupmessage,setPopupMessage]=useState('');

    const [showModal,setShowModal]=useState(false);
    const handleCloseModal=(resetForm)=>{
        setShowModal(false);
        // if(resetForm){
        reset();       // Call the resetForm function passed from register
        // }
    }
    const handlePathModal=()=>{
        navigate('/login');
    }
    const template={
        fields:[
            {
                element:'input',
                type:'text',
                name:'username',
                placeholder:'Enter Username',
                autocomplete:"username",
                registerOptions:{
                    required:{
                        value:true,
                        message:'name is required'
                    }
                }
            },
            {
                element:'input',
                type:'text',
                name:'email',
                placeholder:'Enter Email',
                autocomplete:'email',
                registerOptions:{
                    pattern:{
                        value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message:'Invalid email format'
                    }},
            },
            {
                element:'input',
                type:'password',
                name:'password',
                placeholder:'Enter Password',
                autocomplete:'current-password',
                registerOptions:{
                    minLength:{
                        value:6,
                        message:'password must be atleast 6 characters long'
                    }},
            }
        ]
    };

    //register end point
    const register=async(formData,reset)=>{
        
        try{
            const {data}=await axios.post('/register',formData);
            setShowModal(true);
            console.log('successfull',data);
        }catch(error){
            console.log(error);
            if(error.response && error.response.status===400){
                setShowPopup(true);
                setPopupMessage('Error:Email is already registered');
            }else{
                setShowPopup(true);
                setPopupMessage('Error:Failed to Register')
            }
        }
    }

    const handleClosePopup=()=>{
        setShowPopup(false);
    };

    return (
        <React.Fragment>
        <Container>
            {/* <Form template={template} onSubmit={register} buttonLabel="Register" resetForm={(reset) => { reset(); }}/> */}
            <Form 
                template={template} 
                onSubmit={(formData,reset) => register(formData, reset)} 
                buttonLabel="Register" 
            />
            {/* render popup component conditionallyy */}
            <Popup message={popupmessage} showPopup={showPopup} setShowPopup={setShowPopup} handleClose={handleClosePopup}/>
            <CustomModal
                show={showModal}
                handlePath={handlePathModal}
                // handleClose={handleCloseModal}
                handleClose={() => handleCloseModal(() => document.querySelector('form').reset())}
                title="Registration Successful"
                body="Please login to continue.."
                add="Login"/>
        </Container>
        </React.Fragment>
    );
}