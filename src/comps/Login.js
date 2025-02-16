import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import { auth,user, } from '../Firebaseset'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { signIn } from '../actions/authAction'
import { Component } from 'react'

class Login extends Component {
    

    state={
        email: '',
        password: '',
        redirect: null,
        y: false
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        this.setState({ redirect: "/Home" });
    }
    render() {
        const {authError, auth, emailVerified} = this.props;
        
        if(auth.uid) return <Redirect to= "/Home" />
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <section className="login-sec">
            <div className="container" style={{ maxWidth: "500px" }}>
                <div className="card my-4">
                    <form className=" my-2" onSubmit={this.handleSubmit} >
                        <h2 className="text-center">Log In</h2>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" onChange={this.handleChange} />
                                <label className="holder-in-out" for="floatingInput">Email address</label>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div className="form-floating col mb-3">
                                <input type="password" class="form-control" id="password" placeholder="Your Password" onChange={this.handleChange} />
                                <label for="password" class="form-label holder-in-out" >Password</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary d-flex" style={{ width: "50%", margin: "auto", justifyContent: "center" }}>Log In</button>
                    </form>
                </div>
                <h6 className="text-center">Don't have Account? <Link aria-current="page" to="/Signup">Sign Up </Link> here  </h6>
            </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth,
        emailVerified: state.firebase.auth.emailVerified,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signIn: (creds) => dispatch(signIn(creds)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)

