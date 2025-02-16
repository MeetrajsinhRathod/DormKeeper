import React from 'react'
import './nav.css'
import { Link, NavLink, Redirect } from 'react-router-dom'

import { useHistory } from 'react-router'

import { connect } from 'react-redux'
import { signOut } from '../actions/authAction'
import { Component } from 'react'


const Nav = (props) => {

    const history = useHistory()
    const { auth, profile } = props;

    let links;

    if (profile.role == 'admin' | profile.role == 'cleaning' | profile.role == 'laundry') {
        links = <>
            <li className="nav-item">
                <NavLink className="nav-NavLink" activeClassName="active" to="/Dashboard">Dashboard</NavLink>
            </li>
        </>
    }
    else if (profile.role == 'user') {
        links = <>
            <li className="nav-item">
                <NavLink className="nav-NavLink" activeClassName="active" to="/HostelSpace">Hostel Space</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-NavLink" activeClassName="active" to="/Dashboard">Dashboard</NavLink>
            </li>
        </>

    }
    else {
        links = <></>

    }

    return (
        <div>
            <div >
                <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                    <div className="container" >
                        <Link className="brand" to="/Home"><img src="https://img.icons8.com/ultraviolet/40/000000/kids-bedroom.png" />Dorm Keeper</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >

                            <ul className="navbar-nav me-auto ">
                                <li className="nav-item ">
                                    <NavLink exact className="nav-NavLink" activeClassName="active" to="/Home">Home</NavLink>
                                </li>
                                {links}
                                <li className="nav-item">
                                    <NavLink className="nav-NavLink" activeClassName="active" to="/Aboutus">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-NavLink" activeClassName="active" to="/Contactus">Contact Us</NavLink>
                                </li>
                            </ul>
                            {auth.uid ?
                                <form className="d-flex" style={{ justifyContent: "center" }}>
                                    <button className="btn-out " type="submit" onClick={() => {
                                        history.push("/Home")
                                        props.signOut();

                                    }}>Log-out</button>
                                </form>
                                :
                                <>
                                    <button className="btn-in" type="submit" onClick={() => {
                                        history.push("/Login")
                                    }}>Log In / Sign Up</button>
                                </>
                            }
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Nav)

