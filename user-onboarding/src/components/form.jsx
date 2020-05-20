import React from "react";

const Form = props => {
    const {
        errorMessage,
        onChangeHandler,
        onSubmit,
        formValues,
    } = props;

    return (
        <div className="formContainer">

            <div className="errors">
                <h3>{errorMessage.email}</h3>
                <h3>{errorMessage.name}</h3>
            </div>

            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                name="firstName"
                onChange={onChangeHandler}
            />

            <label htmlFor="larstName">Last Name: </label>
            <input
                type="text"
                name="lastName"
                onChange={onChangeHandler}
            />

            <label htmlFor="email">Email: </label>
            <input
                type="text"
                name="email"
                onChange={onChangeHandler}
            />

            <label htmlFor="password">Password: </label>
            <input
                type="password"
                name="password"
                onChange={onChangeHandler}
            />

            <label htmlFor="checkbox"></label>
            <h3>Terms Of Service</h3>
            <label htmlFor="accept">I accept the terms of service</label>
            <input type="checkbox" name="accept" />

            <input
                type="submit"
                name="button"
                onClick={onSubmit}
            />
        </div>
    )
}

export default Form;