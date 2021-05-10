import React from "react";
import "./../../App.css"
const FooterPage = () => {
  return (
    <div className="font-small ">
      <div fluid className=" desc ">
            <div>
            <h5 className="title">Cosso By Ahmad</h5>
            <p>
              Your can buy everything from That store
            </p>
            </div>
            <div>
            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4857.531172072544!2d-1.9143973218179753!3d52.50148275033398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bcb85a85b1cf%3A0x93cb9fa5c9850df9!2sLozells%2C%20Birmingham%2C%20UK!5e0!3m2!1sen!2s!4v1620634564932!5m2!1sen!2s" width="200" height="100" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
            </div>
          <div>
            <ul>
              <li className="list-unstyled">
                <a href="https://www.facebook.com/M.Ahmadshafiie/">Facebook</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.instagram.com/iam_ahmademi">Instagram</a>
              </li>
              <li className="list-unstyled">
              <a href="https://api.whatsapp.com/send?phone=+923146625602">WhatsApp | Send Messege</a>
              </li>
              <li className="list-unstyled">
                <a href="https://www.linkedin.com/in/ahmadraza100/">LinkedIn</a>
              </li>
            </ul>
          </div>
      </div>
      <div className="footer-copyright text-center py-3">
      <h1 className="copyright"> {new Date().getFullYear()} Copyright: <a href="https://www.instagram.com/iam_ahmademi" style ={{color:"red" , textDecoration:"none"}}> AhmadRaza </a></h1>
      </div>
    </div>
  );
}

export default FooterPage;