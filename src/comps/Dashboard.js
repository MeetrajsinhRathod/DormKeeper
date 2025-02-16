import React, { Component } from 'react'
import './dashboard.css'
import { Redirect } from "react-router-dom";
import { actionTypes } from 'react-redux-firebase'
import { auth, db } from '../Firebaseset'
import { firestoreConnect, firestoreReducer } from 'react-redux-firebase'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addCleaning, removeCleaning, addLaundry, removeLaundry } from '../actions/authAction'
import { addAnnouncement, addMenu, addBill, updateCleaning, updateLaundry } from '../actions/adminAction'
import { updateProfile } from '../actions/userAction'


class Dashboard extends Component {
    state = {

        cusername: '',
        cemail: '',
        cphoneNo: '',
        cpassword: '',

        lusername: '',
        lemail: '',
        lphoneNo: '',
        lpassword: '',

        title: '',
        announcement: '',

        time: '',
        menu: '',
        mDate: '',

        roomNo: '',
        amount: '',
        dueDate: '',
        msg: '',

        ucStatus: '',
        ucRoomNo: '',

        laStatus: '',
        laName: '',

        pUsername: '',
        pPhoneNo: '',
        pRoomNo: '',

        redirect: null,

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addC = async (e) => {
        e.preventDefault()
        if (this.state.cphoneNo.length !== 10) {
            alert("Enter valid phone no.")
        }
        else {
            this.props.addCleaning(this.state)
        }
    }
    removeC = async (e) => {
        e.preventDefault()
        if (this.state.cphoneNo.length !== 10) {
            alert("Enter valid phone no.")
        }
        else {
            this.props.removeCleaning(this.state)
        }
    }

    addL = async (e) => {
        e.preventDefault()
        if (this.state.lphoneNo.length !== 10) {
            alert("Enter valid phone no.")
        }
        else {
            this.props.addLaundry(this.state)
        }
    }
    removeL = async (e) => {
        e.preventDefault()
        if (this.state.lphoneNo.length !== 10) {
            alert("Enter valid phone no.")
        }
        else {
            this.props.removeLaundry(this.state)
        }
    }

    addAn = async (e) => {
        e.preventDefault()
        this.props.addAnnouncement(this.state)
    }
    addMenu = async (e) => {
        e.preventDefault()
        this.props.addMenu(this.state)
    }
    addBill = async (e) => {
        e.preventDefault()
        this.props.addBill(this.state)
    }

    updateCleaning = (x) => {

        this.setState({
            ucRoomNo: x
        }, () => { this.props.updateCleaning(this.state) })

    }

    updateLaundry = (x) => {

        this.setState({
            laName: x
        }, () => { this.props.updateLaundry(this.state) })

    }

    updateP = async (e) => {

        if (this.state.pPhoneNo.length !== 10) {
            alert("Enter valid phone no. !")
        }
        if (!this.state.pUsername) {
            alert("Enter value for username!")
        }
        if (!this.state.pRoomNo) {
            alert("Enter valid room no. !")
        }
        else{
        e.preventDefault()
        this.props.updateProfile(this.state)
        }

    }

    render() {
        const { authError, auth, profile, cleaning, laundry } = this.props;

        let link;

        if (profile.role == 'admin') {

            link = <div className="load-size">
                <div className="container add-service-container d-flex">
                    <div className=" service">
                        <div className="card">
                            <div className="title d-flex">
                                <i class="fas fa-quidditch d-flex"></i>
                                <h4 >Edit Cleaning Provider</h4>
                            </div>
                            <div className="inputs d-flex">
                                <div className="input-pos d-flex">
                                    <i class="bi bi-person-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="cusername"
                                                placeholder=" Name"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="bi bi-envelope-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="Email"
                                                className="form-control"
                                                id="cemail"
                                                placeholder=" Email"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">E-mail</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="bi bi-telephone-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="cphoneNo"
                                                placeholder=" phone-number"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Phone Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="fas fa-lock d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="cpassword"
                                                placeholder=" password"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-pos d-flex">
                                <button type="button" class="btn btn-primary ar-btn" onClick={this.addC} >Add</button>
                                <button type="button" class="btn btn-primary ar-btn" onClick={this.removeC}>Remove</button>
                            </div>
                        </div>
                    </div>
                    <div className="laundry service">
                        <div className="card">
                            <div className="title d-flex">
                                <i class="fas fa-tshirt d-flex"></i>
                                <h4 >Edit Laundry Provider </h4>
                            </div>
                            <div className="inputs d-flex">
                                <div className="input-pos d-flex">
                                    <i class="bi bi-person-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="lusername"
                                                placeholder=" Name"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="bi bi-envelope-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="Email"
                                                className="form-control"
                                                id="lemail"
                                                placeholder=" Email"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">E-mail</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="bi bi-telephone-fill d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="lphoneNo"
                                                placeholder=" phone-number"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Phone Number</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="input-pos d-flex">
                                    <i class="fas fa-lock d-flex"></i>
                                    <div className="row">
                                        <div className="form-floating col mb-3">
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="lpassword"
                                                placeholder=" password"
                                                onChange={this.handleChange}
                                            />
                                            <label className="holder" for="floatingInput">Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-pos d-flex">
                                <button type="button" class="btn btn-primary ar-btn" onClick={this.addL}>Add</button>
                                <button type="button" class="btn btn-primary ar-btn" onClick={this.removeL}>Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container add-msg d-flex">
                    <div className="add-msg-container d-flex">
                        <div className="msg-title text-center d-flex">
                            <i class="fas fa-bolt"></i>
                            <h3 className="text-center">Bill Notification</h3>
                        </div>
                        <div className="info">
                            <div class="contact-form">
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="fas fa-door-open"></i>
                                        <input type="text" name="website" placeholder="Room Number" id="roomNo" onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <i class="fas fa-rupee-sign"></i>
                                        <input type="number" name="website" placeholder="Bill Amount" id="amount" onChange={this.handleChange} required="" />
                                    </div>
                                </div>
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="far fa-calendar-alt"></i>
                                        <input name="date" placeholder="Due date" type="date" id="dueDate" onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <h4>(Due Date)</h4>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <i class="far fa-comment-dots"></i>
                                    <textarea name="message" placeholder="Your message" id="msg" onChange={this.handleChange} required=""></textarea>
                                </div>
                                <div class="col-md-12 msg-button">
                                    <button type="button" class="btn btn-primary msg-btn" onClick={this.addBill} >Send Reminder</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container add-msg d-flex">
                    <div className="add-msg-container d-flex">
                        <div className="msg-title text-center d-flex">
                            <i class="fas fa-bullhorn"></i>
                            <h3 className="text-center">Announcement</h3>
                        </div>
                        <div className="info">
                            <div class="contact-form">
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="fas fa-heading"></i>
                                        <input type="text" name="website" placeholder="Title" id="title" onChange={this.handleChange} required="" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <i class="far fa-comment-dots"></i>
                                    <textarea name="message" placeholder="Your Message Here" id="announcement" onChange={this.handleChange} required=""></textarea>
                                </div>
                                <div class="col-md-12 msg-button">
                                    <button type="button" class="btn btn-primary msg-btn" onClick={this.addAn}>Publish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container add-msg d-flex">
                    <div className="add-msg-container d-flex">
                        <div className="msg-title text-center d-flex">
                            <i class="fas fa-utensils"></i>
                            <h3 className="text-center">Mess Details</h3>
                        </div>
                        <div className="info info-mesh">
                            <div class="contact-form">
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <h4 class="mesh-lable">Date :</h4>
                                        <input name="date" type="date" id="mDate" onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <i class="far fa-clock"></i>
                                        <select name="time" id="time" onChange={this.handleChange}>
                                            <option value="" selected disabled hidden>Choose here</option>
                                            <option value="breakfast">Breakfast</option>
                                            <option value="lunch">Lunch</option>
                                            <option value="dinner">Dinner</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <h4 class="mesh-lable">Menu :</h4>
                                    <input name="menu" placeholder="menu item" type="text" id="menu" onChange={this.handleChange} required="" />
                                </div>
                                <div class="col-md-12 msg-button">
                                    <button type="button" class="btn btn-primary msg-btn" onClick={this.addMenu}>Add item</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container c-s-dis">
                    <div className="c-s-title d-flex">
                        <h2>Room No.</h2>
                    </div>
                    <div className="Rooms d-flex">

                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="110">110</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal1" >111</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >112</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >113</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >114</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >115</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >116</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >117</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >118</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >119</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >211</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >212</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >213</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >214</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >215</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >216</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >217</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal2" >218</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3" >219</button>
                        <button type="button" class="btn btn-primary edit-btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >220</button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Room Information (110)</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student1-name" value="Meetrajsinh Rathod" />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student1-Fee" value='Fully-Paid' ></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student2-name" value='Uday Patel' />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student2-fee" value='Pending'></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student3-name" value='Prashant Patel'/>
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student3-fee" value='Half-Paid'></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Room Information (111)</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student1-name" value="Jenil Patel" />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student1-Fee" value='Pending' ></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student2-name" value='Rajen Trivedi' />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student2-fee" value='Fully-Paid'></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student3-name" value='Sanket Patel'/>
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student3-fee" value='Half-Paid'></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Room Information (112)</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student1-name" value="Akash" />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student1-Fee" value='Pending' ></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student2-name" value='Harshil' />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student2-fee" value='Half-Paid'></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student3-name" value='Rajesh'/>
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student3-fee" value='Half-Paid'></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Room Information (113)</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student1-name" value="Chagan Bhedi" />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student1-Fee" value='Fully-Paid' ></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student2-name" value='Magan Bhedi' />
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student2-fee" value='Pending'></input>
                                                </div>
                                            </div>
                                            <div className="mb-3 d-flex justify-content-around">
                                                <div className="std-name">
                                                    <label for="Student-name" class="col-form-label">Student Name:</label>
                                                    <input type="text" class="form-control" id="Student3-name" value='Gagan Bhedi'/>
                                                </div>
                                                <div className="std-fee">
                                                    <label for="message-text" class="col-form-label">Fee Status:</label>
                                                    <input class="form-control" id="Student3-fee" value='Half-Paid'></input>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        }

        else if (profile.role == 'cleaning') {

            link = <div className="container sheduling mb-5">
                <div className="c-s-title d-flex">
                    <h2>Sheduled Cleaning</h2>
                </div>
                <table class="table table-hover table-striped table-bordered">
                    <thead>
                        <tr table-striped>
                            <th scope="col" class="col-md-2">Room no.</th>
                            <th scope="col" class="col-md-2">Date</th>
                            <th scope="col" class="col-md-2">Time</th>
                            <th scope="col" class="col-md-2">Status</th>
                            <th scope="col" class="col-md-2">Edit status</th>
                            <th scope="col" class="col-md-2"></th>
                        </tr>
                    </thead>
                    <tbody>

                        {cleaning && cleaning.map(item => {
                            return (
                                <tr>
                                    <td>{item.roomNo}</td>
                                    <td>{item.date}</td>
                                    <td>{item.time}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <div class="col-md-6">
                                            <select id="ucStatus" onChange={this.handleChange} >
                                                <option value=" " selected disabled hidden>Choose status</option>
                                                <option value="pending">pending</option>
                                                <option value="sheduled next">sheduled next</option>
                                                <option value="cleaned">cleaned</option>
                                                <option value="can't complete">can't complete</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td><button onClick={() => this.updateCleaning(item.roomNo)}>Update</button></td>
                                </tr>
                            )
                        })
                        }

                    </tbody>
                </table>
            </div>

        }

        else if (profile.role == 'laundry') {
            link =
                <div className="container sheduling mb-5">
                    <div className="c-s-title d-flex">
                        <h2>Sheduled Laundries</h2>
                    </div>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                            <tr table-striped>
                                <th scope="col" class="col-md-1">Room no.</th>
                                <th scope="col" class="col-md-1">Student name</th>
                                <th scope="col" class="col-md-1">Date</th>
                                <th scope="col" class="col-md-1">Pickup Time</th>
                                <th scope="col" class="col-md-1">No. of cloths</th>
                                <th scope="col" class="col-md-1">Status</th>
                                <th scope="col" class="col-md-1">Edit status</th>
                                <th scope="col" class="col-md-1"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {laundry && laundry.map(item => {
                                return (
                                    <tr>
                                        <td>{item.roomNo}</td>
                                        <td>{item.name}</td>
                                        <td>{item.date}</td>
                                        <td>{item.time}</td>
                                        <td>{item.items}</td>
                                        <td>{item.status}</td>
                                        <td>
                                            <div class="col-md-6">
                                                <select id="laStatus" onChange={this.handleChange} >
                                                    <option value="" selected disabled hidden>Choose status</option>
                                                    <option value="pending">pending</option>
                                                    <option value="can't collect">can't collect</option>
                                                    <option value="picked up">picked up</option>
                                                    <option value="in cleaning">in cleaning</option>
                                                    <option value="laundry completed">laundry completed</option>
                                                    <option value="deliverd">deliverd</option>
                                                </select>
                                            </div>
                                        </td>
                                        <td><button onClick={() => this.updateLaundry(item.name)}>Update</button></td>
                                    </tr>
                                )
                            })
                            }

                        </tbody>
                    </table>
                </div>
        }

        else {

            link = <div className="load-size">
                <div className="accinfo">
                    <div className="acc text-center">
                        <i class="bi bi-person-circle my-0"></i>
                        <h3 className="text-center">My Account</h3>
                    </div>
                    <div className="info">
                        <div class="contact-form">
                            <div className="info-pos d-flex">
                                <div class="col-md-6">
                                    <i class="bi bi-person-fill"></i>
                                    <input type="text" name="name" id="pUsername" value={profile.username} placeholder={profile.username} onChange={this.handleChange} required />
                                </div>
                                <div class="col-md-6">
                                    <i class="bi bi-envelope-fill"></i>
                                    <input type="email" name="email"  value={profile.email} required />
                                </div>
                            </div>
                            <div className="info-pos d-flex">
                                <div class="col-md-6">
                                    <i class="bi bi-telephone-fill"></i>
                                    <input type="text" name="phone" id="pPhoneNo" placeholder={profile.phoneNo} onChange={this.handleChange} required />
                                </div>
                                <div class="col-md-6">
                                    <i class="fas fa-door-open"></i>
                                    <input type="text" name="website" id="pRoomNo" onChange={this.handleChange} placeholder={profile.roomNo} required />
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="button" class="btn btn-primary edit-btn" onClick={this.updateP}>Edit Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container c-s-dis">
                    <div className="c-s-title d-flex">
                        <h2>Your Cleaning Shedule</h2>
                    </div>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                            <tr table-striped>
                                <th scope="col" class="col-md-4">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col" class="col-md-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {cleaning && cleaning.map(item => {

                                if (item.id == profile.roomNo) {
                                    return (
                                        <tr>
                                            <td>{item.date}</td>
                                            <td>{item.time}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                }
                            })
                            }

                        </tbody>
                    </table>
                </div>
                <div className="container c-s-dis">
                    <div className="c-s-title d-flex">
                        <h2>Your Laundry Shedule</h2>
                    </div>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                            <tr table-striped>
                                <th scope="col" class="col-md-3">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col" class="col-md-3">No. of cloths</th>
                                <th scope="col" class="col-md-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {laundry && laundry.map(item => {

                                if (item.id == profile.username) {
                                    return (
                                        <tr>
                                            <td>{item.date}</td>
                                            <td>{item.time}</td>
                                            <td>{item.items}</td>
                                            <td>{item.status}</td>
                                        </tr>
                                    )
                                }
                            })
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        }

        return (

            <section className="dash-sec">
                <div className="container dash-container ">

                    {link}

                </div>
            </section>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
        cleaning: state.firestore.ordered.cleaning,
        laundry: state.firestore.ordered.laundry,
        userCol: db.collection('users').doc(auth.uid).get()
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //signUp: (newUser) => dispatch(signUp(newUser))
        addCleaning: (newC) => dispatch(addCleaning(newC)),
        removeCleaning: (newC) => dispatch(removeCleaning(newC)),

        addLaundry: (newL) => dispatch(addLaundry(newL)),
        removeLaundry: (newL) => dispatch(removeLaundry(newL)),

        addAnnouncement: (newAnn) => dispatch(addAnnouncement(newAnn)),

        addMenu: (newMenu) => dispatch(addMenu(newMenu)),

        addBill: (newBill) => dispatch(addBill(newBill)),

        updateCleaning: (newUC) => dispatch(updateCleaning(newUC)),
        updateLaundry: (newLA) => dispatch(updateLaundry(newLA)),

        updateProfile: (newP) => dispatch(updateProfile(newP)),

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'cleaning'
        }
    ]),
    firestoreConnect([
        {
            collection: 'laundry'
        }
    ]),

)(Dashboard)




