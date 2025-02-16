import React from 'react'
import './login.css'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import { verifyEmail } from '../actions/authAction'
import { actionTypes } from 'react-redux-firebase'
import { Component } from 'react'



class Verifyemail extends Component {
    state = {
        redirect: null,
        reload: false
    }

    check = async (e) => {
        e.preventDefault();
        this.setState({ redirect: "/Home" });
        window.location.reload();
        this.setState({ redirect: "/Home" });
    }

    render() {
        const {authError, auth, emailVerified} = this.props;
        if(emailVerified){
            this.setState({ redirect: "/Home" });
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <section className="login-sec">
                <div className="container" style={{ maxWidth: "500px" }}>
                    <div className="card my-4">
                        <form className=" my-2" >
                            <h2 className="text-center">Verify your email</h2>
                            <div class="mb-3">
                                <div className="form-floating col mb-3">
                                    <h4>Go to your email inbox, and please verify your email.</h4>
                                </div>
                            </div>
                            <div>
                                <button type="submit" onClick={(e) => {
                                    e.preventDefault();
                                    this.props.sendVerification();
                                }
                                } class="btn btn-primary d-flex" style={{ width: "50%", margin: "auto",marginBottom: "10px", justifyContent: "center" }}>Send email</button>

                                <button type="submit" onClick={this.check} class="btn btn-primary d-flex" style={{ width: "50%", margin: "auto", justifyContent: "center" }}>Refresh</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        emailVerified: state.firebase.auth.emailVerified
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        sendVerification: () => dispatch(verifyEmail())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Verifyemail)
