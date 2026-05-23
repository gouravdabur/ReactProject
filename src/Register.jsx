import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./Register.css";


function Register() {
  // ✅ Initialize react-hook-form
  const { register, handleSubmit, reset } = useForm();

  let registerLogics = (userdata) => {
    // get the users from local storage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    //add the users to existing array
    users.push(userdata);

    //set the data to localstorge.
    localStorage.setItem("users", JSON.stringify(users));
    // navigate to login page
    alert("Registration successful!");
    reset();
  };

  return (
    <>
    
      <form onSubmit={handleSubmit(registerLogics)}>
        
        <input
          type="text"
          placeholder="Enter Full Name"
          {...register("name", { required: true })}
        />
        <br></br>
      
        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", { required: true })}
        />
        <br></br>
       
        <input
          type="email"
          placeholder="Enter Email Address"
          {...register("email", { required: true })}
        />
        <br></br>
        
        <input
          type="number"
          placeholder="Phone Number"
          {...register("phone", { required: true })}
        />
        <br></br>
       
        <button type="submit"> Register </button>
        
        <button type="button" onClick={() => reset()}>
          Reset
        </button>

      </form>
    </>
  );
}

export default Register;