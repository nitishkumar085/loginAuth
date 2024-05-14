import React from 'react'
import style from './login.module.css'

function Login() {
  return (
    <div className={style.loginContainer}>
      <div className={style.login}>
        <h1 className={style.h1}>LOGIN</h1>
        <form>
          <div>
            <label htmlFor='emailID'>Email : </label>
            <input type="email" id="emailID"/>
          </div>
          <div>
            <label htmlFor='password'>Password :</label>
            <input type="password" id='password'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login