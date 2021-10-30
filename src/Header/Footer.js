import React from "react";
// import CopyrightIcon from '@material-ui/icons/Copyright';

const Footer=()=>{
    const Year=new Date().getFullYear();
    return(
        <p className="footer">Copyright ©️ {Year}</p>
    )
}
export default Footer;