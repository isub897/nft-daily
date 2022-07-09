import React from "react";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            confirm: "",
            notFilled: false,
            notUnique: false,
            notMatching: false
        }
    }

    filledInput = (result) => {
        this.setState({notFilled: result});
    }

    signinStatus = (result) => {
        this.setState({failedSignIn: result});
    }

    onUsernameChange = (event) => {
        this.stateResets();
        this.setState({username: event.target.value});
    }

    onEmailChange = (event) => {
        this.stateResets();
        this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
        this.stateResets();
        this.setState({password: event.target.value});
    }

    onConfirmChange = (event) => {
        this.stateResets();
        this.setState({confirm: event.target.value})
        this.confirmCheck(event.target.value);
    }

    confirmCheck = (confirmPassword) => {
        this.setState({notFilled: false})
        if (!confirmPassword) {return this.setState({
            notMatching: false,
        })}
        if(this.state.password !== confirmPassword) {
            return this.setState({notMatching: true})
        } else {return this.setState({notMatching: false})}
    }

    onKeyPress = (event) => {
        if(event.code === "Enter") {
            this.onSubmit();
        }
    }

    stateResets = () => {
        this.setState({
            notFilled: false,
            notUnique: false,
            notMatching: false
        })
    }

    onSubmit = () => {
        const { username, email, password, confirm } = this.state;
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                email: email,
                password: password,
                confirm: confirm
            }),
            credentials: 'include'
        })
        .then(response => response.json())
        .then(user => {
            if(user.email) {
                this.setState({
                    notFilled: false,
                    notUnique: false,
                    notMatching: false
                })
                this.props.loadUser(user);
                this.props.onSignedin(true);
            } else {
                user === "fill"
                    ? this.setState({
                        notFilled: true,
                        notUnique: false,
                        notMatching: false
                    })
                    :(user === "duplicate"
                        ? this.setState({
                            notFilled: false,
                            notUnique: true,
                            notMatching: false
                        })
                        : this.setState({
                            notFilled: false,
                            notUnique: false,
                            notMatching: true
                        })
                    ) 
                this.props.onSignedin(false);
            }
        })
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
                                Please ensure all fields are filled
                            </div>
                            :(this.state.notUnique
                                ?<div className="err-msg pb3 f6 red ">
                                    This email address is already in use.  Please use another email address
                                </div>
                                :(this.state.notMatching
                                    ?<div className="err-msg pb3 f6 red ">
                                        Please ensure passwords are matching
                                    </div>
                                    :<div></div>
                                )
                            )
                        }
                        <div className="">
                        <input 
                            onClick={this.onSubmit}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib mt2" 
                            type="button" 
                            value="Register"/>
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