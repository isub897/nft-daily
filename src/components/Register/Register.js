import React from "react";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: ""
        }
    }

    filledInput = (result) => {
        this.setState({notFilled: result});
    }

    signinStatus = (result) => {
        this.setState({failedSignIn: result});
    }

    onUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
    }

    onConfirmChange = (event) => {
        this.setState({confirm: event.target.value})
    }

    onKeyPress = (event) => {
        if(event.code === "Enter") {
            this.onSubmit();
        }
    }

    render() {
        return(
            <article className="br3 ba b--light-silver center shadow-5">
                <main className="pa4 black-80">
                    <div className="measure center">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0 pb0">
                        <legend className="f4 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                            <input
                                onKeyDown={this.onKeyPress} 
                                onChange={this.onUsernameChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text"
                                name="username"  
                                id="username"/>
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                            <input
                                onKeyDown={this.onKeyPress} 
                                onChange={this.onEmailChange}
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" 
                                name="email-address"  
                                id="email-address"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                            <input 
                                onKeyDown={this.onKeyPress}
                                onChange={this.onPasswordChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="password"  
                                id="password"/>
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6" htmlFor="confirm">Password</label>
                            <input 
                                onKeyDown={this.onKeyPress}
                                onChange={this.onConfirmChange}
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="password" 
                                name="confirm"  
                                id="confirm"/>
                        </div>
                        </fieldset>
                        {this.state.notFilled
                            ?<div className="err-msg pb3 f6 red ">
                                Please ensure both fields are filled
                            </div>
                            :(this.state.failedSignIn
                                ?<div className="err-msg pb3 f6 red ">
                                    Please enter a valid email address and password
                                </div>
                                :<div></div>
                            )
                        }
                        <div className="">
                        <input 
                            onClick={this.onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="button" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                            <a 
                                onClick={()=> this.props.onRouteChange("signin")}
                                href="#0" 
                                className="f6 link dim black db pb1">
                                Go Back
                            </a>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;