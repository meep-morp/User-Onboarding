import React from "react";
import { Link } from "react-router-dom";

const Form = props => {
    const {
        errorMessage,
        onChangeHandler,
        onCheckedChange,
        disabled,
        onSubmit,
        user,
    } = props;

    return (
        <form className="formContainer">
            <div className="title">
                <h2>Sign Up</h2>
                <p>It's quick'n easy</p>
            </div>
            <div className="errors">
                <p>{errorMessage.email}</p>
                <p>{errorMessage.first_name}</p>
                <p>{errorMessage.last_name}</p>
                <p>{errorMessage.password}</p>
                <p>{errorMessage.accept}</p>
            </div>


            <input
                type="text"
                name="first_name"
                onChange={onChangeHandler}
                placeholder="First Name"
                value={user.first_name}
            />


            <input
                type="text"
                name="last_name"
                onChange={onChangeHandler}
                placeholder="Last Name"
                value={user.last_name}
            />


            <input
                type="text"
                name="email"
                onChange={onChangeHandler}
                placeholder="Email"
                value={user.email}
            />


            <input
                type="password"
                name="password"
                onChange={onChangeHandler}
                placeholder="Create Password"
                value={user.password}
            />
            <a href="https://www.facebook.com/terms.php" target="_blank">Terms Of Service</a>
            <div className="tos">
                <label htmlFor="accept">I accept the TOS</label>
                <input
                    id="check"
                    type="checkbox"
                    name="accept"
                    onChange={onCheckedChange}
                />
            </div>
            <button
                disabled={disabled}
                className="subButton"
                name="button"
                onClick={onSubmit}>
                Sign Up
            </button>

        </form>
    )
}

export default Form;