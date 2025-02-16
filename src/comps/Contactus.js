import React from "react";
import emailjs from "emailjs-com";
import "./Contactus.css";

export default function Contactus() {

  function handleSubmit(e) {
    e.preventDefault();

    emailjs.sendForm('service_3rka4ek', 'template_rpi6u7n', e.target, 'user_egr6TGUlkKrBlIORyqLui')
      .then((result) => {
        alert("Submited Successfuly!!");
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        e.target.reset();
      });
  };
  return (
    <section className="contact-sec">
      <div
        className="container contact"
        style={{ height: "auto" }}
      >
        <div className="main-box">
          <div className="form ">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="form-floating col mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                  />
                  <label className="holder" for="name">Full Name</label>
                </div>
              </div>
              <div className="row">
                <div className="form-floating col mb-3">
                  <input
                    type="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="name@example.com"
                  />
                  <label className="holder" for="email">Email address</label>
                </div>
                <div className="form-floating col mb-3">
                  <input
                    type="phone number"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Mobile No."
                  />
                  <label className="holder" for="phone">Mobile Number</label>
                </div>
              </div>
              <div className="form-floating mb-3">
                <textarea
                  class="form-control t-area"
                  placeholder="Leave a comment here"
                  id="message"
                  name="message"
                  style={{ height: "100px" }}
                ></textarea>
                <label className="holder t-area" for="message">Message</label>
              </div>

              <button type="submit" className="sendbtn">
                Submit
              </button>
            </form>
          </div>
          <div className="contactinfo">
            <h2>Contact Info</h2>
            <div className="box" id="callinfo">
              <div className="icon">
                <i class="lead bi bi-telephone"></i>
              </div>
              <div className="contacttext">
                <p>+91 8980437222</p>
                <p>+91 8160170369</p>
              </div>
            </div>
            <div className="box" id="emailinfo">
              <div className="icon">
                <i class="lead bi bi-envelope-fill"></i>
              </div>
              <div className="contacttext">
                support@gmail.com
              </div>
            </div>
            <div className="box" id="timeinfo">
              <div className="icon">
                <i class="lead bi bi-clock"></i>
              </div>
              <div className="contacttext">
                <p> Mon-Fri: 10:00-18:00</p>
                <p>Sat-Sun: 10:00-14:00</p>
              </div>
            </div>
            <div className=" box">
              <div className="icon">
                <i class="lead link bi bi-link-45deg"></i>
              </div>
              <div className="contacttext s-ico">
                <a className="social" href="https://www.instagram.com/">
                  <i class="bi bi-instagram"></i>
                </a>
                <a className="social" href="https://www.facebook.com/">
                  <i class="bi bi-facebook"></i>
                </a>
                <a className="social" href="/"><i class="bi bi-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="main-address">
          <div className="full-address">
            <div className="add-icon">
              <i class="bi bi-geo-alt-fill"></i>
            </div>
            <div className="full-add">
              <h3>Address</h3>
              Charotar University of Science & Technology CHARUSAT Campus Off. Nadiad-Petlad Highway, Changa 388 421 Anand, Gujarat, INDIA
            </div>
          </div>
          <div className="map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe className="gmap_iframe" title="Map" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=charusat &amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                </iframe>
                <a href="https://www.fnfgo.com/">Friday Night Funkin Mods</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}