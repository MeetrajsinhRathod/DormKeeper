import React, { Component } from 'react'
import './hostelspace.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect, firestoreReducer } from 'react-redux-firebase'
import { compose } from 'redux'
import Moment from 'moment';
import { scheduleCleaning, scheduleLaundry } from '../actions/userAction'

class HostelSpace extends Component {

    state = {

        scRoomNo: '',
        scDate: '',
        scTime: '',

        slName: '',
        slRoomNo: '',
        slDate: '',
        slTime: '',
        slN: '',

    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    scheduleCleaning = async (e) => {
        e.preventDefault()
        this.props.scheduleCleaning(this.state)
    }
    scheduleLaundry = async (e) => {
        e.preventDefault()
        this.props.scheduleLaundry(this.state)
    }

    render() {

        const { profile, announcements, mess, bills } = this.props;
        let check = false;
        return (
            <section className="hostelspace-sec">
                <div>
                    <div className="container msg-section d-flex">
                        <div className="container dis-msg d-flex">
                            <div className="dis-msg-container d-flex">
                                <div className="msg-title text-center d-flex">
                                    <i class="fas fa-bolt"></i>
                                    <h3 className="text-center">Your Bill Notifications</h3>
                                </div>
                                <div className="info">

                                    {bills && bills.map(item => {

                                        if (profile.roomNo == item.id) {

                                            check = true
                                            return (
                                                <div class="contact-form">
                                                    <div className="msg-pos d-flex">
                                                        <div class="col-md-6 amount">
                                                            <i class="fas fa-rupee-sign"></i>
                                                            <input class="txa" type="text" name="website" value={item.amount} required="" />
                                                        </div>
                                                        <div class="col-md-6">
                                                            <i class="far fa-calendar-alt"></i>
                                                            <input class="txa" type="text" name="website" value={item.dueDate} required="" />
                                                        </div>
                                                    </div>
                                                    <div class="col-md-12">
                                                        <i class="far fa-comment-dots"></i>
                                                        <textarea class="txa" readonly name="message">{item.msg}</textarea>
                                                    </div>
                                                </div>
                                            )
                                        }

                                    })
                                    }

                                    {check == false ?
                                        <div class="contact-form">
                                            <div className="msg-pos d-flex">
                                                <div class="col-md-6 amount">
                                                    <h4>No bills pending :)</h4>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        <div>
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="container dis-msg add-msg-1 d-flex">
                            <div className="dis-msg-container c-height d-flex">
                                <div className="msg-title text-center d-flex">
                                    <i class="fas fa-bullhorn"></i>
                                    <h3 className="text-center">Important Announcements</h3>
                                </div>
                                <div className="info a-pos">

                                    <ul>
                                        {announcements && announcements.map(item => {
                                            return (
                                                <div class="contact-form">
                                                    <div class="col-md-12 map-announce">
                                                        <li key={item.id}>
                                                            <div className="announcement-pos">
                                                                <h4>Title: </h4>
                                                                <input class="admin-msg" value={item.title} />
                                                            </div>
                                                            <div className="announcement-pos">
                                                                <h4>Message: </h4>
                                                                <textarea class="admin-msg">{item.announcement}</textarea>
                                                            </div>
                                                            <div className="announcement-pos">
                                                                <h5>{Moment(item.createdAt.toDate()).fromNow()}</h5>
                                                            </div>
                                                        </li>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="msg-section">
                    <h5 className="note">*You can pay your bills online to the <span>8160170369</span>. Add note with your "room number-elctricity bill".</h5>
                </div>
                <div className="container mesh-dis">
                    <div className="m-title d-flex">
                        <h2>Mess Details</h2>
                    </div>
                    <table class="table table-hover table-striped table-bordered">
                        <thead>
                            <tr table-striped>
                                <th scope="col" class="col-md-4">Date</th>
                                <th scope="col">Time</th>
                                <th scope="col" class="col-md-4">Menu Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mess && mess.map(item => {
                                return (
                                    <tr>
                                        <td>{item.date}</td>
                                        <td>{item.id}</td>
                                        <td>{item.menu}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="container cleaning d-flex">
                    <div className="cleaning-container d-flex">
                        <div className="cleaning-title text-center d-flex">
                            <i class="fas fa-quidditch d-flex"></i>
                            <h3 className="text-center">Shedule Cleaning</h3>
                        </div>
                        <div className="info">
                            <div class="contact-form">
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="fas fa-door-open"></i>
                                        <input type="text" name="website" placeholder="Room Number" placeholder={profile.roomNo} id="scRoomNo" onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <i class="far fa-calendar-alt"></i>
                                        <input name="date" placeholder="Due date" type="date" id="scDate" onChange={this.handleChange} required="" />
                                    </div>
                                </div>
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="far fa-clock"></i>
                                        <select name="t-slots" id="scTime" onChange={this.handleChange}>
                                            <option value="" selected disabled hidden>Choose time</option>
                                            <option value="09:00 to 09:30 AM">09:00 to 09:30 AM</option>
                                            <option value="09:30 to 10:00 AM">09:30 to 10:00 AM</option>
                                            <option value="10:00 to 10:30 AM">10:00 to 10:30 AM</option>
                                            <option value="10:30 to 11:00 AM">10:30 to 11:00 AM</option>
                                            <option value="11:00 to 11:30 AM">11:00 to 11:30 AM</option>
                                            <option value="11:30 to 12:00 AM">11:30 to 12:00 AM</option>
                                            <option value="12:00 to 12:30 AM">12:00 to 12:30 AM</option>
                                            <option value="12:30 to 01:00 PM">12:30 to 01:00 PM</option>
                                            <option value="01:00 to 01:30 PM">01:00 to 01:30 PM</option>
                                            <option value="01:30 to 02:00 PM">01:30 to 02:00 PM</option>
                                            <option value="02:00 to 02:30 PM">02:00 to 02:30 PM</option>
                                            <option value="02:30 to 03:00 PM">02:30 to 03:00 PM</option>
                                            <option value="03:00 to 03:30 PM">03:00 to 03:30 PM</option>
                                            <option value="03:30 to 04:00 PM">03:30 to 04:00 PM</option>
                                            <option value="04:00 to 04:30 PM">04:00 to 04:30 PM</option>
                                            <option value="04:30 to 05:00 PM">04:30 to 05:00 PM</option>
                                            <option value="05:00 to 06:00 PM">05:00 to 06:00 PM</option>
                                            <option value="06:00 to 06:30 PM">06:00 to 06:30 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <p></p>
                                <div class="col-md-12 msg-button">
                                    <button type="button" class="btn btn-primary msg-btn" onClick={this.scheduleCleaning} >Shedule</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="msg-section note-cleaning">
                    <h5 className="note">*Only one person can shedule cleaning for single room.</h5>
                </div>
                <div className="container laundry d-flex">
                    <div className="laundry-container d-flex">
                        <div className="laundry-title text-center d-flex">
                            <i class="fas fa-tshirt d-flex"></i>
                            <h3 className="text-center">Shedule Laundry</h3>
                        </div>
                        <div className="info">
                            <div class="contact-form">
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="fas fa-user"></i>
                                        <input name="name" placeholder="Name" type="name" id="slName" placeholder={profile.username} onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <i class="fas fa-door-open"></i>
                                        <input type="text" name="website" placeholder="Room Number" id="slRoomNo" placeholder={profile.roomNo} onChange={this.handleChange} required="" />
                                    </div>
                                </div>
                                <div className="msg-pos d-flex">
                                    <div class="col-md-6">
                                        <i class="far fa-calendar-alt"></i>
                                        <input name="date" type="date" id="slDate" onChange={this.handleChange} required="" />
                                    </div>
                                    <div class="col-md-6">
                                        <i class="far fa-clock"></i>
                                        <select name="t-slots" id="slTime" onChange={this.handleChange}>
                                            <option value="" selected disabled hidden>Choose time</option>
                                            <option value="09:00 to 09:30 AM">09:00 to 09:30 AM</option>
                                            <option value="09:30 to 10:00 AM">09:30 to 10:00 AM</option>
                                            <option value="10:00 to 10:30 AM">10:00 to 10:30 AM</option>
                                            <option value="10:30 to 11:00 AM">10:30 to 11:00 AM</option>
                                            <option value="11:00 to 11:30 AM">11:00 to 11:30 AM</option>
                                            <option value="11:30 to 12:00 AM">11:30 to 12:00 AM</option>
                                            <option value="12:00 to 12:30 AM">12:00 to 12:30 AM</option>
                                            <option value="12:30 to 01:00 PM">12:30 to 01:00 PM</option>
                                            <option value="01:00 to 01:30 PM">01:00 to 01:30 PM</option>
                                            <option value="01:30 to 02:00 PM">01:30 to 02:00 PM</option>
                                            <option value="02:00 to 02:30 PM">02:00 to 02:30 PM</option>
                                            <option value="02:30 to 03:00 PM">02:30 to 03:00 PM</option>
                                            <option value="03:00 to 03:30 PM">03:00 to 03:30 PM</option>
                                            <option value="03:30 to 04:00 PM">03:30 to 04:00 PM</option>
                                            <option value="04:00 to 04:30 PM">04:00 to 04:30 PM</option>
                                            <option value="04:30 to 05:00 PM">04:30 to 05:00 PM</option>
                                            <option value="05:00 to 06:00 PM">05:00 to 06:00 PM</option>
                                            <option value="06:00 to 06:30 PM">06:00 to 06:30 PM</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12 d-flex">
                                    <h4 class="no-cloths">No. of cloths: </h4>
                                    <input type="text" name="website" placeholder="" required="" class="no-cloths-input" id="slN" onChange={this.handleChange} />
                                </div>
                                <p></p>
                                <div class="col-md-12 msg-button">
                                    <button type="button" class="btn btn-primary msg-btn" onClick={this.scheduleLaundry}>Shedule</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h6 className="text-center">In case of any quary <Link aria-current="page" to="/Contactus">Contact us</Link> here  </h6>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        profile: state.firebase.profile,
        announcements: state.firestore.ordered.announcements,
        mess: state.firestore.ordered.mess,
        bills: state.firestore.ordered.bills,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        scheduleCleaning: (newSc) => dispatch(scheduleCleaning(newSc)),
        scheduleLaundry: (newSl) => dispatch(scheduleLaundry(newSl)),
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([
        {
            collection: 'announcements',
        }
    ]),
    firestoreConnect([
        {
            collection: 'mess'
        }
    ]),
    firestoreConnect([
        {
            collection: 'bills'
        }
    ])

)(HostelSpace)
