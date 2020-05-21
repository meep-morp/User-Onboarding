import React from "react";
import { Link } from "react-router-dom";

const Form = props => {
    const {
        errorMessage,
        onChangeHandler,
        onSubmit,
        formValues,
    } = props;

    return (
        <form className="formContainer">
            <div className="title">
                <h2>Sign Up</h2>
                <p>It's quick'n easy</p>
            </div>
            <div className="errors">
                <h3>{errorMessage.email}</h3>
                <h3>{errorMessage.name}</h3>
            </div>


            <input
                type="text"
                name="first_name"
                onChange={onChangeHandler}
                placeholder="First Name"
            />


            <input
                type="text"
                name="last_name"
                onChange={onChangeHandler}
                placeholder="Last Name"
            />


            <input
                type="text"
                name="email"
                onChange={onChangeHandler}
                placeholder="Email"
            />


            <input
                type="password"
                name="password"
                onChange={onChangeHandler}
                placeholder="Create Password"
            />
            <h3>Terms Of Service</h3>
            <div className="tos">
                <label htmlFor="checkbox"></label>
                <label htmlFor="accept">I accept the terms of service</label>
                <input id="check" type="checkbox" name="accept" />
            </div>
            <Link to="/users"
                className="subButton"
                name="button"
                onClick={onSubmit}>
                Sign Up
            </Link>

        </form>
    )
}

export default Form;