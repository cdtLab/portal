import React from 'react'

export default function Footer() {
  return (
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
      <div className="container">
        <ul className="list-inline navbar-text">
          <li className="list-inline-item">
            Copyright © 2016 cdt lab. All rights reserved.
          </li>

          <li className="list-inline-item">
            <a href="http://beian.miit.gov.cn" target="_blank">
              黑ICP备18002263号
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}