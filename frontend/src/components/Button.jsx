import React from "react";
import { Link } from "react-router-dom";

import './Button.css';

const Button=props=>{
    if(props.href){
        return (
            <a className={`button ${props.className}`} href={props.href}>
                {props.children}
            </a>
        );
    }
    if(props.to){
        return (
            <Link className={`button ${props.className}`} to={props.to}>
                {props.children}
            </Link>
        );
    }
    return (
        <button className={`button ${props.className}`} onClick={props.onClick}>
            {props.children}
        </button>
    );
};

export default Button;