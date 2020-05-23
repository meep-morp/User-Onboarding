
import * as yup from "yup";

const formSchema = yup.object().shape({
    first_name: yup
        .string()
        .trim()
        .required("First Name is required"),
    last_name: yup
        .string()
        .trim()
        .required("Last Name is required"),
    email: yup
        .string()
        .trim()
        .email("Email must be a valid email address")
        .required("Your email is required"),
    password: yup
        .string()
        .trim()
        .min(5, "Your password must be at least 5 characters long"),
    accept: yup
        .boolean()
        .oneOf([true],"You must accept the terms of service"),
})


export default formSchema;