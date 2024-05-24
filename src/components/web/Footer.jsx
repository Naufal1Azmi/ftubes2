import React from "react";

export default function footer() {
  return (
    <footer>
      <div className="container-fluid footer-top">
        <div className="row p-4">
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              TENTANG
              <strong style={{ color: "#ffd22e" }}> Salam GenRe</strong>
            </h5>
            <hr />
            <div className="text-center">
              <img src="/images/logo-jbg.png" width="70" />
            </div>
            <p className="text-justify mt-3">
              lorem ipsum bla bla bla bla bla.
            </p>
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              MEDIA SOSIAL <strong style={{ color: "#ffd22e" }}> KAMI</strong>
            </h5>
            <hr/>
            <a href="#" className="ms-2 me-2" style={{ color: "#ffffff" }}>
                <i className="fab fa-facebook-square text-white fa-lg"></i>  FACEBOOK
              </a><br /><br />
              <a href="http://" className="ms-2 me-2" style={{ color: "#ffffff" }}>
                <i className="fab fa-instagram text-white fa-lg"></i> INSTAGRAM
              </a><br /><br />
              <a href="#" className="ms-2 me-2" style={{ color: "#ffffff" }}>
                <i className="fab fa-youtube text-white fa-lg"></i>  YOUTUBE
              </a><br /><br />
          </div>
          <div className="col-md-4 mb-4 mt-3">
            <h5>
              KONTAK <strong style={{ color: "#ffd22e" }}>KAMI</strong>
            </h5>
            <hr />
            <p>
              <i className="fa fa-map-marker"></i> Desa Laut Dendang
              <br />
              <br />
              <i className="fas fa-envelope"></i> info@gensu.com
              <br />
              <br />
              <i className="fas fa-phone"></i> +62 8123456789
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid footer-bottom">
        <div className="row p-3">
          <div className="text-center text-white font-weight-bold">
            Copyright © 2023 Salam GenRe. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}