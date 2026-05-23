import React from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';



 function Login() {
    let { register, handleSubmit, reset } = useForm();

    let navigate = useNavigate();

    let loginLogics = (logindata) => {
        const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
        const validUser = registeredUsers.find(user =>
        user.email === logindata.email && 
        user.password === logindata.password
        );
        if (validUser) {
            // Store the logged-in user's information in localStorage
            localStorage.setItem("loggedInUser", JSON.stringify(validUser));
            alert("Login successful!");
            navigate("/home");
            //refresh the page to update the login state
            window.location.reload();
        } 
        else {
            alert("Invalid email or password. Please try again.");
        }
    }   
  return (
    <>
    <form onSubmit={handleSubmit(loginLogics)}>
        <input type="email" 
        placeholder='Enter your email' 
        {...register("email", { required: true })} 
        />
        <br></br>
        <input type="password" 
        placeholder='Enter your password' 
        {...register("password", { required: true })} 
        />
        <br></br>
        <button type="submit">Login</button>
    </form>     
    </>
    );
}
export default Login;

       