 import React from "react";
 import {useForm} from "react-hook-form";

 import Button from "./Button";
import './Form.css';
import { Container } from "react-bootstrap";
 //reusable form component

 export default function Form({onSubmit,template,buttonLabel,resetForm}){
    
    const {handleSubmit,register,formState:{errors},reset}=useForm();
    const {fields}=template;

    const handleFormSubmit = (data) => {
        onSubmit(data);
        if (resetForm) {
          resetForm(); // Call resetForm if it's defined
        } else {
          reset(); // Fallback to reset the form using useForm reset function
        }
      };
      
    const renderFields=(fields)=>{
        return fields.map((field,index)=>{
            const {element,type,placeholder,name,registerOptions,errorMessage}=field;
            const Element=element==='input'?'input':'textarea';
            return (
                <div className='entryarea' key={index}>
                    <Element
                        type={type}
                        name={name}
                        id={name}
                        placeholder={placeholder}
                        element={element}
                        required
                        {...register(name,registerOptions)}       /*register input field(onchange)*/
                        {...errorMessage}
                    />
                    {errors[name] && <span className='error-message'>{errors[name].message}</span>}
                </div>
            );
        });
    };
    // function to reset formdata
    
    return (
        <Container className="formpage">
            <div className="form-wrapper">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                {renderFields(fields)}
                <br/>
                <Button className='formbutton' type="submit">{buttonLabel}</Button>
            </form>
            </div>
        </Container>
    );
 }