import React from "react";
//import { Link } from 'react-router-dom'
// import cleanimg from "../img/icons8-cleaning-60.png";
// import laundryimg from "../img/icons8-clothes-in-laundry-48.png";
// import electricityimg from "../img/icons8-electricity-64.png";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jfif";

import "./Aboutus.css";

export default function Aboutus() {
  return (
    <div className="Abt-mainbox">
      <div className="abt-tagline">
        <div className="tagline-heading">
          <h1>We are Dorm-Keeper</h1>
        </div>
        <div className="tagline-body">
          <h2>
            Dorm Keeper is a service provided by Hostel which will help users to
            schedule.
          </h2>
          <ul>
            <li>View all of your reservations on dashboard</li>
            <li>Keep track of available slots for room cleaning</li>
            <li>Get notified about your electricity bill</li>
          </ul>
        </div>
      </div>
      <div className="abt-glimpse">
        <div className="upper-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f1f6fc"
              fill-opacity="1"
              d="M0,160L34.3,186.7C68.6,213,137,267,206,261.3C274.3,256,343,192,411,149.3C480,107,549,85,617,96C685.7,107,754,149,823,160C891.4,171,960,149,1029,133.3C1097.1,117,1166,107,1234,117.3C1302.9,128,1371,160,1406,176L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="glimpse-carousel ">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#f1f6fc"
              fill-opacity="1"
              d="M0,160L34.3,186.7C68.6,213,137,267,206,261.3C274.3,256,343,192,411,149.3C480,107,549,85,617,96C685.7,107,754,149,823,160C891.4,171,960,149,1029,133.3C1097.1,117,1166,107,1234,117.3C1302.9,128,1371,160,1406,176L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="abt-steps">
      <h1 className="steps-head">Explore Our Services</h1>
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                  <h2>Room Cleaning</h2>
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>You can schedule room cleaning services from dashboard.</h3>
                <h4>Click to schedule room cleaning <a href="/HostelSpace/#cleaning-container">Cleaning service</a></h4>
                <h4>Important point to note</h4>
                <ul>
                  <li>Only one person from room can book room cleaning service.Others will not be able to book.</li>
                </ul>
                <h4>Status</h4>
                <ul>
                  <li>Cleaned: This indicates that room is cleaned.</li>
                  <li>Scheduled next: This indicates that your room is next in queue.</li>
                  <li>Unable to Clean: This indicates that room is not cleaned yet.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              > 
              <h2>Laundry Service</h2>
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              <h3>You can book laundry services from dashboard.</h3>
                <h4>Click to book <a href="/HostelSpace/#laundry ">laundry service</a></h4>
                <h4>Important point to note</h4>
                <h4>Status</h4>
                <ul>
                  <li>Picked up: This indicates that your clothes are received.</li>
                  <li>In Cleaning: This indicates that your clothes are under cleaning process.</li>
                  <li>Laundry Complete: This indicates that clothes are washed and will arive soon.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                  <h2>Electricity Bill</h2>
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>Your Monthly electricity bill will be notified.</h3>
                <h4>To redirect to Electricity bill <a href="/HostelSpace/">Click Me</a></h4>
                <h4>Important Points to note</h4>
                <ul>
                  <li>Ensure to take proof of payment.</li>
                  <li className="note">You can pay your bills online to the <span>8160170369</span>. Add note with your "room number-elctricity bill".</li>
                </ul>
                
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              ><h2>Mess Details</h2>
              </button>
            </h2>
            <div
              id="collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <h3>Mess information is displayed in a tabular manner.</h3>
                <h4>Important points to note</h4>
                <ul>
                  <li>Mess details are updated on daily bases.</li>
                  <li>There will be information about Breakfast, Lunch and Dinner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
