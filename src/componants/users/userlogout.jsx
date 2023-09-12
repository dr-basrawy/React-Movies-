// import React from "react";
import { useForm } from "react-hook-form";

import "./adduser.css";

function LogoutForm() {
  const {
    register,
    handleSubmit,
  
    formState: { errors }
  } = useForm({
    defaultValues: {
      UserName: "",
      email: "",
      Password: "",
      confirmPassword: ""
    }
  });

//   console.log(watch("example")); // you can watch individual input by pass the name of the input

  return (
    <div className="fm">

    <form autoComplete="false"
      onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
        >
      <label>UserName</label>
      <input {...register("UserName",{require:true,  minLength: {
            value: 5,
            message: "min length is 5",
          }})} defaultValue="test" name="UserName"   />
      {errors.UserName && <span role="alert" style={{color:"red"}}>{errors.UserName.message} </span>}
    

<label htmlFor="email">email</label>
        <input
          id="email"
        //   required="true"
        //   aria-invalid={errors.email ? "true" : "false"}
          {...register("email", {
            // required: true,
            required:true,
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format"
            }
          })}
          type="email"
          placeholder="example@mail.com"
        />
        {errors.email && errors.email.type== "required" && <span role="alert">{errors.email.message}</span>}
        {/* {errors.email.type=="required" && <span role="alert">{errors.email.message}</span>} */}
 {console.log(errors.email)}




      <label>Password</label>
      <input type="number" name="password"
        {...register("Password", { required: true, maxLength: 8,       minLength: {
            value: 5,
            message: "min length is 5",
          } })}
        />
      {/* {errors.Password && <p>This field is required</p>} */}
      {errors.Password && errors.Password.type== "required" &&<span role="alert" style={{color:"red"}}>{errors.Password.message} </span>}
   

      <label>confirm Password</label>
      <input type="number" name="confirmPassword"
        {...register("confirmPassword", { required: true, maxLength: 8,       minLength: {
            value:5,
            message: "enter  same password",
            validate: (value) => value === password || "Passwords do not match"

          } })}
        />
      {/* {errors.Password && <p>This field is required</p>} */}
      {errors.confirmPassword && <span role="alert" style={{color:"red"}}>{errors.confirmPassword.message} </span>}

      <input type="submit"   />
    </form>
        </div>
  );
}
 export default LogoutForm

