import React from 'react'
import "./home.css";
import { Component } from 'react'
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'

import img1 from "../img/img2.jpg";
import cleanimg from "../img/icons8-cleaning-60.png";
import laundryimg from "../img/icons8-clothes-in-laundry-48.png";
import electricityimg from "../img/icons8-electricity-64.png";
import messimg from "../img/icons8-restaurant-100.png";

class Home extends Component {
    state = {
        redirect: null
    }

    render() {
        const { authError, auth, emailVerified } = this.props;
        if (auth.uid != null && !emailVerified) {
            this.setState({ redirect: "/Verifyemail" });
        }
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} /> 
        }

        return (
            <section className="home-sec">
                <div className="home-text">
                    <h1>We Welcome you</h1>
                    <h2>
                        Spacious Suites Rooms with 4 sharing Spacious Suites Rooms with 4
                        sharing up to 4 students per room.{" "}
                    </h2>
                    <h5>
                        4 twin beds, has personal cabinets for each student and writing desk,
                        hot water 24x7. Ac and non Ac rooms, Dinning Room Do visit our
                        2200Sqft Big Dinning room Enjoy breakfast, lunch and dinner, buffet
                        and d option are available upon request
                    </h5>
                    <h2>Since 2021 year</h2>
                </div>
                <div className="home-gallery">
                    <div className="gallery-head">
                        <h2>Photo Gallery</h2>
                    </div>
                    <div className="gallery-body">
                        <div class="row">
                            <div className="column">
                                <img src={img1} alt="" />
                                <img
                                    src="https://images.pexels.com/photos/3586966/pexels-photo-3586966.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                                <img
                                    src="https://images.pexels.com/photos/2019546/pexels-photo-2019546.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                            </div>
                            <div className="column">
                                <img
                                    src="https://images.pexels.com/photos/3546429/pexels-photo-3546429.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                                <img
                                    src="https://images.pexels.com/photos/2091160/pexels-photo-2091160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt=""
                                />
                                <img
                                    src="https://images.pexels.com/photos/3251006/pexels-photo-3251006.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                            </div>
                            <div className="column">
                                <img
                                    src="https://images.pexels.com/photos/3889868/pexels-photo-3889868.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                                <img
                                    src="https://images.pexels.com/photos/3779785/pexels-photo-3779785.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                                <img
                                    src="https://images.pexels.com/photos/259987/pexels-photo-259987.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-services">
                    <div className="service-head">
                        <h1>Our Services</h1>
                    </div>
                    <div className="service-body d-flex  p-1">
                        <div className="card">
                            <div className="service-image">
                                <img src={cleanimg} alt="" />
                            </div>
                            <div className="service-info">
                                <h2>Room Cleaning</h2>
                                <p>
                                    Book your room cleaning at your avaliable time and preference
                                    and get notified when done
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="service-image ">
                                <img className="s-laundry" src={laundryimg} alt="" />
                            </div>
                            <div className="service-info">
                                <h2>Laundry Service</h2>
                                <p>Schedule laundry services as per your convinent time.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="service-image">
                                <img src={electricityimg} alt="" />
                            </div>
                            <div className="service-info">
                                <h2>Electricity Bill</h2>
                                <p>
                                    User will get notification about their monthly bills based on
                                    room number.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="service-image">
                                <img className="foodimg" src={messimg} alt="" />
                            </div>
                            <div className="service-info">
                                <h2>Mess Details</h2>
                                <p>
                                    Students get information about what's in their breakfast,
                                    lunch and dinner
                                </p>
                            </div>
                        </div>
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
        //sendVerification: () => dispatch(verifyEmail())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home)