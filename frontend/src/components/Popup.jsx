import React from "react";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/material";
// import {useDispatch} from "react-redux";

const Popup=({message,setShowPopup,showPopup})=>{
    // const dispatch=useDispatch();
    const vertical="top";
    const horizontal="right";
    const handleClose=()=>{
        setShowPopup(false);
    };
    return (
        <Snackbar open={showPopup} autoHideDuration={4000} onClose={handleClose} anchorOrigin={{vertical,horizontal}} key={vertical+horizontal}>
            <Alert onClose={handleClose} severity={message==="Done Successfully"?"success":"error"}>{message}</Alert>
        </Snackbar>
    );
}

export default Popup;