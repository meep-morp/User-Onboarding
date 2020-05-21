import React from "react";


const Nav = props => {
const {onSubmit} = props

    return (
        <nav className="nav">
                <h1 className="logo" onClick={event => {
                    event.preventDefault();
                    window.location = '/';
                }}>faucetbook</h1>
                <div>
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" />
                    <label htmlFor="password">Password</label>
                    <input name="password" type="password " />
                    <input 
                    type="submit" 
                    value="Login" 
                    className="logButton" 
                    onClick={onSubmit}
                    />
                </div>
        </nav>
    )
}

export default Nav;