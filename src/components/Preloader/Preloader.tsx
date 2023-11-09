import React from 'react'

export const Component: React.FC = () => (
  <div className="page-loader-wrapper flex-column align-items-center justify-content-center">
    <div className="loader">
      <div className="preloader">
        <div className="spinner-layer pl-green">
          <div className="circle-clipper left">
            <div className="circle"></div>
          </div>
          <div className="circle-clipper right">
            <div className="circle"></div>
          </div>
        </div>
      </div>
      <p className="fs-12 fw-semibold mb-0 mt-3 text-uppercase">Please wait...</p>
    </div>
  </div>
)

const Container: React.FC = () => {
  return <Component />
}

Container.displayName = 'Preloader'

export default Container
