import React from 'react';
import './../../App.css';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const WhatsApp = () => {
    return (
        <div className="Whatsapp">
        <a  style={{textDecoration:"none" , color:"#B1FC00"}} href="https://api.whatsapp.com/send?phone=+923146625602">
          
          
        <WhatsAppIcon   className="wicon" style={{fontSize:"4em"}} />
        <h3  className="w" style={{fontSize:".5em"}}>WhatsApp</h3>
        </a>
        </div>
    );
}

export default WhatsApp;
