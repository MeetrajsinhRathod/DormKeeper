import React, { useState } from 'react'
import './signup.css'
import { Link } from 'react-router-dom'
import { auth } from '../Firebaseset'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { Component } from 'react'
import { signUp } from '../actions/authAction'

class Signup extends Component {
    state={
        username: '',
        email: '',
        phoneNo: '',
        roomNo: '',
        password: '',
        password1: '',
        redirect: null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault()
        if (this.state.phoneNo.length !== 10) {
            alert("Enter valid phone no.")
        }
        if (this.state.password !== this.state.password1) {
            alert("Password dosn't mathch!!")
        }
        else {
            this.props.signUp(this.state)
            this.setState({ redirect: "/Verifyemail" });
        }
    }
    render() {
        const {authError, auth} = this.props;
        if(auth.uid) return <Redirect to= "/Home" />
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
          }
        return (
            <section className="signup-sec">
            <div className="container my-2" style={{ maxWidth: "500px" }}>
                <div className="card">
                    <form className=" my-2" onSubmit={this.handleSubmit} >
                        <h2 className="text-center">Sign Up</h2>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="text" class="form-control" id="username" placeholder="Username" onChange={this.handleChange} />
                                <label for="username" class="form-label holder-in-out" >Username</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" onChange={this.handleChange} />
                                <label for="email" class="form-label holder-in-out" >Email address</label>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="tel" class="form-control" id="phoneNo" placeholder="Phone No." onChange={this.handleChange} />
                                <label for="phoneNo" class="form-label holder-in-out" >Phone Number</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="text" class="form-control" id="roomNo" placeholder="Room No." onChange={this.handleChange} />
                                <label for="roomNo" class="form-label holder-in-out" >Room Number</label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <div className="form-floating col mb-3">
                                <input type="password" class="form-control" id="password" placeholder="Your Password" onChange={this.handleChange} />
                                <label for="password" class="form-label holder-in-out" >Password</label>
                            </div>
                        </div>
                        <div class="mb-5">
                            <div className="form-floating col mb-3">
                                <input type="password" class="form-control" id="password1" placeholder="Retype your password" onChange={this.handleChange} />
                                <label for="password1" class="form-label holder-in-out" >Confirm Password</label>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary d-flex" style={{ width: "50%", margin: "auto", justifyContent: "center" }}>Sign Up</button>
                    </form>
                </div>
                <h6 className="text-center" style={{ marginTop: "20px" }}>Already have an Account? <Link aria-current="page" to="/Login">Login </Link> here</h6>
            </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        signUp: (newUser) => dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)

