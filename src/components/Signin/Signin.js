import React from "react";
import './Signin.css';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            notFilled: false,
            failedSignIn: false
        }
    }

    filledInput = (result) => {
        this.setState({notFilled: result});
    }

    signinStatus = (result) => {
        this.setState({failedSignIn: result});
    }

    onEmailChange = (event) => {
        this.stateResets();
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.stateResets();
        this.setState({password: event.target.value});
    }

    stateResets = () => {
        this.setState({
            notFilled: false,
            failedSignIn: false
        })
    }

    onSubmit = () => {
        const { email, password } = this.state;
        fetch('http://localhost:3000/login', {
            method: 'post',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(user => {
            if(user.email) {
                this.setState({
                    notFilled: false,
                    failedSignIn: false
                })
                this.props.loadUser(user);
                this.props.onSignedin(true);
            } else {
                user === "fill"
                    ? this.setState({
                        notFilled: true,
                        failedSignIn: false
                    })
                    : this.setState({
                        notFilled: false,
                        failedSignIn: true
                    })
                this.props.onSignedin(false);
            }
        })
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
                        <legend className="f4 fw6 ph0 mh0">Sign In</legend>
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
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt2" 
                            type="button" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <a 
                            onClick={()=> this.props.onRouteChange("register")}
                            href="#0" 
                            className="f6 link dim black db pb1">
                            Register
                        </a>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;