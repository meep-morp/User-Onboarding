import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/form";
import Nav from "./components/nav"
import * as yup from "yup";
import logo from "./components/faucetBook.png";
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
    });
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log("Submitted");

    const newUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: user.password,
    };

    postNewUser(newUser);

    // window.location = '/users';
  };

  useEffect(() => {
    getUsers();
  }, [])

  return (

    <div className="App">
      <Nav
        errorMessage={errorMessage}
        onChangeHandler={onChangeHandler}
        onSubmit={onSubmit}
        formValues={formValues}
      />
      <Router>
        <Route path="/" exact>
          <div className="home">
            <Form
              errorMessage={errorMessage}
              onChangeHandler={onChangeHandler}
              onSubmit={onSubmit}
              formValues={formValues}
            />
            <div className="cta">
              <h2>World's Best Plumbers</h2>
              <img src={logo} alt=""/>
              <p>Hire the best plumbers around the world.</p>
              <div className="button">
              <Link to="/users" className="userButton">Look Around the Pipeline</Link>
              </div>
            </div>
          </div>
        </Route>
        <Route path="/users">
          {/* <div className="button">
            <Link to="/" id="homeButton">Home</Link>
          </div> */}
          <div className="userCards">
            {userList === [] || userList === undefined ?
              <h1>Users Loading...</h1> :
              userList.map((user) => (
                <Card
                  user={user}
                />
              ))}
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
