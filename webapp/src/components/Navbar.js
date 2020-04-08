import React from 'react'

export default function Navbar(props) {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-dark sticky-top title-color" style={{ marginTop: '-8px' }}>
        <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          className="navbar-toggler"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${props.category === '首页' ? 'active' : ''}`}>
              <a href="#/" className="nav-link">
                <i className="fa fa-fw fa-home"></i>
                首页
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}