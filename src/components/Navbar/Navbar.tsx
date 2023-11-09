import React from 'react'

export const Component: React.FC = () => (
  <div className="navbar-wrap sticky-top no-logo">
    <div className="container-lg nav-container position-relative">
      <nav className="custom-navbar navbar navbar-expand-lg">
        <a className="border-end navbar-brand pe-3 pe-sm-4 py-0" href="index.html">
          <img className="logo-dark" src="img/logo.png" alt="" />
          <img className="logo-white" src="img/logo-white.png" alt="" />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="align-items-center border-bottom d-flex d-lg-none  justify-content-between mb-3 navbar-collapse__header pb-3">
            <div className="collapse-brand flex-shrink-0">
              <a href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>

            <div className="flex-grow-1 ms-3 text-end">
              <button type="button" className="bg-transparent border-0 collapse-close p-0 position-relative">
                <span></span> <span></span>
              </button>
            </div>
          </div>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle active" href="#">
                Home
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item active" href="index.html">
                    Home 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="home-2.html">
                    Home 2{' '}
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="home-3.html">
                    Home 3
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="home-3-header-dark.html">
                    Home 3 (Header dark)
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="properties-list.html">
                Properties
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="agent-grid.html">
                Agent Finder
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#">
                Pages
              </a>
              <ul className="dropdown-menu mega-menu">
                <li>
                  <span className="row">
                    <span className="col-6">
                      <a className="dropdown-item col-6" href="index.html">
                        Home 1
                      </a>
                      <a className="dropdown-item col-6 active" href="home-2.html">
                        Home 2
                      </a>
                      <a className="dropdown-item col-6" href="home-3.html">
                        Home 3
                      </a>
                      <a className="dropdown-item col-6" href="home-3-header-dark.html">
                        Home 3 (Header dark)
                      </a>
                      <a className="dropdown-item col-6" href="properties-list.html">
                        Properties List
                      </a>
                      <a className="dropdown-item col-6" href="properties-grid.html">
                        Properties Grid
                      </a>
                      <a className="dropdown-item col-6" href="property-details.html">
                        Property Details 1
                      </a>
                      <a className="dropdown-item col-6" href="property-details-2.html">
                        Property Details 2
                      </a>
                      <a className="dropdown-item col-6" href="about.html">
                        About Us
                      </a>
                      <a className="dropdown-item col-6" href="agent-list.html">
                        Agents List
                      </a>
                      <a className="dropdown-item col-6" href="agent-grid.html">
                        Agents Grid
                      </a>
                      <a className="dropdown-item col-6" href="agent-details.html">
                        Agent Details
                      </a>
                      <a className="dropdown-item col-6" href="post-property.html">
                        Post Property
                      </a>
                    </span>
                    <span className="col-6">
                      <a className="dropdown-item col-6" href="locations.html">
                        Locations
                      </a>
                      <a className="dropdown-item col-6" href="contact.html">
                        Contact Us
                      </a>
                      <a className="dropdown-item col-6" href="blog-1.html">
                        Blog 1
                      </a>
                      <a className="dropdown-item col-6" href="blog-2.html">
                        Blog 2
                      </a>
                      <a className="dropdown-item col-6" href="blog-details.html">
                        Blog Details
                      </a>
                      <a className="dropdown-item col-6" href="signin.html">
                        Sign In
                      </a>
                      <a className="dropdown-item col-6" href="signup.html">
                        Sign Up
                      </a>
                      <a className="dropdown-item col-6" href="forgot-password.html">
                        Forgot Password
                      </a>
                      <a className="dropdown-item col-6" href="two-factor-auth.html">
                        Two factor authentication
                      </a>
                      <a className="dropdown-item col-6" href="terms-conditions.html">
                        Terms & Conditions
                      </a>
                      <a className="dropdown-item col-6" href="404.html">
                        404 Page
                      </a>
                      <a className="dropdown-item col-6" href="505.html">
                        505 Page
                      </a>
                      <a className="dropdown-item col-6" href="style-guide.html">
                        Style Guide
                      </a>
                    </span>
                  </span>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex gap-1 ms-lg-5">
          <a
            href="javascript:void(0)"
            data-bs-toggle="modal"
            data-bs-target="#cartEmpty"
            className="align-items-center btn cart-button d-none d-xl-flex ms-2 ms-lg-0"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="ms-2">Cart</span>
            <span className="align-items-center cart-quantity d-flex fw-bold justify-content-center ms-2 rounded-circle">
              0
            </span>
          </a>

          <a href="cart.html" className="btn btn-primary d-none d-sm-inline-block d-xl-none">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>

          <a href="signin.html" className="btn btn-primary btn-login hstack gap-2">
            <i className="fa-solid fa-arrow-right-to-bracket"></i>
            <div className="vr d-none d-sm-inline-block"></div>
            <span className="d-none d-sm-inline-block">Login / Signup</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  </div>
)

const Container: React.FC = () => {
  return <Component />
}

Container.displayName = 'Navbar'

export default Container
