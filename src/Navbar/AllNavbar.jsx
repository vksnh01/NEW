import React from 'react';
// import './node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.bundle'

import { Route, Switch } from 'react-router';
import Menu from './Menu';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Search from './Search';
import Login from './Login';
const AllNavbar = () => {
    return (<>
        <Menu />
        <Switch>
            <Route exact path='/' component={()=><Home name='Home' />} />
            {/* <Route path='/about' component={() => <About name="About" />} /> */}
            {/* <Route path='/about' component={About}/> */}
            <Route path='/service' component={() => <Service name="Service" />} />
            <Route path='/contact' component={() => <Contact name="Contact" />} />
            <Route path='/search' component={Search} />
            <Route path='/login' component={Login} />
        </Switch>
    </>)

}

export default AllNavbar