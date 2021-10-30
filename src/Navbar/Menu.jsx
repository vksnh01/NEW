import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import Search from "./Search"

const Menu = () => {
  return (<>
     <div className="container-fluid nv_bg">
      <div className="row">
        <div className="col-10-mx-auto">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><b>Food Point</b></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav ml-auto mb-2 mb-lg-0" style={{marginLeft:"auto"}}> */}
      
        {/* <li className="nav-item">
          <NavLink className="nav-link active"  exact activeClassName="actives" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  exact activeClassName="actives" to="/Service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  exact activeClassName="actives" to="/Contact">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link"  exact activeClassName="actives" to="/About">About</NavLink>
        </li>
       
      </ul> */}
    
      <div className="Main_Menu">
            <div className="menu" style={{marginLeft:"auto"}}>
                <NavLink exact activeClassName="active" to='/' style={{margin: "0px 18px"}}>Home</NavLink>
                <NavLink exact activeClassName="active" to='/service' style={{margin: "0px 18px"}}>Service</NavLink>
                {/* <NavLink exact activeClassName="active" to='/about' style={{margin: "0px 18px"}}>About Us</NavLink> */}
                <NavLink exact activeClassName="active" to='/contact' style={{margin: "0px 18px"}}>Contact Us</NavLink>
               <Search/>
                {/* <NavLink exact activeClassName="active" to='/search' style={{margin: "0px 18px"}}>Search</NavLink> */}
           </div>
        </div>
    </div>
  </div>
</nav>
        </div>
      </div>
    </div> 
    {/* <div className="Main_Menu">
            <div className="menu">
                <NavLink exact activeClassName="active" to='/' style={{margin: "0px 18px"}}>Home</NavLink>
                <NavLink exact activeClassName="active" to='/service' style={{margin: "0px 18px"}}>Service</NavLink>
                <NavLink exact activeClassName="active" to='/about' style={{margin: "0px 18px"}}>About Us</NavLink>
                <NavLink exact activeClassName="active" to='/contact' style={{margin: "0px 18px"}}>Contact Us</NavLink>
               <Search/>
                {/* <NavLink exact activeClassName="active" to='/search' style={{margin: "0px 18px"}}>Search</NavLink> 
           </div>
        </div>  */}
  </>)
}
export default Menu;