import React, { useState, useEffect } from 'react';
import Img from '../img/pizza.jpg';
import './Navbar.css'
import Data from './Data.json';
// import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const Service = (props) => {
    const [num, setNum] = useState(0);
    const [data,setData] = useState([]);
// console.log(data);
    const getData= async ()=>{
        const res=await fetch({data});
        const actual=await res.json();
        console.log(actual.title);
    }

    // useEffect(()=>{
        
    // })
    
    const upr = () => {
        setNum(num + 1);
    }
    const dwn = () => {
        setNum(num - 1);
    }
    useEffect(() => {
        getData();
        if (num < 0) {
            alert("please Select valid Quantity");
            setNum(0);
        }
    })

    return (<>
        <h1>Service</h1>
        <div className="Service">
            <div className="services">
                <img src={Img} className="img_service" />
                <div className="Service_title">
                    <h2>Title</h2>
                    <p>Lorem ipsum,adipisicing elit. Suscipit ullam maxime laborum perspiciatis </p>
                </div>
                <div className="btns">
                    <div className="btn">
                        <p>{num}</p>

                        <div className="Btn" style={{ margin: "-33px -25px" }}>
                            <button onClick={upr} className="upr">+</button>
                            <button onClick={dwn} className="dwn">-</button>
                            {/* <p onClick={dwn}  className="dwn">🔽</p> */}
                        </div>
                    </div>
                    <div className="btn_amt">
                        <p className="price">99/-</p>
                        <p className="ttl">{num * 99}</p>
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default Service;


{/* <div className="card" style={{width: "18rem"}}>
    <img src={Img} className="card-img-top w-1px" alt="" />
    <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="/" className="btn btn-primary">Go somewhere</a>
    </div>
</div> */}