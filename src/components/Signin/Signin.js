import React from "react";
import './Signin.css';

class Signin extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    onEmailChange = (event) => {
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value});
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
                this.props.loadUser(user);
                this.props.onSignedin(true);
            } else {
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
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
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
                        <div className="">
                        <input 
                            onClick={this.onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                            type="button" 
                            value="Sign in"/>
                        </div>
                        <div className="lh-copy mt3">
                        <a href="#0" className="f6 link dim black db">Sign up</a>
                        <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Signin;