import React from "react";
import ReactDOM from 'react-dom';
import './Backdrop.css';

const Backdrop=({show,onClick})=>{
    return ReactDOM.createPortal(
        <div className="backdrop" onClick={onClick}></div>,
        document.getElementById('backdrop')
    );
};

export default Backdrop;