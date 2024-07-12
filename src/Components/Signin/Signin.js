import React from "react";
import './Signin.css'

const Signin = ({ onRouteChange }) => {
    return (
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
          <main className="pa4 black-80">
            <form className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                <div className="mt3">
                  <input className="forms" type="email" name="email-address" placeholder= "Email" id="email-address" />
                </div>
                <div className="mv3">
                  <input className="forms" type="password" name="password" placeholder="Password" id="password" />
                </div>
              </fieldset>
              <div className="">
                <input 
                onClick={ () => onRouteChange('home') }
                className="btnlogin" 
                type="submit" 
                value="Sign in" />
              </div>
              <div className="lh-copy mt3 pointer">
                <p onClick={ () => onRouteChange('register') } className="f6 link dim black db">Register</p>
              </div>
            </form>
          </main>
        </article>
    )
}

export default Signin;