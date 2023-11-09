import React from 'react'

export const Component: React.FC = () => (
  <div className="topbar d-none d-lg-block topbar-bg bg-primary text-white">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4 col-lg-3 col-xl-4">
          <a href="index.html" className="headerLogo">
            <img src="img/logo-white.png" alt="" height="40" />
          </a>
        </div>
        <div className="col-md-8 col-lg-9 col-xl-8 d-none d-md-block">
          <div className="d-flex justify-content-end">
            <div className="d-flex align-items-center help-info">
              <div className="flex-shrink-0 icon">
                <i className="fa-clock fa-solid fs-30 text-white opacity-75"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">MON - FRI: 08:00AM - 20:00PM</h6>
                <p className="sub-text mb-0 fs-14">
                  Saturday and Sunday - <span className="fw-semibold text-warning">CLOSED</span>
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center help-info ms-4">
              <div className="flex-shrink-0 icon">
                <i className="fa-solid fa-mobile-button fs-30 text-white opacity-75"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">+ 0800 2466 7921</h6>
                <p className="sub-text mb-0 fs-14">Contact Us For Help</p>
              </div>
            </div>
            <div className="d-flex align-items-center help-info ms-4">
              <div className="flex-shrink-0 icon">
                <i className="fa-solid fa-street-view fs-30 text-white opacity-75"></i>
              </div>
              <div className="flex-grow-1 ms-3">
                <h6 className="fs-15 fw-semibold help-info__title mb-0 text-white">34th Avenue</h6>
                <p className="sub-text mb-0 fs-14">New York, W2 3XE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Container: React.FC = () => {
  return <Component />
}

Container.displayName = 'Topbar'

export default Container
