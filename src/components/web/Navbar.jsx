import React from "react";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const activeRoute = pathname.split("/");

  return (
    <>
    <nav className="navbar navbar-expand-md navbar-light navbar-blue nav-web">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === ""
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/"
                >
                  <i className="fa fa-home"></i> BERANDA
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "pages"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/pages"
                >
                  <i className="fa fa-info-circle"></i> TENTANG DESA
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "aparaturs"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/aparaturs"
                >
                  <i className="fa fa-user-circle"></i> APARATURS
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "posts"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/posts"
                >
                  <i className="fa fa-book"></i> BERITA
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "products"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/products"
                >
                  <i className="fa fa-shopping-bag"></i> PRODUK DESA
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link
                  className={
                    activeRoute[1] === "photos"
                      ? "nav-link active text-uppercase"
                      : "nav-link text-uppercase"
                  }
                  to="/photos"
                >
                  <i className="fa fa-images"></i> GALERI
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="jumbotron-header pb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-9 d-none d-md-block d-lg-block">
              <div className="header-logo">
                <a href="#">
                  <img
                    src="/images/logo-jbg.png"
                    width="110"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="header-text">
                <h2 className="header-school">PP FGI SUMUT</h2>
                <hr />
                <div className="header-address">
                  Jln. Tegal Sari Desa Laut Dendang
                </div>
              </div>
            </div>

            <div className="row d-block d-md-none d-lg-none">
              <div className="col-md-6 text-center mt-3">
                <a href="#">
                  <img
                    src="/images/logo-jbg.png"
                    width="110"
                    className="img-responsive"
                  />
                </a>
              </div>
              <div className="col-md-12 text-center text-white mb-3">
                <h2 className="header-school">PP FGI SUMUT</h2>
                <hr />
                <div className="header-address">
                Jln. Tegal Sari Desa Laut Dendang
                </div>
              </div>
            </div>

            <div className="col-md-3">
              <div
                className="d-none d-md-block d-lg-block"
                style={{ marginTop: "60px" }}
              ></div>
              <form
                className="d-flex"
                action="#"
                method="GET"
              >
                <input
                  className="form-control border-0 me-2"
                  type="search"
                  name="q"
                  placeholder="cari sesuatu..."
                  aria-label="Search"
                />
                 <button className="btn btn-primary-dark" type="submit" style={{ backgroundColor: '#003285',borderColor: '#003285',color: 'white' }}>
                  CARI
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}