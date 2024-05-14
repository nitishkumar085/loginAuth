import React from 'react'
import {useForm}from 'react-hook-form' 

function 
SignUp() {

  const{register,handleSubmit,formState:{errors}} = useForm()

  const onSubmit = (value)=>{
      console.log("fdfd",value)
  }
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor='Name'> Name : </label>
            <input type="text" id="Name" {...register("Name",{required:{value:true,message:"field is mandatory"}})}/>
            <span >{errors?.Name?.message}</span>
          </div>
          <div>
            <label htmlFor='email'> Email : </label>
            <input type="text" id="email" {...register("email",{required:{value:true,message:"filed is mandatory"}})}/>
            <span >{errors?.Name?.message}</span>
          </div>
          <div>
            <label htmlFor='password'> Password : </label>
            <input type="Password" id="password"  {...register("password",{required:{value:true,message:"filed is mandatory"}})}/>
          </div>
          <div>
            <label htmlFor='confirmPass'> Confirm Password : </label>
            <input type="Password" id="confirmPass"  {...register("confirmPass",{required:{value:true,message:"filed is mandatory"}})}/>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
    </div>
  )
}

export default SignUp
