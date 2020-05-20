import React, { useState } from "react";
import Form from "./components/form";
import * as yup from "yup";
import axios from "axios";
import "./App.css";
import formSchema from "./components/formSchema";
import Card from "./components/card";
import { useEffect } from "react";

const initialFormValues = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function App() {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState({});
  const [formValues, setFormValues] = useState({});
  const [errorMessage, setErrorMessage] = useState({});

  const getUsers = () => {
    axios
      .get(`https://reqres.in/api/users`)
      .then(response => {
        setUserList(response.data.data);
      })
      .catch(error => {
        console.log("Get Error! \n" + error);
      });
  };

  const postNewUser = newUser => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then(response => {
        setUserList([response.data, ...userList]);
      })
      .catch(error => {
        console.log("Uh oh! \n" + error);
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const onChangeHandler = event => {
    const name = event.target.name
    const value = event.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(response => {
        setErrorMessage({
          ...errorMessage,
          [name]: "",
        });
      })
      .catch(
        error => {
          setErrorMessage({
            ...errorMessage,
            [name]: error.errors[0],
          });
        })

    setUser({
      ...user,
      [name]: value,
      avatar: "user-onboarding/src/images/newUser.png",
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("Submitted");

    const newUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      avatar: "user-onboarding/src/images/newUser.png",
      email: user.email,
      password: user.password,
    };

    postNewUser(newUser);
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div className="App">
      <Form
        errorMessage={errorMessage}
        onChangeHandler={onChangeHandler}
        onSubmit={onSubmit}
        formValues={formValues}
      />

      <div className="userCard">
        {userList === [] || userList === undefined ? <h1>Users Loading...</h1> :
          userList.map((user) => (
            <Card
              user={user}
            />
          ))}

      </div>
    </div>
  );
}

export default App;
