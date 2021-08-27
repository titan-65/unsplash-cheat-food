import React from 'react'

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-white fixed-top"
      style={{ boxShadow: '0 6px 10px -4px rgba(0,0,0,.15)' }}>
      <div className="container">
        <div className="navbar-translate">
          <div
            className="navbar-brand"
            rel="tooltip"
            title="Zhyjenae"
            data-placement="bottom"
            target="_blank">
            {/* <a href="/">
              <img
                src="https://avatars.githubusercontent.com/u/78337684?s=200&v=4"
                alt="Zhyjenae"
              />
            </a> */}
            <span>Zhyjenae</span>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
            aria-controls="navigation-index"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-bar bar1"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div
          className="collapse navbar-collapse"
          data-nav-image="../assets/img/blurred-image-1.jpg"
          data-color="orange">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                href="/about"
                className="nav-link"
                data-toggle="dropdown"
                aria-expanded="false">
                About
              </a>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Header
