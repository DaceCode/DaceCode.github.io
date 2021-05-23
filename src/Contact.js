import React from "react";
import Button from "./components/Button";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Contact(props) {
  return (
    <div id="contact" className="contact">
      <div className="row">
        <div className="col-6 text">
          <h1> Get in touch</h1>
          <p>Fill the form and our team will get back to you in 2 hours</p>
          <ul>
            <li>
              <MdPhone className="icons" /> <span> +91-789-458-4321</span>
            </li>
            <li>
              <MdEmail className="icons" /> <span> protechminions@gmail.com</span>
            </li>
            <li>
              <MdLocationOn className="icons" /> <span> Nuapada, Sonepur</span>
            </li>
          </ul>
          <div className="social">
            <a href="#" className="" alt="facebook"><FaFacebookSquare /></a>
              <a href="#" className="" alt="instagram"><FaInstagram /></a>
          </div>
        </div>
        <div className="col-6">
          <form action="#">
            <div class="form-group">
              <label for="fullName">Your name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                placeholder="John Doe"
                spellcheck="false"
                required
              />
            </div>
            <div class="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="example@example.com"
                spellcheck="false"
                required
              />
            </div>

            <div class="form-group">
              <label for="notes">Message</label>

              <textarea
                class="form-control"
                name="specialnotes"
                rows="4"
                // cols="35"
                placeholder="Message"
                spellcheck="false"
              ></textarea>
            </div>
            <Button buttonName="Contact Us" />
          </form>
        </div>
      </div>

      {/* <h1>Contact</h1> */}
    </div>
  );
}

export default Contact;
