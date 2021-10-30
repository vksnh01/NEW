import React from "react";

const Login = () => {
    return (
        <div className="login_container">
            <div className="login_containers">
                <form className="form">
                    Name: <input type="text" className="" />
                    Mobile No. <input type="text" className="" />
                    DOB<input type="text" className="" placeholder="dd/mm/yyyy"/>
                        Email: <input type="text" className=""  placeholder="Example@gmail.com"/>
                        <button type="button" class="btn btn-primary">Log In</button>
                </form>
            </div>
        </div>
    )
}
export default Login;